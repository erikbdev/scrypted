export interface TuyaResponse<T> {
  success: boolean;
  t: number;
  result: T;
}

export interface TuyaDeviceConfig {
  id: string;
  name: string;
  local_key: string;
  category: string;
  product_id: string;
  product_name: string;
  sub: boolean;
  uuid: string;
  online: boolean;
  icon: string;
  ip: string;
  time_zone: string;
  active_time: number;
  create_time: number;
  update_time: number;
  status: TuyaDeviceStatus[];
  functions: DeviceFunction[];

  // Not necessary?

  uid: string;
  biz_type: number;
  model: string;
  owner_id: string;
}

export interface TuyaDeviceStatus {
  code: string;
  value: any;
}

export interface DeviceFunction {
  code: string;
  type: string;
  values: string;
  desc: string;
  name: string;
}

export interface RTSPToken {
  url: string;
  expires: Date;
}

export interface MQTTConfig {
  url: string;
  username: string;
  password: string;
  client_id: string;
  source_topic: string;
  sink_topic: string;
  expire_time: number;
}