var MoneyTools = {
  default_value: function(parameter, default_value) {
    return (typeof parameter !== 'undefined' ? parameter : default_value);
  }
};


Currency = function(iso_code) {
  // var default_symbol = "¤";
  var currencies = {
    "ALL": {
      iso_code: "ALL", name: "Albania Lek", symbol: "Lek",
    },
    "AFN": {
      iso_code: "AFN", name: "Afghanistan Afghani", symbol: "؋"
    },
    "ARS": {
      iso_code: "ARS", name: "Argentina Peso", symbol: "$"
    },
    "AWG": {
      iso_code: "AWG", name: "Aruba Guilder", symbol: "ƒ"
    },
    "AUD": {
      iso_code: "AUD", name: "Australia Dollar", symbol: "$"
    },
    "AZN": {
      iso_code: "AZN", name: "Azerbaijan New Manat", symbol: "ман"
    },
    "BSD": {
      iso_code: "BSD", name: "Bahamas Dollar", symbol: "$"
    },
    "BBD": {
      iso_code: "BBD", name: "Barbados Dollar", symbol: "$"
    },
    "BYR": {
      iso_code: "BYR", name: "Belarus Ruble", symbol: "p."
    },
    "BZD": {
      iso_code: "BZD", name: "Belize Dollar", symbol: "BZ$"
    },
    "BMD": {
      iso_code: "BMD", name: "Bermuda Dollar", symbol: "$"
    },
    "BOB": {
      iso_code: "BOB", name: "Bolivia Boliviano", symbol: "$b"
    },
    "BAM": {
      iso_code: "BAM", name: "Bosnia and Herzegovina Convertible Marka", symbol: "KM"
    },
    "BWP": {
      iso_code: "BWP", name: "Botswana Pula", symbol: "P"
    },
    "BGN": {
      iso_code: "BGN", name: "Bulgaria Lev", symbol: "лв"
    },
    "BRL": {
      iso_code: "BRL", name: "Brazil Real", symbol: "R$"
    },
    "BND": {
      iso_code: "BND", name: "Brunei Darussalam Dollar", symbol: "$"
    },
    "KHR": {
      iso_code: "KHR", name: "Cambodia Riel", symbol: "៛"
    },
    "CAD": {
      iso_code: "CAD", name: "Canada Dollar", symbol: "$"
    },
    "KYD": {
      iso_code: "KYD", name: "Cayman Islands Dollar", symbol: "$"
    },
    "CLP": {
      iso_code: "CLP", name: "Chile Peso", symbol: "$"
    },
    "CNY": {
      iso_code: "CNY", name: "China Yuan Renminbi", symbol: "¥"
    },
    "COP": {
      iso_code: "COP", name: "Colombia Peso", symbol: "$"
    },
    "CRC": {
      iso_code: "CRC", name: "Costa Rica Colon", symbol: "₡"
    },
    "HRK": {
      iso_code: "HRK", name: "Croatia Kuna", symbol: "kn"
    },
    "CUP": {
      iso_code: "CUP", name: "Cuba Peso", symbol: "₱"
    },
    "CZK": {
      iso_code: "CZK", name: "Czech Republic Koruna", symbol: "Kč"
    },
    "DKK": {
      iso_code: "DKK", name: "Denmark Krone", symbol: "kr"
    },
    "DOP": {
      iso_code: "DOP", name: "Dominican Republic Peso", symbol: "RD$"
    },
    "XCD": {
      iso_code: "XCD", name: "East Caribbean Dollar", symbol: "$"
    },
    "EGP": {
      iso_code: "EGP", name: "Egypt Pound", symbol: "£"
    },
    "SVC": {
      iso_code: "SVC", name: "El Salvador Colon", symbol: "$"
    },
    "EEK": {
      iso_code: "EEK", name: "Estonia Kroon", symbol: "kr"
    },
    "EUR": {
      iso_code: "EUR", name: "Euro Member Countries", symbol: "€", right: true
    },
    "FKP": {
      iso_code: "FKP", name: "Falkland Islands (Malvinas) Pound", symbol: "£"
    },
    "FJD": {
      iso_code: "FJD", name: "Fiji Dollar", symbol: "$"
    },
    "GHC": {
      iso_code: "GHC", name: "Ghana Cedi", symbol: "¢"
    },
    "GIP": {
      iso_code: "GIP", name: "Gibraltar Pound", symbol: "£"
    },
    "GTQ": {
      iso_code: "GTQ", name: "Guatemala Quetzal", symbol: "Q"
    },
    "GGP": {
      iso_code: "GGP", name: "Guernsey Pound", symbol: "£"
    },
    "GYD": {
      iso_code: "GYD", name: "Guyana Dollar", symbol: "$"
    },
    "HNL": {
      iso_code: "HNL", name: "Honduras Lempira", symbol: "L"
    },
    "HKD": {
      iso_code: "HKD", name: "Hong Kong Dollar", symbol:"$"
    },
    "HUF": {
      iso_code: "HUF", name: "Hungary Forint", symbol: "Ft"
    },
    "ISK": {
      iso_code: "ISK", name: "Iceland Krona", symbol: "kr"
    },
    "INR": {
      iso_code: "INR", name: "India Rupee", symbol:"Rs"
    },
    "IDR": {
      iso_code: "IDR", name: "Indonesia Rupiah", symbol: "Rp"
    },
    "IRR": {
      iso_code: "IRR", name: "Iran Rial", symbol: "﷼"
    },
    "IMP": {
      iso_code: "IMP", name: "Isle of Man Pound", symbol: "£"
    },
    "ILS": {
      iso_code: "ILS", name: "Israel Shekel", symbol: "₪"
    },
    "JMD": {
      iso_code: "JMD", name: "Jamaica Dollar", symbol: "J$"
    },
    "JPY": {
      iso_code: "JPY", name: "Japan Yen", symbol: "¥"
    },
    "JEP": {
      iso_code: "JEP", name: "Jersey Pound", symbol: "£"
    },
    "KZT": {
      iso_code: "KZT", name: "Kazakhstan Tenge", symbol: "лв"
    },
    "KPW": {
      iso_code: "KPW", name: "Korea (North) Won", symbol: "₩"
    },
    "KRW": {
      iso_code: "KRW", name: "Korea (South) Won", symbol: "₩"
    },
    "KGS": {
      iso_code: "KGS", name: "Kyrgyzstan Som", symbol: "лв"
    },
    "LAK": {
      iso_code: "LAK", name: "Laos Kip", symbol: "₭"
    },
    "LVL": {
      iso_code: "LVL", name: "Latvia Lat", symbol: "Ls"
    },
    "LBP": {
      iso_code: "LBP", name: "Lebanon Pound", symbol: "£"
    },
    "LRD": {
      iso_code: "LRD", name: "Liberia Dollar", symbol: "$"
    },
    "LTL": {
      iso_code: "LTL", name: "Lithuania Litas", symbol: "Lt"
    },
    "MKD": {
      iso_code: "MKD", name: "Macedonia Denar", symbol: "ден"
    },
    "MYR": {
      iso_code: "MYR", name: "Malaysia Ringgit", symbol: "RM"
    },
    "MUR": {
      iso_code: "MUR", name: "Mauritius Rupee", symbol: "₨"
    },
    "MXN": {
      iso_code: "MXN", name: "Mexico Peso", symbol: "$"
    },
    "MNT": {
      iso_code: "MNT", name: "Mongolia Tughrik", symbol: "₮"
    },
    "MZN": {
      iso_code: "MZN", name: "Mozambique Metical", symbol: "MT"
    },
    "NAD": {
      iso_code: "NAD", name: "Namibia Dollar", symbol: "$"
    },
    "NPR": {
      iso_code: "NPR", name: "Nepal Rupee", symbol: "₨"
    },
    "ANG": {
      iso_code: "ANG", name: "Netherlands Antilles Guilder", symbol: "ƒ"
    },
    "NZD": {
      iso_code: "NZD", name: "New Zealand Dollar", symbol: "$"
    },
    "NIO": {
      iso_code: "NIO", name: "Nicaragua Cordoba", symbol: "C$"
    },
    "NGN": {
      iso_code: "NGN", name: "Nigeria Naira", symbol: "₦"
    },
    "KPW": {
      iso_code: "KPW", name: "Korea (North) Won", symbol: "₩"
    },
    "NOK": {
      iso_code: "NOK", name: "Norway Krone", symbol: "kr"
    },
    "OMR": {
      iso_code: "OMR", name: "Oman Rial", symbol: "﷼"
    },
    "PKR": {
      iso_code: "PKR", name: "Pakistan Rupee", symbol: "₨"
    },
    "PAB": {
      iso_code: "PAB", name: "Panama Balboa", symbol: "B/."
    },
    "PYG": {
      iso_code: "PYG", name: "Paraguay Guarani", symbol: "Gs"
    },
    "PEN": {
      iso_code: "PEN", name: "Peru Nuevo Sol", symbol: "S/."
    },
    "PHP": {
      iso_code: "PHP", name: "Philippines Peso", symbol: "₱"
    },
    "PLN": {
      iso_code: "PLN", name: "Poland Zloty", symbol: "zł"
    },
    "QAR": {
      iso_code: "QAR", name: "Qatar Riyal", symbol: "﷼"
    },
    "RON": {
      iso_code: "RON", name: "Romania New Leu", symbol: "lei"
    },
    "RUB": {
      iso_code: "RUB", name: "Russia Ruble", symbol: "₽"
    },
    "SHP": {
      iso_code: "SHP", name: "Saint Helena Pound", symbol: "£"
    },
    "SAR": {
      iso_code: "SAR", name: "Saudi Arabia Riyal", symbol: "﷼"
    },
    "RSD": {
      iso_code: "RSD", name: "Serbia Dinar", symbol: "Дин."
    },
    "SCR": {
      iso_code: "SCR", name: "Seychelles Rupee", symbol: "₨"
    },
    "SGD": {
      iso_code: "SGD", name: "Singapore Dollar", symbol: "$"
    },
    "SBD": {
      iso_code: "SBD", name: "Solomon Islands Dollar", symbol: "$"
    },
    "SOS": {
      iso_code: "SOS", name: "Somalia Shilling", symbol: "S"
    },
    "ZAR": {
      iso_code: "ZAR", name: "South Africa Rand", symbol: "R"
    },
    "KRW": {
      iso_code: "KRW", name: "Korea (South) Won", symbol: "₩"
    },
    "LKR": {
      iso_code: "LKR", name: "Sri Lanka Rupee", symbol: "₨"
    },
    "SEK": {
      iso_code: "SEK", name: "Sweden Krona", symbol: "kr"
    },
    "CHF": {
      iso_code: "CHF", name: "Switzerland Franc", symbol: "CHF"
    },
    "SRD": {
      iso_code: "SRD", name: "Suriname Dollar", symbol: "$"
    },
    "SYP": {
      iso_code: "SYP", name: "Syria Pound", symbol: "£"
    },
    "TWD": {
      iso_code: "TWD", name: "Taiwan New Dollar", symbol: "NT$"
    },
    "THB": {
      iso_code: "THB", name: "Thailand Baht", symbol: "฿"
    },
    "TTD": {
      iso_code: "TTD", name: "Trinidad and Tobago Dollar", symbol: "TT$"
    },
    "TRY": {
      iso_code: "TRY", name: "Turkey Lira", symbol:""
    },
    "TRL": {
      iso_code: "TRL", name: "Turkey Lira", symbol: "₤"
    },
    "TVD": {
      iso_code: "TVD", name: "Tuvalu Dollar", symbol: "$"
    },
    "UAH": {
      iso_code: "UAH", name: "Ukraine Hryvnia", symbol: "₴"
    },
    "GBP": {
      iso_code: "GBP", name: "United Kingdom Pound", symbol: "£"
    },
    "USD": {
      iso_code: "USD", name: "United States Dollar", symbol: "$"
    },
    "UYU": {
      iso_code: "UYU", name: "Uruguay Peso", symbol: "$U"
    },
    "UZS": {
      iso_code: "UZS", name: "Uzbekistan Som", symbol: "лв"
    },
    "VEF": {
      iso_code: "VEF", name: "Venezuela Bolivar", symbol: "Bs"
    },
    "VND": {
      iso_code: "VND", name: "Viet Nam Dong", symbol: "₫"
    },
    "YER": {
      iso_code: "YER", name: "Yemen Rial", symbol: "﷼"
    },
    "ZWD": {
      iso_code: "ZWD", name: "Zimbabwe Dollar", symbol: "Z$"
    }
  };

  iso_code = MoneyTools.default_value(iso_code, "USD");
  var _properties = currencies[iso_code];

  this.iso_code = function() {
    return _properties.iso_code;
  };

  this.name = function() {
    return _properties.name;
  };

  this.symbol = function() {
    return _properties.symbol;
  };

  this.symbol_position = function() {
    // Cape Verde ?
    if (_properties.right === true)
      return 'right';
    else
      return 'left';
  };

};

Money = function(cents, currency_or_iso) {

  // Constructor
  if (typeof currency_or_iso === Currency) {
    var _currency = currency_or_iso;
  }
  else {
    var _currency = new Currency(currency_or_iso);
  }

  var _cents = MoneyTools.default_value(cents, 0);
  var self = this;

  this.cents = function() {
    return _cents;
  };

  this.currency = function() {
    return _currency;
  };

  this.humanize_money = function() {
    var delimiter = ' ';
    var separator = '.';

    var cents_part = _cents % 100;
    var currency_part = (_cents - cents_part)  / 100;
    var output = "";

    if (currency_part < 1) {
      output = "0";
    }
    while (currency_part >= 1) {
      output = (currency_part % 1000).toString() + (output.length > 0 ? delimiter : "") + output;
      currency_part /= 1000;
    }
    if (cents_part != 0) {
      output += separator + (cents_part < 10 ? "0" : "") + cents_part.toString();
    }
    return output;
  }

  this.humanize_money_with_symbol = function() {
    return (_currency.symbol_position() === 'left' ? _currency.symbol() : "") +
      this.humanize_money() +
      (_currency.symbol_position() === 'right' ? _currency.symbol() : "");
  };

  return this;
};