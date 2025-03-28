import { Axios, Method } from "axios";
import { getTuyaCloudEndpoint, TuyaSupportedCountry } from "./utils";
import {
  TuyaDeviceStatus,
  RTSPToken,
  TuyaDeviceConfig,
  TuyaResponse,
  MQTTConfig
} from "./const";
import { randomBytes, createHmac, hash } from "node:crypto";

interface Session {
  accessToken: string;
  refreshToken: string;
  expiration: Date;
  uid: string;
}

export class TuyaCloud {
  // Tuya IoT Cloud API

  private readonly nonce: string;
  private session?: Session = undefined;
  private client: Axios;

  private _cameras: TuyaDeviceConfig[] | undefined;

  constructor(
    private readonly userId: string,
    private readonly clientId: string,
    private readonly secret: string,
    private readonly country: TuyaSupportedCountry
  ) {
    this.userId = userId;
    this.clientId = clientId;
    this.secret = secret;
    this.nonce = randomBytes(16).toString('hex');
    this.country = country;
    this.client = new Axios({
      baseURL: getTuyaCloudEndpoint(this.country),
      timeout: 5 * 1e3,
    });
    this._cameras = undefined;
  }

  public async login(): Promise<boolean> {
    await this.refreshAccessTokenIfNeeded();
    return this.isSessionValid;
  }

  get isSessionValid(): boolean {
    return (
      this.session !== undefined &&
      this.session.expiration.getTime() > Date.now()
    );
  }

  // Set Device Status

  public async updateDevice(
    device: TuyaDeviceConfig,
    statuses: TuyaDeviceStatus[]
  ): Promise<boolean> {
    if (!device) {
      return false;
    }

    const result = await this.post<boolean>(
      `/v1.0/devices/${device.id}/commands`,
      {
        commands: statuses,
      }
    );

    return result.success && result.result;
  }

  // Get Devices

  public async fetchDevices(): Promise<boolean> {
    let response = await this.get<TuyaDeviceConfig[]>(
      `/v1.0/users/${this.userId}/devices`
    );

    if (!response.success) {
      return false;
    }

    let devicesState = response.result;

    for (const state of devicesState) {
      let response = await this.get<any>(`/v1.0/devices/${state.id}/functions`);
      if (!response.success) {
        continue;
      }

      state.functions = response.result.functions;
    }

    this._cameras = devicesState.filter((element) => element.category === "sp");
    return true;
  }

  public get cameras(): TuyaDeviceConfig[] | undefined {
    return this._cameras;
  }

  // Camera Functions

  public async getRTSPS(
    camera: TuyaDeviceConfig
  ): Promise<RTSPToken | undefined> {
    interface RTSPResponse {
      url: string;
    }

    const response = await this.post<RTSPResponse>(
      `/v1.0/devices/${camera.id}/stream/actions/allocate`,
      { type: "rtsp" }
    );

    if (response.success) {
      return {
        url: response.result.url,
        expires: new Date(response.t + 30 * 1000), // This will expire in 30 seconds.
      };
    } else {
      return undefined;
    }
  }

  public getSessionUserId(): string | undefined {
    return this.session?.uid;
  }

  // Tuya IoT Cloud Requests API

  public async get<T>(
    path: string,
    query: { [k: string]: any } = {}
  ): Promise<TuyaResponse<T>> {
    return this.request<T>("GET", path, query);
  }

  public async post<T>(
    path: string,
    body: { [k: string]: any } = {}
  ): Promise<TuyaResponse<T>> {
    return this.request<T>("POST", path, {}, body);
  }

  private async request<T = any>(
    method: Method,
    path: string,
    query: { [k: string]: any } = {},
    body: { [k: string]: any } = {}
  ): Promise<TuyaResponse<T>> {
    if (!(await this.login())) {
      return {
        result: undefined as any,
        success: false,
        t: Date.now(),
      };
    }

    const timestamp = Date.now().toString();
    const headers = { client_id: this.clientId };

    const stringToSign = this.getStringToSign(
      method,
      path,
      query,
      headers,
      body
    );

    const hashed = createHmac("sha256", this.secret);
    hashed.update(
      this.clientId +
      this.session?.accessToken +
      timestamp +
      this.nonce +
      stringToSign,
    )

    const sign = hashed.digest('hex').toUpperCase();

    let requestHeaders = {
      client_id: this.clientId,
      sign: sign,
      sign_method: "HMAC-SHA256",
      t: timestamp,
      access_token: this.session?.accessToken,
      "Signature-Headers": Object.keys(headers).join(":"),
      nonce: this.nonce,
    };

    return this.client
      .request<TuyaResponse<T>>({
        method,
        url: path,
        data: Object.keys(body).length > 0 ? JSON.stringify(body) : undefined,
        params: query,
        headers: requestHeaders,
        responseType: "json",
        transformResponse: (data) => JSON.parse(data),
      })
      .then((value) => {
        return value.data;
      });
  }

  private getStringToSign(
    method: Method,
    path: string,
    query: { [k: string]: any } = {},
    headers: { [k: string]: string } = {},
    body: { [k: string]: any } = {}
  ): string {
    const isQueryEmpty = Object.keys(query).length == 0;
    const isHeaderEmpty = Object.keys(headers).length == 0;
    const isBodyEmpty = Object.keys(body).length == 0;
    const httpMethod = method.toUpperCase();
    const url =
      path +
      (isQueryEmpty
        ? ""
        : "?" +
          Object.keys(query)
            .map((key) => `${key}=${query[key]}`)
            .join("&"));
    const contentHashed = hash("sha256", isBodyEmpty ? "" : JSON.stringify(body));
    const headersParsed = Object.keys(headers)
      .map((key) => `${key}:${headers[key]}`)
      .join("\n");
    const headersStr = isHeaderEmpty ? "" : headersParsed + "\n";
    const signStr = [httpMethod, contentHashed, headersStr, url].join("\n");
    return signStr;
  }

  private async refreshAccessTokenIfNeeded() {
    if (this.isSessionValid) {
      return;
    }

    let url: string;

    if (!this.session) {
      url = "/v1.0/token?grant_type=1";
    } else {
      url = `/v1.0/token/${this.session.refreshToken}`;
    }

    const timestamp = new Date().getTime().toString();
    const stringToSign = this.getStringToSign("GET", url);

    const sign = createHmac('sha256', this.secret);
    sign.update(this.clientId + timestamp + stringToSign);

    const signString = sign.digest('hex').toUpperCase();

    const headers = {
      t: timestamp,
      sign_method: "HMAC-SHA256",
      client_id: this.clientId,
      sign: signString,
    };

    let { data } = await this.client.get(url, { headers });

    interface Token {
      access_token: string;
      refresh_token: string;
      expire_time: number;
      uid: string;
    }

    let response: TuyaResponse<Token> = JSON.parse(data);

    if (!response.success) {
      this.session = undefined;
    } else {
      const newExpiration = new Date(
        Date.now() + response.result.expire_time * 1000
      );
      this.session = {
        accessToken: response.result.access_token,
        refreshToken: response.result.refresh_token,
        expiration: newExpiration,
        uid: response.result.uid,
      };
    }
  }
}
