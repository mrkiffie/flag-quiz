import * as flags from "./flags";

export interface ICountry {
  iso: string;
  iso3: string;
  capital: string;
  continent: string;
  name: string;
  neighbours: ICountry[];
  phone: string;
  tld: string;
  flag?: string;
}

interface ICountryRaw {
  iso: string;
  iso3: string;
  capital: string;
  continent: string;
  name: string;
  neighbours: string[];
  phone: string;
  tld: string;
  flag?: string;
}

const countries: ICountryRaw[] = [
  {
    iso: "AF",
    iso3: "AFG",
    capital: "Kabul",
    continent: "AS",
    name: "Afghanistan",
    neighbours: ["TM", "CN", "IR", "TJ", "PK", "UZ"],
    phone: "93",
    tld: ".af"
  },
  {
    iso: "AL",
    iso3: "ALB",
    capital: "Tirana",
    continent: "EU",
    name: "Albania",
    neighbours: ["MK", "GR", "ME", "RS"],
    phone: "355",
    tld: ".al"
  },
  {
    iso: "DZ",
    iso3: "DZA",
    capital: "Algiers",
    continent: "AF",
    name: "Algeria",
    neighbours: ["NE", "LY", "MR", "TN", "MA", "ML"],
    phone: "213",
    tld: ".dz"
  },
  {
    iso: "AD",
    iso3: "AND",
    capital: "Andorra la Vella",
    continent: "EU",
    name: "Andorra",
    neighbours: ["ES", "FR"],
    phone: "376",
    tld: ".ad"
  },
  {
    iso: "AO",
    iso3: "AGO",
    capital: "Luanda",
    continent: "AF",
    name: "Angola",
    neighbours: ["CD", "NA", "ZM", "CG"],
    phone: "244",
    tld: ".ao"
  },
  {
    iso: "AG",
    iso3: "ATG",
    capital: "St. John's",
    continent: "NA",
    name: "Antigua and Barbuda",
    neighbours: [],
    phone: "+1-268",
    tld: ".ag"
  },
  {
    iso: "AR",
    iso3: "ARG",
    capital: "Buenos Aires",
    continent: "SA",
    name: "Argentina",
    neighbours: ["CL", "BO", "UY", "PY", "BR"],
    phone: "54",
    tld: ".ar"
  },
  {
    iso: "AM",
    iso3: "ARM",
    capital: "Yerevan",
    continent: "AS",
    name: "Armenia",
    neighbours: ["GE", "IR", "AZ", "TR"],
    phone: "374",
    tld: ".am"
  },
  {
    iso: "AU",
    iso3: "AUS",
    capital: "Canberra",
    continent: "OC",
    name: "Australia",
    neighbours: [],
    phone: "61",
    tld: ".au"
  },
  {
    iso: "AT",
    iso3: "AUT",
    capital: "Vienna",
    continent: "EU",
    name: "Austria",
    neighbours: ["CH", "DE", "HU", "SK", "CZ", "IT", "SI", "LI"],
    phone: "43",
    tld: ".at"
  },
  {
    iso: "AZ",
    iso3: "AZE",
    capital: "Baku",
    continent: "AS",
    name: "Azerbaijan",
    neighbours: ["GE", "IR", "AM", "TR", "RU"],
    phone: "994",
    tld: ".az"
  },
  {
    iso: "BS",
    iso3: "BHS",
    capital: "Nassau",
    continent: "NA",
    name: "Bahamas",
    neighbours: [],
    phone: "+1-242",
    tld: ".bs"
  },
  {
    iso: "BH",
    iso3: "BHR",
    capital: "Manama",
    continent: "AS",
    name: "Bahrain",
    neighbours: [],
    phone: "973",
    tld: ".bh"
  },
  {
    iso: "BD",
    iso3: "BGD",
    capital: "Dhaka",
    continent: "AS",
    name: "Bangladesh",
    neighbours: ["MM", "IN"],
    phone: "880",
    tld: ".bd"
  },
  {
    iso: "BB",
    iso3: "BRB",
    capital: "Bridgetown",
    continent: "NA",
    name: "Barbados",
    neighbours: [],
    phone: "+1-246",
    tld: ".bb"
  },
  {
    iso: "BY",
    iso3: "BLR",
    capital: "Minsk",
    continent: "EU",
    name: "Belarus",
    neighbours: ["PL", "LT", "UA", "RU", "LV"],
    phone: "375",
    tld: ".by"
  },
  {
    iso: "BE",
    iso3: "BEL",
    capital: "Brussels",
    continent: "EU",
    name: "Belgium",
    neighbours: ["DE", "NL", "LU", "FR"],
    phone: "32",
    tld: ".be"
  },
  {
    iso: "BZ",
    iso3: "BLZ",
    capital: "Belmopan",
    continent: "NA",
    name: "Belize",
    neighbours: ["GT", "MX"],
    phone: "501",
    tld: ".bz"
  },
  {
    iso: "BJ",
    iso3: "BEN",
    capital: "Porto-Novo",
    continent: "AF",
    name: "Benin",
    neighbours: ["NE", "TG", "BF", "NG"],
    phone: "229",
    tld: ".bj"
  },
  {
    iso: "BT",
    iso3: "BTN",
    capital: "Thimphu",
    continent: "AS",
    name: "Bhutan",
    neighbours: ["CN", "IN"],
    phone: "975",
    tld: ".bt"
  },
  {
    iso: "BO",
    iso3: "BOL",
    capital: "Sucre",
    continent: "SA",
    name: "Bolivia",
    neighbours: ["PE", "CL", "PY", "BR", "AR"],
    phone: "591",
    tld: ".bo"
  },
  {
    iso: "BA",
    iso3: "BIH",
    capital: "Sarajevo",
    continent: "EU",
    name: "Bosnia and Herzegovina",
    neighbours: ["HR", "ME", "RS"],
    phone: "387",
    tld: ".ba"
  },
  {
    iso: "BW",
    iso3: "BWA",
    capital: "Gaborone",
    continent: "AF",
    name: "Botswana",
    neighbours: ["ZW", "ZA", "NA"],
    phone: "267",
    tld: ".bw"
  },
  {
    iso: "BR",
    iso3: "BRA",
    capital: "Brasilia",
    continent: "SA",
    name: "Brazil",
    neighbours: ["SR", "PE", "BO", "UY", "GY", "PY", "VE", "CO", "AR"],
    phone: "55",
    tld: ".br"
  },
  {
    iso: "BN",
    iso3: "BRN",
    capital: "Bandar Seri Begawan",
    continent: "AS",
    name: "Brunei",
    neighbours: ["MY"],
    phone: "673",
    tld: ".bn"
  },
  {
    iso: "BG",
    iso3: "BGR",
    capital: "Sofia",
    continent: "EU",
    name: "Bulgaria",
    neighbours: ["MK", "GR", "RO", "TR", "RS"],
    phone: "359",
    tld: ".bg"
  },
  {
    iso: "BF",
    iso3: "BFA",
    capital: "Ouagadougou",
    continent: "AF",
    name: "Burkina Faso",
    neighbours: ["NE", "BJ", "GH", "CI", "TG", "ML"],
    phone: "226",
    tld: ".bf"
  },
  {
    iso: "BI",
    iso3: "BDI",
    capital: "Bujumbura",
    continent: "AF",
    name: "Burundi",
    neighbours: ["TZ", "CD", "RW"],
    phone: "257",
    tld: ".bi"
  },
  {
    iso: "KH",
    iso3: "KHM",
    capital: "Phnom Penh",
    continent: "AS",
    name: "Cambodia",
    neighbours: ["LA", "TH", "VN"],
    phone: "855",
    tld: ".kh"
  },
  {
    iso: "CM",
    iso3: "CMR",
    capital: "Yaounde",
    continent: "AF",
    name: "Cameroon",
    neighbours: ["TD", "CF", "GA", "GQ", "CG", "NG"],
    phone: "237",
    tld: ".cm"
  },
  {
    iso: "CA",
    iso3: "CAN",
    capital: "Ottawa",
    continent: "NA",
    name: "Canada",
    neighbours: ["US"],
    phone: "1",
    tld: ".ca"
  },
  {
    iso: "CV",
    iso3: "CPV",
    capital: "Praia",
    continent: "AF",
    name: "Cape Verde",
    neighbours: [],
    phone: "238",
    tld: ".cv"
  },
  {
    iso: "CF",
    iso3: "CAF",
    capital: "Bangui",
    continent: "AF",
    name: "Central African Republic",
    neighbours: ["TD", "SD", "CD", "SS", "CM", "CG"],
    phone: "236",
    tld: ".cf"
  },
  {
    iso: "TD",
    iso3: "TCD",
    capital: "N'Djamena",
    continent: "AF",
    name: "Chad",
    neighbours: ["NE", "LY", "CF", "SD", "CM", "NG"],
    phone: "235",
    tld: ".td"
  },
  {
    iso: "CL",
    iso3: "CHL",
    capital: "Santiago",
    continent: "SA",
    name: "Chile",
    neighbours: ["PE", "BO", "AR"],
    phone: "56",
    tld: ".cl"
  },
  {
    iso: "CN",
    iso3: "CHN",
    capital: "Beijing",
    continent: "AS",
    name: "China",
    neighbours: [
      "LA",
      "BT",
      "TJ",
      "KZ",
      "MN",
      "AF",
      "NP",
      "MM",
      "KG",
      "PK",
      "KP",
      "RU",
      "VN",
      "IN"
    ],
    phone: "86",
    tld: ".cn"
  },
  {
    iso: "CO",
    iso3: "COL",
    capital: "Bogota",
    continent: "SA",
    name: "Colombia",
    neighbours: ["EC", "PE", "PA", "BR", "VE"],
    phone: "57",
    tld: ".co"
  },
  {
    iso: "KM",
    iso3: "COM",
    capital: "Moroni",
    continent: "AF",
    name: "Comoros",
    neighbours: [],
    phone: "269",
    tld: ".km"
  },
  {
    iso: "CR",
    iso3: "CRI",
    capital: "San Jose",
    continent: "NA",
    name: "Costa Rica",
    neighbours: ["PA", "NI"],
    phone: "506",
    tld: ".cr"
  },
  {
    iso: "HR",
    iso3: "HRV",
    capital: "Zagreb",
    continent: "EU",
    name: "Croatia",
    neighbours: ["HU", "SI", "BA", "ME", "RS"],
    phone: "385",
    tld: ".hr"
  },
  {
    iso: "CU",
    iso3: "CUB",
    capital: "Havana",
    continent: "NA",
    name: "Cuba",
    neighbours: ["US"],
    phone: "53",
    tld: ".cu"
  },
  {
    iso: "CY",
    iso3: "CYP",
    capital: "Nicosia",
    continent: "EU",
    name: "Cyprus",
    neighbours: [],
    phone: "357",
    tld: ".cy"
  },
  {
    iso: "CZ",
    iso3: "CZE",
    capital: "Prague",
    continent: "EU",
    name: "Czechia",
    neighbours: ["PL", "DE", "SK", "AT"],
    phone: "420",
    tld: ".cz"
  },
  {
    iso: "CD",
    iso3: "COD",
    capital: "Kinshasa",
    continent: "AF",
    name: "Democratic Republic of the Congo",
    neighbours: ["TZ", "CF", "SS", "RW", "ZM", "BI", "UG", "CG", "AO"],
    phone: "243",
    tld: ".cd"
  },
  {
    iso: "DK",
    iso3: "DNK",
    capital: "Copenhagen",
    continent: "EU",
    name: "Denmark",
    neighbours: ["DE"],
    phone: "45",
    tld: ".dk"
  },
  {
    iso: "DJ",
    iso3: "DJI",
    capital: "Djibouti",
    continent: "AF",
    name: "Djibouti",
    neighbours: ["ER", "ET", "SO"],
    phone: "253",
    tld: ".dj"
  },
  {
    iso: "DM",
    iso3: "DMA",
    capital: "Roseau",
    continent: "NA",
    name: "Dominica",
    neighbours: [],
    phone: "+1-767",
    tld: ".dm"
  },
  {
    iso: "DO",
    iso3: "DOM",
    capital: "Santo Domingo",
    continent: "NA",
    name: "Dominican Republic",
    neighbours: ["HT"],
    phone: "+1-809 and 1-829",
    tld: ".do"
  },
  {
    iso: "TL",
    iso3: "TLS",
    capital: "Dili",
    continent: "OC",
    name: "East Timor",
    neighbours: ["ID"],
    phone: "670",
    tld: ".tl"
  },
  {
    iso: "EC",
    iso3: "ECU",
    capital: "Quito",
    continent: "SA",
    name: "Ecuador",
    neighbours: ["PE", "CO"],
    phone: "593",
    tld: ".ec"
  },
  {
    iso: "EG",
    iso3: "EGY",
    capital: "Cairo",
    continent: "AF",
    name: "Egypt",
    neighbours: ["LY", "SD", "IL", "PS"],
    phone: "20",
    tld: ".eg"
  },
  {
    iso: "SV",
    iso3: "SLV",
    capital: "San Salvador",
    continent: "NA",
    name: "El Salvador",
    neighbours: ["GT", "HN"],
    phone: "503",
    tld: ".sv"
  },
  {
    iso: "GQ",
    iso3: "GNQ",
    capital: "Malabo",
    continent: "AF",
    name: "Equatorial Guinea",
    neighbours: ["GA", "CM"],
    phone: "240",
    tld: ".gq"
  },
  {
    iso: "ER",
    iso3: "ERI",
    capital: "Asmara",
    continent: "AF",
    name: "Eritrea",
    neighbours: ["ET", "SD", "DJ"],
    phone: "291",
    tld: ".er"
  },
  {
    iso: "EE",
    iso3: "EST",
    capital: "Tallinn",
    continent: "EU",
    name: "Estonia",
    neighbours: ["RU", "LV"],
    phone: "372",
    tld: ".ee"
  },
  {
    iso: "ET",
    iso3: "ETH",
    capital: "Addis Ababa",
    continent: "AF",
    name: "Ethiopia",
    neighbours: ["ER", "KE", "SD", "SS", "SO", "DJ"],
    phone: "251",
    tld: ".et"
  },
  {
    iso: "FJ",
    iso3: "FJI",
    capital: "Suva",
    continent: "OC",
    name: "Fiji",
    neighbours: [],
    phone: "679",
    tld: ".fj"
  },
  {
    iso: "FI",
    iso3: "FIN",
    capital: "Helsinki",
    continent: "EU",
    name: "Finland",
    neighbours: ["NO", "RU", "SE"],
    phone: "358",
    tld: ".fi"
  },
  {
    iso: "FR",
    iso3: "FRA",
    capital: "Paris",
    continent: "EU",
    name: "France",
    neighbours: ["CH", "DE", "BE", "LU", "IT", "AD", "MC", "ES"],
    phone: "33",
    tld: ".fr"
  },
  {
    iso: "GA",
    iso3: "GAB",
    capital: "Libreville",
    continent: "AF",
    name: "Gabon",
    neighbours: ["CM", "GQ", "CG"],
    phone: "241",
    tld: ".ga"
  },
  {
    iso: "GM",
    iso3: "GMB",
    capital: "Banjul",
    continent: "AF",
    name: "Gambia",
    neighbours: ["SN"],
    phone: "220",
    tld: ".gm"
  },
  {
    iso: "GE",
    iso3: "GEO",
    capital: "Tbilisi",
    continent: "AS",
    name: "Georgia",
    neighbours: ["AM", "AZ", "TR", "RU"],
    phone: "995",
    tld: ".ge"
  },
  {
    iso: "DE",
    iso3: "DEU",
    capital: "Berlin",
    continent: "EU",
    name: "Germany",
    neighbours: ["CH", "PL", "NL", "DK", "BE", "CZ", "LU", "FR", "AT"],
    phone: "49",
    tld: ".de"
  },
  {
    iso: "GH",
    iso3: "GHA",
    capital: "Accra",
    continent: "AF",
    name: "Ghana",
    neighbours: ["CI", "TG", "BF"],
    phone: "233",
    tld: ".gh"
  },
  {
    iso: "GR",
    iso3: "GRC",
    capital: "Athens",
    continent: "EU",
    name: "Greece",
    neighbours: ["AL", "MK", "TR", "BG"],
    phone: "30",
    tld: ".gr"
  },
  {
    iso: "GD",
    iso3: "GRD",
    capital: "St. George's",
    continent: "NA",
    name: "Grenada",
    neighbours: [],
    phone: "+1-473",
    tld: ".gd"
  },
  {
    iso: "GT",
    iso3: "GTM",
    capital: "Guatemala City",
    continent: "NA",
    name: "Guatemala",
    neighbours: ["MX", "HN", "BZ", "SV"],
    phone: "502",
    tld: ".gt"
  },
  {
    iso: "GN",
    iso3: "GIN",
    capital: "Conakry",
    continent: "AF",
    name: "Guinea",
    neighbours: ["LR", "SN", "SL", "CI", "GW", "ML"],
    phone: "224",
    tld: ".gn"
  },
  {
    iso: "GW",
    iso3: "GNB",
    capital: "Bissau",
    continent: "AF",
    name: "Guinea-Bissau",
    neighbours: ["SN", "GN"],
    phone: "245",
    tld: ".gw"
  },
  {
    iso: "GY",
    iso3: "GUY",
    capital: "Georgetown",
    continent: "SA",
    name: "Guyana",
    neighbours: ["SR", "BR", "VE"],
    phone: "592",
    tld: ".gy"
  },
  {
    iso: "HT",
    iso3: "HTI",
    capital: "Port-au-Prince",
    continent: "NA",
    name: "Haiti",
    neighbours: ["DO"],
    phone: "509",
    tld: ".ht"
  },
  {
    iso: "HN",
    iso3: "HND",
    capital: "Tegucigalpa",
    continent: "NA",
    name: "Honduras",
    neighbours: ["GT", "NI", "SV"],
    phone: "504",
    tld: ".hn"
  },
  {
    iso: "HU",
    iso3: "HUN",
    capital: "Budapest",
    continent: "EU",
    name: "Hungary",
    neighbours: ["SK", "SI", "RO", "UA", "HR", "AT", "RS"],
    phone: "36",
    tld: ".hu"
  },
  {
    iso: "IS",
    iso3: "ISL",
    capital: "Reykjavik",
    continent: "EU",
    name: "Iceland",
    neighbours: [],
    phone: "354",
    tld: ".is"
  },
  {
    iso: "IN",
    iso3: "IND",
    capital: "New Delhi",
    continent: "AS",
    name: "India",
    neighbours: ["CN", "NP", "MM", "BT", "PK", "BD"],
    phone: "91",
    tld: ".in"
  },
  {
    iso: "ID",
    iso3: "IDN",
    capital: "Jakarta",
    continent: "AS",
    name: "Indonesia",
    neighbours: ["PG", "TL", "MY"],
    phone: "62",
    tld: ".id"
  },
  {
    iso: "IR",
    iso3: "IRN",
    capital: "Tehran",
    continent: "AS",
    name: "Iran",
    neighbours: ["TM", "AF", "IQ", "AM", "PK", "AZ", "TR"],
    phone: "98",
    tld: ".ir"
  },
  {
    iso: "IQ",
    iso3: "IRQ",
    capital: "Baghdad",
    continent: "AS",
    name: "Iraq",
    neighbours: ["SY", "SA", "IR", "JO", "TR", "KW"],
    phone: "964",
    tld: ".iq"
  },
  {
    iso: "IE",
    iso3: "IRL",
    capital: "Dublin",
    continent: "EU",
    name: "Ireland",
    neighbours: ["GB"],
    phone: "353",
    tld: ".ie"
  },
  {
    iso: "IL",
    iso3: "ISR",
    capital: "Jerusalem",
    continent: "AS",
    name: "Israel",
    neighbours: ["SY", "JO", "LB", "EG", "PS"],
    phone: "972",
    tld: ".il"
  },
  {
    iso: "IT",
    iso3: "ITA",
    capital: "Rome",
    continent: "EU",
    name: "Italy",
    neighbours: ["CH", "VA", "SI", "SM", "FR", "AT"],
    phone: "39",
    tld: ".it"
  },
  {
    iso: "CI",
    iso3: "CIV",
    capital: "Yamoussoukro",
    continent: "AF",
    name: "Ivory Coast",
    neighbours: ["LR", "GH", "GN", "BF", "ML"],
    phone: "225",
    tld: ".ci"
  },
  {
    iso: "JM",
    iso3: "JAM",
    capital: "Kingston",
    continent: "NA",
    name: "Jamaica",
    neighbours: [],
    phone: "+1-876",
    tld: ".jm"
  },
  {
    iso: "JP",
    iso3: "JPN",
    capital: "Tokyo",
    continent: "AS",
    name: "Japan",
    neighbours: [],
    phone: "81",
    tld: ".jp"
  },
  {
    iso: "JO",
    iso3: "JOR",
    capital: "Amman",
    continent: "AS",
    name: "Jordan",
    neighbours: ["SY", "SA", "IQ", "IL", "PS"],
    phone: "962",
    tld: ".jo"
  },
  {
    iso: "KZ",
    iso3: "KAZ",
    capital: "Astana",
    continent: "AS",
    name: "Kazakhstan",
    neighbours: ["TM", "CN", "KG", "UZ", "RU"],
    phone: "7",
    tld: ".kz"
  },
  {
    iso: "KE",
    iso3: "KEN",
    capital: "Nairobi",
    continent: "AF",
    name: "Kenya",
    neighbours: ["ET", "TZ", "SS", "SO", "UG"],
    phone: "254",
    tld: ".ke"
  },
  {
    iso: "KI",
    iso3: "KIR",
    capital: "Tarawa",
    continent: "OC",
    name: "Kiribati",
    neighbours: [],
    phone: "686",
    tld: ".ki"
  },
  {
    iso: "KW",
    iso3: "KWT",
    capital: "Kuwait City",
    continent: "AS",
    name: "Kuwait",
    neighbours: ["SA", "IQ"],
    phone: "965",
    tld: ".kw"
  },
  {
    iso: "KG",
    iso3: "KGZ",
    capital: "Bishkek",
    continent: "AS",
    name: "Kyrgyzstan",
    neighbours: ["CN", "TJ", "UZ", "KZ"],
    phone: "996",
    tld: ".kg"
  },
  {
    iso: "LA",
    iso3: "LAO",
    capital: "Vientiane",
    continent: "AS",
    name: "Laos",
    neighbours: ["CN", "MM", "KH", "TH", "VN"],
    phone: "856",
    tld: ".la"
  },
  {
    iso: "LV",
    iso3: "LVA",
    capital: "Riga",
    continent: "EU",
    name: "Latvia",
    neighbours: ["LT", "EE", "BY", "RU"],
    phone: "371",
    tld: ".lv"
  },
  {
    iso: "LB",
    iso3: "LBN",
    capital: "Beirut",
    continent: "AS",
    name: "Lebanon",
    neighbours: ["SY", "IL"],
    phone: "961",
    tld: ".lb"
  },
  {
    iso: "LS",
    iso3: "LSO",
    capital: "Maseru",
    continent: "AF",
    name: "Lesotho",
    neighbours: ["ZA"],
    phone: "266",
    tld: ".ls"
  },
  {
    iso: "LR",
    iso3: "LBR",
    capital: "Monrovia",
    continent: "AF",
    name: "Liberia",
    neighbours: ["SL", "CI", "GN"],
    phone: "231",
    tld: ".lr"
  },
  {
    iso: "LY",
    iso3: "LBY",
    capital: "Tripoli",
    continent: "AF",
    name: "Libya",
    neighbours: ["TD", "NE", "DZ", "SD", "TN", "EG"],
    phone: "218",
    tld: ".ly"
  },
  {
    iso: "LI",
    iso3: "LIE",
    capital: "Vaduz",
    continent: "EU",
    name: "Liechtenstein",
    neighbours: ["CH", "AT"],
    phone: "423",
    tld: ".li"
  },
  {
    iso: "LT",
    iso3: "LTU",
    capital: "Vilnius",
    continent: "EU",
    name: "Lithuania",
    neighbours: ["PL", "BY", "RU", "LV"],
    phone: "370",
    tld: ".lt"
  },
  {
    iso: "LU",
    iso3: "LUX",
    capital: "Luxembourg",
    continent: "EU",
    name: "Luxembourg",
    neighbours: ["DE", "BE", "FR"],
    phone: "352",
    tld: ".lu"
  },
  {
    iso: "MK",
    iso3: "MKD",
    capital: "Skopje",
    continent: "EU",
    name: "Macedonia",
    neighbours: ["AL", "GR", "BG", "RS"],
    phone: "389",
    tld: ".mk"
  },
  {
    iso: "MG",
    iso3: "MDG",
    capital: "Antananarivo",
    continent: "AF",
    name: "Madagascar",
    neighbours: [],
    phone: "261",
    tld: ".mg"
  },
  {
    iso: "MW",
    iso3: "MWI",
    capital: "Lilongwe",
    continent: "AF",
    name: "Malawi",
    neighbours: ["TZ", "MZ", "ZM"],
    phone: "265",
    tld: ".mw"
  },
  {
    iso: "MY",
    iso3: "MYS",
    capital: "Kuala Lumpur",
    continent: "AS",
    name: "Malaysia",
    neighbours: ["BN", "TH", "ID"],
    phone: "60",
    tld: ".my"
  },
  {
    iso: "MV",
    iso3: "MDV",
    capital: "Male",
    continent: "AS",
    name: "Maldives",
    neighbours: [],
    phone: "960",
    tld: ".mv"
  },
  {
    iso: "ML",
    iso3: "MLI",
    capital: "Bamako",
    continent: "AF",
    name: "Mali",
    neighbours: ["SN", "NE", "DZ", "CI", "GN", "MR", "BF"],
    phone: "223",
    tld: ".ml"
  },
  {
    iso: "MT",
    iso3: "MLT",
    capital: "Valletta",
    continent: "EU",
    name: "Malta",
    neighbours: [],
    phone: "356",
    tld: ".mt"
  },
  {
    iso: "MH",
    iso3: "MHL",
    capital: "Majuro",
    continent: "OC",
    name: "Marshall Islands",
    neighbours: [],
    phone: "692",
    tld: ".mh"
  },
  {
    iso: "MR",
    iso3: "MRT",
    capital: "Nouakchott",
    continent: "AF",
    name: "Mauritania",
    neighbours: ["SN", "DZ", "ML"],
    phone: "222",
    tld: ".mr"
  },
  {
    iso: "MU",
    iso3: "MUS",
    capital: "Port Louis",
    continent: "AF",
    name: "Mauritius",
    neighbours: [],
    phone: "230",
    tld: ".mu"
  },
  {
    iso: "MX",
    iso3: "MEX",
    capital: "Mexico City",
    continent: "NA",
    name: "Mexico",
    neighbours: ["GT", "US", "BZ"],
    phone: "52",
    tld: ".mx"
  },
  {
    iso: "FM",
    iso3: "FSM",
    capital: "Palikir",
    continent: "OC",
    name: "Micronesia",
    neighbours: [],
    phone: "691",
    tld: ".fm"
  },
  {
    iso: "MD",
    iso3: "MDA",
    capital: "Chisinau",
    continent: "EU",
    name: "Moldova",
    neighbours: ["RO", "UA"],
    phone: "373",
    tld: ".md"
  },
  {
    iso: "MC",
    iso3: "MCO",
    capital: "Monaco",
    continent: "EU",
    name: "Monaco",
    neighbours: ["FR"],
    phone: "377",
    tld: ".mc"
  },
  {
    iso: "MN",
    iso3: "MNG",
    capital: "Ulan Bator",
    continent: "AS",
    name: "Mongolia",
    neighbours: ["CN", "RU"],
    phone: "976",
    tld: ".mn"
  },
  {
    iso: "ME",
    iso3: "MNE",
    capital: "Podgorica",
    continent: "EU",
    name: "Montenegro",
    neighbours: ["AL", "HR", "BA", "RS"],
    phone: "382",
    tld: ".me"
  },
  {
    iso: "MA",
    iso3: "MAR",
    capital: "Rabat",
    continent: "AF",
    name: "Morocco",
    neighbours: ["DZ", "ES"],
    phone: "212",
    tld: ".ma"
  },
  {
    iso: "MZ",
    iso3: "MOZ",
    capital: "Maputo",
    continent: "AF",
    name: "Mozambique",
    neighbours: ["ZW", "TZ", "SZ", "ZA", "ZM", "MW"],
    phone: "258",
    tld: ".mz"
  },
  {
    iso: "MM",
    iso3: "MMR",
    capital: "Nay Pyi Taw",
    continent: "AS",
    name: "Myanmar",
    neighbours: ["CN", "LA", "TH", "BD", "IN"],
    phone: "95",
    tld: ".mm"
  },
  {
    iso: "NA",
    iso3: "NAM",
    capital: "Windhoek",
    continent: "AF",
    name: "Namibia",
    neighbours: ["ZA", "BW", "ZM", "AO"],
    phone: "264",
    tld: ".na"
  },
  {
    iso: "NR",
    iso3: "NRU",
    capital: "Yaren",
    continent: "OC",
    name: "Nauru",
    neighbours: [],
    phone: "674",
    tld: ".nr"
  },
  {
    iso: "NP",
    iso3: "NPL",
    capital: "Kathmandu",
    continent: "AS",
    name: "Nepal",
    neighbours: ["CN", "IN"],
    phone: "977",
    tld: ".np"
  },
  {
    iso: "NL",
    iso3: "NLD",
    capital: "Amsterdam",
    continent: "EU",
    name: "Netherlands",
    neighbours: ["DE", "BE"],
    phone: "31",
    tld: ".nl"
  },
  {
    iso: "NZ",
    iso3: "NZL",
    capital: "Wellington",
    continent: "OC",
    name: "New Zealand",
    neighbours: [],
    phone: "64",
    tld: ".nz"
  },
  {
    iso: "NI",
    iso3: "NIC",
    capital: "Managua",
    continent: "NA",
    name: "Nicaragua",
    neighbours: ["CR", "HN"],
    phone: "505",
    tld: ".ni"
  },
  {
    iso: "NE",
    iso3: "NER",
    capital: "Niamey",
    continent: "AF",
    name: "Niger",
    neighbours: ["TD", "BJ", "DZ", "LY", "BF", "NG", "ML"],
    phone: "227",
    tld: ".ne"
  },
  {
    iso: "NG",
    iso3: "NGA",
    capital: "Abuja",
    continent: "AF",
    name: "Nigeria",
    neighbours: ["TD", "NE", "BJ", "CM"],
    phone: "234",
    tld: ".ng"
  },
  {
    iso: "NU",
    iso3: "NIU",
    capital: "Alofi",
    continent: "OC",
    name: "Niue",
    neighbours: [],
    phone: "683",
    tld: ".nu"
  },
  {
    iso: "KP",
    iso3: "PRK",
    capital: "Pyongyang",
    continent: "AS",
    name: "North Korea",
    neighbours: ["CN", "KR", "RU"],
    phone: "850",
    tld: ".kp"
  },
  {
    iso: "NO",
    iso3: "NOR",
    capital: "Oslo",
    continent: "EU",
    name: "Norway",
    neighbours: ["FI", "RU", "SE"],
    phone: "47",
    tld: ".no"
  },
  {
    iso: "OM",
    iso3: "OMN",
    capital: "Muscat",
    continent: "AS",
    name: "Oman",
    neighbours: ["SA", "YE", "AE"],
    phone: "968",
    tld: ".om"
  },
  {
    iso: "PK",
    iso3: "PAK",
    capital: "Islamabad",
    continent: "AS",
    name: "Pakistan",
    neighbours: ["CN", "AF", "IR", "IN"],
    phone: "92",
    tld: ".pk"
  },
  {
    iso: "PW",
    iso3: "PLW",
    capital: "Melekeok",
    continent: "OC",
    name: "Palau",
    neighbours: [],
    phone: "680",
    tld: ".pw"
  },
  {
    iso: "PS",
    iso3: "PSE",
    capital: "East Jerusalem",
    continent: "AS",
    name: "Palestinian Territory",
    neighbours: ["JO", "IL", "EG"],
    phone: "970",
    tld: ".ps"
  },
  {
    iso: "PA",
    iso3: "PAN",
    capital: "Panama City",
    continent: "NA",
    name: "Panama",
    neighbours: ["CR", "CO"],
    phone: "507",
    tld: ".pa"
  },
  {
    iso: "PG",
    iso3: "PNG",
    capital: "Port Moresby",
    continent: "OC",
    name: "Papua New Guinea",
    neighbours: ["ID"],
    phone: "675",
    tld: ".pg"
  },
  {
    iso: "PY",
    iso3: "PRY",
    capital: "Asuncion",
    continent: "SA",
    name: "Paraguay",
    neighbours: ["BO", "BR", "AR"],
    phone: "595",
    tld: ".py"
  },
  {
    iso: "PE",
    iso3: "PER",
    capital: "Lima",
    continent: "SA",
    name: "Peru",
    neighbours: ["EC", "CL", "BO", "BR", "CO"],
    phone: "51",
    tld: ".pe"
  },
  {
    iso: "PH",
    iso3: "PHL",
    capital: "Manila",
    continent: "AS",
    name: "Philippines",
    neighbours: [],
    phone: "63",
    tld: ".ph"
  },
  {
    iso: "PL",
    iso3: "POL",
    capital: "Warsaw",
    continent: "EU",
    name: "Poland",
    neighbours: ["DE", "LT", "SK", "CZ", "BY", "UA", "RU"],
    phone: "48",
    tld: ".pl"
  },
  {
    iso: "PT",
    iso3: "PRT",
    capital: "Lisbon",
    continent: "EU",
    name: "Portugal",
    neighbours: ["ES"],
    phone: "351",
    tld: ".pt"
  },
  {
    iso: "QA",
    iso3: "QAT",
    capital: "Doha",
    continent: "AS",
    name: "Qatar",
    neighbours: ["SA"],
    phone: "974",
    tld: ".qa"
  },
  {
    iso: "CG",
    iso3: "COG",
    capital: "Brazzaville",
    continent: "AF",
    name: "Republic of the Congo",
    neighbours: ["CF", "GA", "CD", "CM", "AO"],
    phone: "242",
    tld: ".cg"
  },
  {
    iso: "RO",
    iso3: "ROU",
    capital: "Bucharest",
    continent: "EU",
    name: "Romania",
    neighbours: ["MD", "HU", "UA", "BG", "RS"],
    phone: "40",
    tld: ".ro"
  },
  {
    iso: "RU",
    iso3: "RUS",
    capital: "Moscow",
    continent: "EU",
    name: "Russia",
    neighbours: [
      "GE",
      "CN",
      "BY",
      "UA",
      "KZ",
      "LV",
      "PL",
      "EE",
      "LT",
      "FI",
      "MN",
      "NO",
      "AZ",
      "KP"
    ],
    phone: "7",
    tld: ".ru"
  },
  {
    iso: "RW",
    iso3: "RWA",
    capital: "Kigali",
    continent: "AF",
    name: "Rwanda",
    neighbours: ["TZ", "CD", "BI", "UG"],
    phone: "250",
    tld: ".rw"
  },
  {
    iso: "KN",
    iso3: "KNA",
    capital: "Basseterre",
    continent: "NA",
    name: "Saint Kitts and Nevis",
    neighbours: [],
    phone: "+1-869",
    tld: ".kn"
  },
  {
    iso: "LC",
    iso3: "LCA",
    capital: "Castries",
    continent: "NA",
    name: "Saint Lucia",
    neighbours: [],
    phone: "+1-758",
    tld: ".lc"
  },
  {
    iso: "VC",
    iso3: "VCT",
    capital: "Kingstown",
    continent: "NA",
    name: "Saint Vincent and the Grenadines",
    neighbours: [],
    phone: "+1-784",
    tld: ".vc"
  },
  {
    iso: "WS",
    iso3: "WSM",
    capital: "Apia",
    continent: "OC",
    name: "Samoa",
    neighbours: [],
    phone: "685",
    tld: ".ws"
  },
  {
    iso: "SM",
    iso3: "SMR",
    capital: "San Marino",
    continent: "EU",
    name: "San Marino",
    neighbours: ["IT"],
    phone: "378",
    tld: ".sm"
  },
  {
    iso: "ST",
    iso3: "STP",
    capital: "Sao Tome",
    continent: "AF",
    name: "Sao Tome and Principe",
    neighbours: [],
    phone: "239",
    tld: ".st"
  },
  {
    iso: "SA",
    iso3: "SAU",
    capital: "Riyadh",
    continent: "AS",
    name: "Saudi Arabia",
    neighbours: ["QA", "OM", "IQ", "YE", "JO", "AE", "KW"],
    phone: "966",
    tld: ".sa"
  },
  {
    iso: "SN",
    iso3: "SEN",
    capital: "Dakar",
    continent: "AF",
    name: "Senegal",
    neighbours: ["GN", "MR", "GW", "GM", "ML"],
    phone: "221",
    tld: ".sn"
  },
  {
    iso: "RS",
    iso3: "SRB",
    capital: "Belgrade",
    continent: "EU",
    name: "Serbia",
    neighbours: ["AL", "HU", "MK", "RO", "HR", "BA", "BG", "ME"],
    phone: "381",
    tld: ".rs"
  },
  {
    iso: "SC",
    iso3: "SYC",
    capital: "Victoria",
    continent: "AF",
    name: "Seychelles",
    neighbours: [],
    phone: "248",
    tld: ".sc"
  },
  {
    iso: "SL",
    iso3: "SLE",
    capital: "Freetown",
    continent: "AF",
    name: "Sierra Leone",
    neighbours: ["LR", "GN"],
    phone: "232",
    tld: ".sl"
  },
  {
    iso: "SG",
    iso3: "SGP",
    capital: "Singapore",
    continent: "AS",
    name: "Singapore",
    neighbours: [],
    phone: "65",
    tld: ".sg"
  },
  {
    iso: "SK",
    iso3: "SVK",
    capital: "Bratislava",
    continent: "EU",
    name: "Slovakia",
    neighbours: ["PL", "HU", "CZ", "UA", "AT"],
    phone: "421",
    tld: ".sk"
  },
  {
    iso: "SI",
    iso3: "SVN",
    capital: "Ljubljana",
    continent: "EU",
    name: "Slovenia",
    neighbours: ["HU", "IT", "HR", "AT"],
    phone: "386",
    tld: ".si"
  },
  {
    iso: "SB",
    iso3: "SLB",
    capital: "Honiara",
    continent: "OC",
    name: "Solomon Islands",
    neighbours: [],
    phone: "677",
    tld: ".sb"
  },
  {
    iso: "SO",
    iso3: "SOM",
    capital: "Mogadishu",
    continent: "AF",
    name: "Somalia",
    neighbours: ["ET", "KE", "DJ"],
    phone: "252",
    tld: ".so"
  },
  {
    iso: "ZA",
    iso3: "ZAF",
    capital: "Pretoria",
    continent: "AF",
    name: "South Africa",
    neighbours: ["ZW", "SZ", "MZ", "BW", "NA", "LS"],
    phone: "27",
    tld: ".za"
  },
  {
    iso: "KR",
    iso3: "KOR",
    capital: "Seoul",
    continent: "AS",
    name: "South Korea",
    neighbours: ["KP"],
    phone: "82",
    tld: ".kr"
  },
  {
    iso: "SS",
    iso3: "SSD",
    capital: "Juba",
    continent: "AF",
    name: "South Sudan",
    neighbours: ["CD", "CF", "ET", "KE", "SD", "UG"],
    phone: "211",
    tld: ".ss"
  },
  {
    iso: "ES",
    iso3: "ESP",
    capital: "Madrid",
    continent: "EU",
    name: "Spain",
    neighbours: ["AD", "PT", "FR", "MA"],
    phone: "34",
    tld: ".es"
  },
  {
    iso: "LK",
    iso3: "LKA",
    capital: "Colombo",
    continent: "AS",
    name: "Sri Lanka",
    neighbours: [],
    phone: "94",
    tld: ".lk"
  },
  {
    iso: "SD",
    iso3: "SDN",
    capital: "Khartoum",
    continent: "AF",
    name: "Sudan",
    neighbours: ["SS", "TD", "EG", "ET", "ER", "LY", "CF"],
    phone: "249",
    tld: ".sd"
  },
  {
    iso: "SR",
    iso3: "SUR",
    capital: "Paramaribo",
    continent: "SA",
    name: "Suriname",
    neighbours: ["GY", "BR"],
    phone: "597",
    tld: ".sr"
  },
  {
    iso: "SZ",
    iso3: "SWZ",
    capital: "Mbabane",
    continent: "AF",
    name: "Swaziland",
    neighbours: ["ZA", "MZ"],
    phone: "268",
    tld: ".sz"
  },
  {
    iso: "SE",
    iso3: "SWE",
    capital: "Stockholm",
    continent: "EU",
    name: "Sweden",
    neighbours: ["NO", "FI"],
    phone: "46",
    tld: ".se"
  },
  {
    iso: "CH",
    iso3: "CHE",
    capital: "Bern",
    continent: "EU",
    name: "Switzerland",
    neighbours: ["DE", "IT", "LI", "FR", "AT"],
    phone: "41",
    tld: ".ch"
  },
  {
    iso: "SY",
    iso3: "SYR",
    capital: "Damascus",
    continent: "AS",
    name: "Syria",
    neighbours: ["IQ", "JO", "IL", "TR", "LB"],
    phone: "963",
    tld: ".sy"
  },
  {
    iso: "TJ",
    iso3: "TJK",
    capital: "Dushanbe",
    continent: "AS",
    name: "Tajikistan",
    neighbours: ["CN", "AF", "KG", "UZ"],
    phone: "992",
    tld: ".tj"
  },
  {
    iso: "TZ",
    iso3: "TZA",
    capital: "Dodoma",
    continent: "AF",
    name: "Tanzania",
    neighbours: ["MZ", "KE", "CD", "RW", "ZM", "BI", "UG", "MW"],
    phone: "255",
    tld: ".tz"
  },
  {
    iso: "TH",
    iso3: "THA",
    capital: "Bangkok",
    continent: "AS",
    name: "Thailand",
    neighbours: ["LA", "MM", "KH", "MY"],
    phone: "66",
    tld: ".th"
  },
  {
    iso: "TG",
    iso3: "TGO",
    capital: "Lome",
    continent: "AF",
    name: "Togo",
    neighbours: ["BJ", "GH", "BF"],
    phone: "228",
    tld: ".tg"
  },
  {
    iso: "TO",
    iso3: "TON",
    capital: "Nuku'alofa",
    continent: "OC",
    name: "Tonga",
    neighbours: [],
    phone: "676",
    tld: ".to"
  },
  {
    iso: "TT",
    iso3: "TTO",
    capital: "Port of Spain",
    continent: "NA",
    name: "Trinidad and Tobago",
    neighbours: [],
    phone: "+1-868",
    tld: ".tt"
  },
  {
    iso: "TN",
    iso3: "TUN",
    capital: "Tunis",
    continent: "AF",
    name: "Tunisia",
    neighbours: ["DZ", "LY"],
    phone: "216",
    tld: ".tn"
  },
  {
    iso: "TR",
    iso3: "TUR",
    capital: "Ankara",
    continent: "AS",
    name: "Turkey",
    neighbours: ["SY", "GE", "IQ", "IR", "GR", "AM", "AZ", "BG"],
    phone: "90",
    tld: ".tr"
  },
  {
    iso: "TM",
    iso3: "TKM",
    capital: "Ashgabat",
    continent: "AS",
    name: "Turkmenistan",
    neighbours: ["AF", "IR", "UZ", "KZ"],
    phone: "993",
    tld: ".tm"
  },
  {
    iso: "TV",
    iso3: "TUV",
    capital: "Funafuti",
    continent: "OC",
    name: "Tuvalu",
    neighbours: [],
    phone: "688",
    tld: ".tv"
  },
  {
    iso: "UG",
    iso3: "UGA",
    capital: "Kampala",
    continent: "AF",
    name: "Uganda",
    neighbours: ["TZ", "KE", "SS", "CD", "RW"],
    phone: "256",
    tld: ".ug"
  },
  {
    iso: "UA",
    iso3: "UKR",
    capital: "Kiev",
    continent: "EU",
    name: "Ukraine",
    neighbours: ["PL", "MD", "HU", "SK", "BY", "RO", "RU"],
    phone: "380",
    tld: ".ua"
  },
  {
    iso: "AE",
    iso3: "ARE",
    capital: "Abu Dhabi",
    continent: "AS",
    name: "United Arab Emirates",
    neighbours: ["SA", "OM"],
    phone: "971",
    tld: ".ae"
  },
  {
    iso: "GB",
    iso3: "GBR",
    capital: "London",
    continent: "EU",
    name: "United Kingdom",
    neighbours: ["IE"],
    phone: "44",
    tld: ".uk"
  },
  {
    iso: "US",
    iso3: "USA",
    capital: "Washington",
    continent: "NA",
    name: "United States",
    neighbours: ["CA", "MX", "CU"],
    phone: "1",
    tld: ".us"
  },
  {
    iso: "UY",
    iso3: "URY",
    capital: "Montevideo",
    continent: "SA",
    name: "Uruguay",
    neighbours: ["BR", "AR"],
    phone: "598",
    tld: ".uy"
  },
  {
    iso: "UZ",
    iso3: "UZB",
    capital: "Tashkent",
    continent: "AS",
    name: "Uzbekistan",
    neighbours: ["TM", "AF", "KG", "TJ", "KZ"],
    phone: "998",
    tld: ".uz"
  },
  {
    iso: "VU",
    iso3: "VUT",
    capital: "Port Vila",
    continent: "OC",
    name: "Vanuatu",
    neighbours: [],
    phone: "678",
    tld: ".vu"
  },
  {
    iso: "VA",
    iso3: "VAT",
    capital: "Vatican City",
    continent: "EU",
    name: "Vatican",
    neighbours: ["IT"],
    phone: "379",
    tld: ".va"
  },
  {
    iso: "VE",
    iso3: "VEN",
    capital: "Caracas",
    continent: "SA",
    name: "Venezuela",
    neighbours: ["GY", "BR", "CO"],
    phone: "58",
    tld: ".ve"
  },
  {
    iso: "VN",
    iso3: "VNM",
    capital: "Hanoi",
    continent: "AS",
    name: "Vietnam",
    neighbours: ["CN", "LA", "KH"],
    phone: "84",
    tld: ".vn"
  },
  {
    iso: "YE",
    iso3: "YEM",
    capital: "Sanaa",
    continent: "AS",
    name: "Yemen",
    neighbours: ["SA", "OM"],
    phone: "967",
    tld: ".ye"
  },
  {
    iso: "ZM",
    iso3: "ZMB",
    capital: "Lusaka",
    continent: "AF",
    name: "Zambia",
    neighbours: ["ZW", "TZ", "MZ", "CD", "NA", "MW", "AO"],
    phone: "260",
    tld: ".zm"
  },
  {
    iso: "ZW",
    iso3: "ZWE",
    capital: "Harare",
    continent: "AF",
    name: "Zimbabwe",
    neighbours: ["ZA", "MZ", "BW", "ZM"],
    phone: "263",
    tld: ".zw"
  }
];

export default countries.map(country => {
  country.flag = flags[country.iso3];
  return country;
});
