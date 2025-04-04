
/**
 * @deprecated Will eventually be removed in favor of Sharing SDK
 */
export enum EndpointGroup {
  Europe,
  America,
  India,
  China,
}

/**
 * @deprecated Will eventually be removed in favor of Sharing SDK
 */
export interface TuyaSupportedCountry {
  country: string;
  countryCode: number;
  endpointGroup: EndpointGroup;
}

/**
 * @deprecated Will eventually be removed in favor of Sharing SDK
 */
export const TUYA_COUNTRIES: TuyaSupportedCountry[] = [
  {
    country: "Afghanistan",
    countryCode: 93,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Albania", countryCode: 355, endpointGroup: EndpointGroup.Europe },
  { country: "Algeria", countryCode: 213, endpointGroup: EndpointGroup.Europe },
  {
    country: "American Samoa",
    countryCode: 1684,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Andorra", countryCode: 376, endpointGroup: EndpointGroup.Europe },
  { country: "Angola", countryCode: 244, endpointGroup: EndpointGroup.Europe },
  {
    country: "Anguilla",
    countryCode: 1264,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Antarctica",
    countryCode: 672,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Antigua and Barbuda",
    countryCode: 1268,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Argentina",
    countryCode: 54,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Armenia", countryCode: 374, endpointGroup: EndpointGroup.Europe },
  { country: "Aruba", countryCode: 297, endpointGroup: EndpointGroup.Europe },
  {
    country: "Australia",
    countryCode: 61,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Austria", countryCode: 43, endpointGroup: EndpointGroup.Europe },
  {
    country: "Azerbaijan",
    countryCode: 994,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Bahamas",
    countryCode: 1242,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Bahrain", countryCode: 973, endpointGroup: EndpointGroup.Europe },
  {
    country: "Bangladesh",
    countryCode: 880,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Barbados",
    countryCode: 1246,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Belarus", countryCode: 375, endpointGroup: EndpointGroup.Europe },
  { country: "Belgium", countryCode: 32, endpointGroup: EndpointGroup.Europe },
  { country: "Belize", countryCode: 501, endpointGroup: EndpointGroup.Europe },
  { country: "Benin", countryCode: 229, endpointGroup: EndpointGroup.Europe },
  {
    country: "Bermuda",
    countryCode: 1441,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Bhutan", countryCode: 975, endpointGroup: EndpointGroup.Europe },
  {
    country: "Bolivia",
    countryCode: 591,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Bosnia and Herzegovina",
    countryCode: 387,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Botswana",
    countryCode: 267,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Brazil", countryCode: 55, endpointGroup: EndpointGroup.America },
  {
    country: "British Indian Ocean Territory",
    countryCode: 246,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "British Virgin Islands",
    countryCode: 1284,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Brunei", countryCode: 673, endpointGroup: EndpointGroup.Europe },
  {
    country: "Bulgaria",
    countryCode: 359,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Burkina Faso",
    countryCode: 226,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Burundi", countryCode: 257, endpointGroup: EndpointGroup.Europe },
  {
    country: "Cabo Verde",
    countryCode: 238,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Cambodia",
    countryCode: 855,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Cameroon",
    countryCode: 237,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Canada", countryCode: 1, endpointGroup: EndpointGroup.America },
  {
    country: "Cayman Islands",
    countryCode: 1345,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Central African Republic",
    countryCode: 236,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Chad", countryCode: 235, endpointGroup: EndpointGroup.Europe },
  { country: "Chile", countryCode: 56, endpointGroup: EndpointGroup.America },
  { country: "China", countryCode: 86, endpointGroup: EndpointGroup.China },
  {
    country: "Colombia",
    countryCode: 57,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Comoros", countryCode: 269, endpointGroup: EndpointGroup.Europe },
  {
    country: "Cook Islands",
    countryCode: 682,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Costa Rica",
    countryCode: 506,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Croatia", countryCode: 385, endpointGroup: EndpointGroup.Europe },
  {
    country: "Curacao",
    countryCode: 5999,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Cyprus", countryCode: 357, endpointGroup: EndpointGroup.Europe },
  {
    country: "Czech Republic",
    countryCode: 420,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Côte d’Ivoire",
    countryCode: 225,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Democratic Republic of the Congo",
    countryCode: 243,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Denmark", countryCode: 45, endpointGroup: EndpointGroup.Europe },
  {
    country: "Djibouti",
    countryCode: 253,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Dominica",
    countryCode: 1767,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Dominican Republic (1-809)",
    countryCode: 1809,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Dominican Republic (1-829)",
    countryCode: 1829,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Dominican Republic (1-849)",
    countryCode: 1849,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "East Timor",
    countryCode: 670,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Ecuador",
    countryCode: 593,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Egypt", countryCode: 20, endpointGroup: EndpointGroup.Europe },
  {
    country: "El Salvador",
    countryCode: 503,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Equatorial Guinea",
    countryCode: 240,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Eritrea", countryCode: 291, endpointGroup: EndpointGroup.Europe },
  { country: "Estonia", countryCode: 372, endpointGroup: EndpointGroup.Europe },
  {
    country: "Ethiopia",
    countryCode: 251,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Falkland Islands",
    countryCode: 500,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Faroe Islands",
    countryCode: 298,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Fiji", countryCode: 679, endpointGroup: EndpointGroup.Europe },
  { country: "Finland", countryCode: 358, endpointGroup: EndpointGroup.Europe },
  { country: "France", countryCode: 33, endpointGroup: EndpointGroup.Europe },
  {
    country: "French Guiana",
    countryCode: 594,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "French Polynesia",
    countryCode: 689,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Gabon", countryCode: 241, endpointGroup: EndpointGroup.Europe },
  { country: "Gambia", countryCode: 220, endpointGroup: EndpointGroup.Europe },
  { country: "Georgia", countryCode: 995, endpointGroup: EndpointGroup.Europe },
  { country: "Germany", countryCode: 49, endpointGroup: EndpointGroup.Europe },
  { country: "Ghana", countryCode: 233, endpointGroup: EndpointGroup.Europe },
  {
    country: "Gibraltar",
    countryCode: 350,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Greece", countryCode: 30, endpointGroup: EndpointGroup.Europe },
  {
    country: "Greenland",
    countryCode: 299,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Grenada",
    countryCode: 1473,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Guam", countryCode: 1671, endpointGroup: EndpointGroup.Europe },
  {
    country: "Guatemala",
    countryCode: 502,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Guinea", countryCode: 224, endpointGroup: EndpointGroup.Europe },
  {
    country: "Guinea-Bissau",
    countryCode: 245,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Guyana", countryCode: 592, endpointGroup: EndpointGroup.Europe },
  { country: "Haiti", countryCode: 509, endpointGroup: EndpointGroup.Europe },
  {
    country: "Honduras",
    countryCode: 504,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Hong Kong",
    countryCode: 852,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Hungary", countryCode: 36, endpointGroup: EndpointGroup.Europe },
  { country: "Iceland", countryCode: 354, endpointGroup: EndpointGroup.Europe },
  { country: "India", countryCode: 91, endpointGroup: EndpointGroup.India },
  {
    country: "Indonesia",
    countryCode: 62,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Iraq", countryCode: 964, endpointGroup: EndpointGroup.Europe },
  { country: "Ireland", countryCode: 353, endpointGroup: EndpointGroup.Europe },
  { country: "Israel", countryCode: 972, endpointGroup: EndpointGroup.Europe },
  { country: "Italy", countryCode: 39, endpointGroup: EndpointGroup.Europe },
  {
    country: "Jamaica",
    countryCode: 1876,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Japan", countryCode: 81, endpointGroup: EndpointGroup.America },
  { country: "Jordan", countryCode: 962, endpointGroup: EndpointGroup.Europe },
  { country: "Kenya", countryCode: 254, endpointGroup: EndpointGroup.Europe },
  {
    country: "Kiribati",
    countryCode: 686,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Kuwait", countryCode: 965, endpointGroup: EndpointGroup.Europe },
  {
    country: "Kyrgyzstan",
    countryCode: 996,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Laos", countryCode: 856, endpointGroup: EndpointGroup.Europe },
  { country: "Latvia", countryCode: 371, endpointGroup: EndpointGroup.Europe },
  { country: "Lebanon", countryCode: 961, endpointGroup: EndpointGroup.Europe },
  { country: "Lesotho", countryCode: 266, endpointGroup: EndpointGroup.Europe },
  { country: "Liberia", countryCode: 231, endpointGroup: EndpointGroup.Europe },
  { country: "Libya", countryCode: 218, endpointGroup: EndpointGroup.Europe },
  {
    country: "Liechtenstein",
    countryCode: 423,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Lithuania",
    countryCode: 370,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Luxembourg",
    countryCode: 352,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Macao", countryCode: 853, endpointGroup: EndpointGroup.America },
  {
    country: "Macedonia",
    countryCode: 389,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Madagascar",
    countryCode: 261,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Malawi", countryCode: 265, endpointGroup: EndpointGroup.Europe },
  {
    country: "Malaysia",
    countryCode: 60,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Maldives",
    countryCode: 960,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Mali", countryCode: 223, endpointGroup: EndpointGroup.Europe },
  { country: "Malta", countryCode: 356, endpointGroup: EndpointGroup.Europe },
  {
    country: "Marshall Islands",
    countryCode: 692,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Martinique",
    countryCode: 596,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Mauritania",
    countryCode: 222,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Mauritius",
    countryCode: 230,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Mayotte", countryCode: 262, endpointGroup: EndpointGroup.Europe },
  { country: "Mexico", countryCode: 52, endpointGroup: EndpointGroup.America },
  {
    country: "Micronesia",
    countryCode: 691,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Moldova", countryCode: 373, endpointGroup: EndpointGroup.Europe },
  { country: "Monaco", countryCode: 377, endpointGroup: EndpointGroup.Europe },
  {
    country: "Mongolia",
    countryCode: 976,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Montenegro",
    countryCode: 382,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Montserrat",
    countryCode: 1664,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Morocco", countryCode: 212, endpointGroup: EndpointGroup.Europe },
  {
    country: "Mozambique",
    countryCode: 258,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Myanmar", countryCode: 95, endpointGroup: EndpointGroup.America },
  { country: "Namibia", countryCode: 264, endpointGroup: EndpointGroup.Europe },
  { country: "Nauru", countryCode: 674, endpointGroup: EndpointGroup.America },
  { country: "Nepal", countryCode: 977, endpointGroup: EndpointGroup.Europe },
  {
    country: "Netherlands",
    countryCode: 31,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "New Caledonia",
    countryCode: 687,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "New Zealand",
    countryCode: 64,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Nicaragua",
    countryCode: 505,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Niger", countryCode: 227, endpointGroup: EndpointGroup.Europe },
  { country: "Nigeria", countryCode: 234, endpointGroup: EndpointGroup.Europe },
  { country: "Niue", countryCode: 683, endpointGroup: EndpointGroup.America },
  {
    country: "Northern Mariana Islands",
    countryCode: 1670,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Norway", countryCode: 47, endpointGroup: EndpointGroup.Europe },
  { country: "Oman", countryCode: 968, endpointGroup: EndpointGroup.Europe },
  { country: "Pakistan", countryCode: 92, endpointGroup: EndpointGroup.Europe },
  { country: "Palau", countryCode: 680, endpointGroup: EndpointGroup.Europe },
  {
    country: "Palestine",
    countryCode: 970,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Panama", countryCode: 507, endpointGroup: EndpointGroup.Europe },
  {
    country: "Papua New Guinea",
    countryCode: 675,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Paraguay",
    countryCode: 595,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Peru", countryCode: 51, endpointGroup: EndpointGroup.America },
  {
    country: "Philippines",
    countryCode: 63,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Poland", countryCode: 48, endpointGroup: EndpointGroup.Europe },
  {
    country: "Portugal",
    countryCode: 351,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Puerto Rico",
    countryCode: 1787,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Qatar", countryCode: 974, endpointGroup: EndpointGroup.Europe },
  {
    country: "Republic of the Congo",
    countryCode: 242,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Reunion", countryCode: 262, endpointGroup: EndpointGroup.Europe },
  { country: "Romania", countryCode: 40, endpointGroup: EndpointGroup.Europe },
  { country: "Russia", countryCode: 7, endpointGroup: EndpointGroup.Europe },
  { country: "Rwanda", countryCode: 250, endpointGroup: EndpointGroup.Europe },
  {
    country: "Saint Kitts and Nevis",
    countryCode: 1869,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Saint Lucia",
    countryCode: 1758,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Saint Martin",
    countryCode: 590,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Saint Pierre and Miquelon",
    countryCode: 508,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Saint Vincent and the Grenadines",
    countryCode: 1784,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Samoa", countryCode: 685, endpointGroup: EndpointGroup.Europe },
  {
    country: "San Marino",
    countryCode: 378,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Saudi Arabia",
    countryCode: 966,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Sao Tome and Principe",
    countryCode: 239,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Senegal", countryCode: 221, endpointGroup: EndpointGroup.Europe },
  { country: "Serbia", countryCode: 381, endpointGroup: EndpointGroup.Europe },
  {
    country: "Seychelles",
    countryCode: 248,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Sierra Leone",
    countryCode: 232,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Singapore",
    countryCode: 65,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Sint Maarten",
    countryCode: 1721,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Slovakia",
    countryCode: 421,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Slovenia",
    countryCode: 386,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Solomon Islands",
    countryCode: 677,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Somalia", countryCode: 252, endpointGroup: EndpointGroup.Europe },
  {
    country: "South Africa",
    countryCode: 27,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "South Korea",
    countryCode: 82,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Spain", countryCode: 34, endpointGroup: EndpointGroup.Europe },
  {
    country: "Sri Lanka",
    countryCode: 94,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Suriname",
    countryCode: 597,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Svalbard and Jan Mayen",
    countryCode: 4779,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Swaziland",
    countryCode: 268,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Sweden", countryCode: 46, endpointGroup: EndpointGroup.Europe },
  {
    country: "Switzerland",
    countryCode: 41,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Taiwan", countryCode: 886, endpointGroup: EndpointGroup.America },
  {
    country: "Tajikistan",
    countryCode: 992,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Tanzania",
    countryCode: 255,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Thailand",
    countryCode: 66,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Togo", countryCode: 228, endpointGroup: EndpointGroup.Europe },
  {
    country: "Tokelau",
    countryCode: 690,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Tonga", countryCode: 676, endpointGroup: EndpointGroup.Europe },
  {
    country: "Trinidad and Tobago",
    countryCode: 1868,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Tunisia", countryCode: 216, endpointGroup: EndpointGroup.Europe },
  { country: "Turkey", countryCode: 90, endpointGroup: EndpointGroup.Europe },
  {
    country: "Turkmenistan",
    countryCode: 993,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Turks and Caicos Islands",
    countryCode: 1649,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Tuvalu", countryCode: 688, endpointGroup: EndpointGroup.Europe },
  {
    country: "United States of America",
    countryCode: 1,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "U.S. Virgin Islands",
    countryCode: 1340,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Uganda", countryCode: 256, endpointGroup: EndpointGroup.Europe },
  { country: "Ukraine", countryCode: 380, endpointGroup: EndpointGroup.Europe },
  {
    country: "United Arab Emirates",
    countryCode: 971,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "United Kingdom",
    countryCode: 44,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Uruguay",
    countryCode: 598,
    endpointGroup: EndpointGroup.America,
  },
  {
    country: "Uzbekistan",
    countryCode: 998,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Vanuatu",
    countryCode: 678,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Vatican", countryCode: 379, endpointGroup: EndpointGroup.Europe },
  {
    country: "Venezuela",
    countryCode: 58,
    endpointGroup: EndpointGroup.America,
  },
  { country: "Vietnam", countryCode: 84, endpointGroup: EndpointGroup.America },
  {
    country: "Wallis and Futuna",
    countryCode: 681,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Western Sahara",
    countryCode: 212,
    endpointGroup: EndpointGroup.Europe,
  },
  { country: "Yemen", countryCode: 967, endpointGroup: EndpointGroup.Europe },
  { country: "Zambia", countryCode: 260, endpointGroup: EndpointGroup.Europe },
  {
    country: "Zimbabwe",
    countryCode: 263,
    endpointGroup: EndpointGroup.Europe,
  },
  {
    country: "Åland Islands",
    countryCode: 35818,
    endpointGroup: EndpointGroup.America,
  },
];

/**
 * @deprecated Will eventually be removed in favor of Sharing SDK
 */
export function getEndPointWithCountryName(name: string) {
  return getTuyaCloudEndpoint(TUYA_COUNTRIES.find(c => c.country == name) ?? { endpointGroup: EndpointGroup.America });
}

/**
 * @deprecated Will eventually be removed in favor of Sharing SDK
 */
export function getTuyaCloudEndpoint<T extends { endpointGroup: EndpointGroup }>(country: T): string {
  const AMERICA = "https://openapi.tuyaus.com";
  const EUROPE = "https://openapi.tuyaeu.com";
  const INDIA = "https://openapi.tuyain.com";
  const CHINA = "https://openapi.tuyacn.com";

  switch (country.endpointGroup) {
    case EndpointGroup.America:
      return AMERICA;
    case EndpointGroup.Europe:
      return EUROPE;
    case EndpointGroup.India:
      return INDIA;
    case EndpointGroup.China:
      return CHINA;
  }
}

/**
 * @deprecated Will eventually be removed in favor of Sharing SDK
 */
export function getTuyaPulsarEndpoint<T extends { endpointGroup: EndpointGroup }>(country: T): string {
  const CHINA = "wss://mqe.tuyacn.com:8285/";
  const AMERICA = "wss://mqe.tuyaus.com:8285/";
  const EUROPE = "wss://mqe.tuyaeu.com:8285/";
  const INDIA = "wss://mqe.tuyain.com:8285/";

  switch (country.endpointGroup) {
    case EndpointGroup.America:
      return AMERICA;
    case EndpointGroup.Europe:
      return EUROPE;
    case EndpointGroup.India:
      return INDIA;
    case EndpointGroup.China:
      return CHINA;
  }
}
