var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Streami18n = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _calendar = _interopRequireDefault(require("dayjs/plugin/calendar"));

var _localeData = _interopRequireDefault(require("dayjs/plugin/localeData"));

var _localizedFormat = _interopRequireDefault(require("dayjs/plugin/localizedFormat"));

var _relativeTime = _interopRequireDefault(require("dayjs/plugin/relativeTime"));

var _updateLocale = _interopRequireDefault(require("dayjs/plugin/updateLocale"));

var _i18next = _interopRequireDefault(require("i18next"));

var _en2 = _interopRequireDefault(require("../i18n/en.json"));

var _fr2 = _interopRequireDefault(require("../i18n/fr.json"));

var _hi2 = _interopRequireDefault(require("../i18n/hi.json"));

var _it2 = _interopRequireDefault(require("../i18n/it.json"));

var _nl2 = _interopRequireDefault(require("../i18n/nl.json"));

var _ru2 = _interopRequireDefault(require("../i18n/ru.json"));

var _tr2 = _interopRequireDefault(require("../i18n/tr.json"));

require("dayjs/locale/fr");

require("dayjs/locale/hi");

require("dayjs/locale/it");

require("dayjs/locale/nl");

require("dayjs/locale/ru");

require("dayjs/locale/tr");

require("dayjs/locale/en");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultNS = 'translation';
var defaultLng = 'en';

_dayjs["default"].extend(_updateLocale["default"]);

_dayjs["default"].updateLocale('en', {
  format: {
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
    LT: 'hh:mmA',
    LTS: 'HH:mm:ss'
  }
});

_dayjs["default"].updateLocale('nl', {
  calendar: {
    lastDay: '[gisteren om] LT',
    lastWeek: '[afgelopen] dddd [om] LT',
    nextDay: '[morgen om] LT',
    nextWeek: 'dddd [om] LT',
    sameDay: '[vandaag om] LT',
    sameElse: 'L'
  }
});

_dayjs["default"].updateLocale('it', {
  calendar: {
    lastDay: '[Ieri alle] LT',
    lastWeek: '[lo scorso] dddd [alle] LT',
    nextDay: '[Domani alle] LT',
    nextWeek: 'dddd [alle] LT',
    sameDay: '[Oggi alle] LT',
    sameElse: 'L'
  }
});

_dayjs["default"].updateLocale('hi', {
  calendar: {
    lastDay: '[कल] LT',
    lastWeek: '[पिछले] dddd, LT',
    nextDay: '[कल] LT',
    nextWeek: 'dddd, LT',
    sameDay: '[आज] LT',
    sameElse: 'L'
  },
  meridiem: function meridiem(hour) {
    if (hour < 4) return 'रात';
    if (hour < 10) return 'सुबह';
    if (hour < 17) return 'दोपहर';
    if (hour < 20) return 'शाम';
    return 'रात';
  },
  meridiemHour: function meridiemHour(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }

    if (meridiem === 'रात') return hour < 4 ? hour : hour + 12;
    if (meridiem === 'सुबह') return hour;
    if (meridiem === 'दोपहर') return hour >= 10 ? hour : hour + 12;
    if (meridiem === 'शाम') return hour + 12;
    return hour;
  },
  meridiemParse: /रात|सुबह|दोपहर|शाम/
});

_dayjs["default"].updateLocale('fr', {
  calendar: {
    lastDay: '[Hier à] LT',
    lastWeek: 'dddd [dernier à] LT',
    nextDay: '[Demain à] LT',
    nextWeek: 'dddd [à] LT',
    sameDay: '[Aujourd’hui à] LT',
    sameElse: 'L'
  }
});

_dayjs["default"].updateLocale('tr', {
  calendar: {
    lastDay: '[dün] LT',
    lastWeek: '[geçen] dddd [saat] LT',
    nextDay: '[yarın saat] LT',
    nextWeek: '[gelecek] dddd [saat] LT',
    sameDay: '[bugün saat] LT',
    sameElse: 'L'
  }
});

_dayjs["default"].updateLocale('ru', {
  calendar: {
    lastDay: '[Вчера, в] LT',
    nextDay: '[Завтра, в] LT',
    sameDay: '[Сегодня, в] LT'
  }
});

var en_locale = {
  formats: {},
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  relativeTime: {},
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

var isDayJs = function isDayJs(dateTimeParser) {
  return dateTimeParser.extend !== undefined;
};

var defaultStreami18nOptions = {
  DateTimeParser: _dayjs["default"],
  dayjsLocaleConfigForLanguage: null,
  debug: false,
  disableDateTimeTranslations: false,
  language: 'en',
  logger: function logger(msg) {
    return console.warn(msg);
  }
};

var Streami18n = function () {
  function Streami18n() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Streami18n);
    this.i18nInstance = _i18next["default"].createInstance();
    this.Dayjs = null;

    this.setLanguageCallback = function () {
      return null;
    };

    this.initialized = false;

    this.t = function (key) {
      return key;
    };

    this.translations = {
      en: (0, _defineProperty2["default"])({}, defaultNS, _en2["default"]),
      fr: (0, _defineProperty2["default"])({}, defaultNS, _fr2["default"]),
      hi: (0, _defineProperty2["default"])({}, defaultNS, _hi2["default"]),
      it: (0, _defineProperty2["default"])({}, defaultNS, _it2["default"]),
      nl: (0, _defineProperty2["default"])({}, defaultNS, _nl2["default"]),
      ru: (0, _defineProperty2["default"])({}, defaultNS, _ru2["default"]),
      tr: (0, _defineProperty2["default"])({}, defaultNS, _tr2["default"])
    };
    this.dayjsLocales = {};

    this.localeExists = function (language) {
      if (_this.isCustomDateTimeParser) return true;
      return Object.keys(_dayjs["default"].Ls).indexOf(language) > -1;
    };

    this.validateCurrentLanguage = function () {
      var availableLanguages = Object.keys(_this.translations);

      if (availableLanguages.indexOf(_this.currentLanguage) === -1) {
        _this.logger("Streami18n: '" + _this.currentLanguage + "' language is not registered." + (" Please make sure to call streami18n.registerTranslation('" + _this.currentLanguage + "', {...}) or ") + ("use one the built-in supported languages - " + _this.getAvailableLanguages()));

        _this.currentLanguage = defaultLng;
      }
    };

    this.geti18Instance = function () {
      return _this.i18nInstance;
    };

    this.getAvailableLanguages = function () {
      return Object.keys(_this.translations);
    };

    this.getTranslations = function () {
      return _this.translations;
    };

    var finalOptions = _objectSpread(_objectSpread({}, defaultStreami18nOptions), options);

    this.logger = finalOptions.logger;
    this.currentLanguage = finalOptions.language;
    this.DateTimeParser = finalOptions.DateTimeParser;

    try {
      if (this.DateTimeParser && isDayJs(this.DateTimeParser)) {
        this.DateTimeParser.extend(_localizedFormat["default"]);
        this.DateTimeParser.extend(_calendar["default"]);
        this.DateTimeParser.extend(_localeData["default"]);
        this.DateTimeParser.extend(_relativeTime["default"]);
      }
    } catch (error) {
      throw new Error("Streami18n: Looks like you wanted to provide a Dayjs instance but something went wrong while adding plugins" + JSON.stringify(error));
    }

    this.isCustomDateTimeParser = !!options.DateTimeParser;
    var translationsForLanguage = finalOptions.translationsForLanguage;

    if (translationsForLanguage) {
      this.translations[this.currentLanguage] = (0, _defineProperty2["default"])({}, defaultNS, translationsForLanguage);
    }

    if (!this.translations[this.currentLanguage]) {
      this.translations[this.currentLanguage] = (0, _defineProperty2["default"])({}, defaultNS, {});
    }

    this.i18nextConfig = {
      debug: finalOptions.debug,
      fallbackLng: false,
      interpolation: {
        escapeValue: false
      },
      keySeparator: false,
      lng: this.currentLanguage,
      nsSeparator: false,
      parseMissingKeyHandler: function parseMissingKeyHandler(key) {
        _this.logger("Streami18n: Missing translation for key: " + key);

        return key;
      }
    };
    this.validateCurrentLanguage();
    var dayjsLocaleConfigForLanguage = finalOptions.dayjsLocaleConfigForLanguage;

    if (dayjsLocaleConfigForLanguage) {
      this.addOrUpdateLocale(this.currentLanguage, _objectSpread({}, dayjsLocaleConfigForLanguage));
    } else if (!this.localeExists(this.currentLanguage)) {
      this.logger("Streami18n: Streami18n(...) - Locale config for " + this.currentLanguage + " does not exist in momentjs." + ("Please import the locale file using \"import 'moment/locale/" + this.currentLanguage + "';\" in your app or ") + "register the locale config with Streami18n using registerTranslation(language, translation, customDayjsLocale)");
    }

    this.tDateTimeParser = function (timestamp) {
      if (finalOptions.disableDateTimeTranslations || !_this.localeExists(_this.currentLanguage)) {
        if (isDayJs(_this.DateTimeParser)) {
          return _this.DateTimeParser(timestamp).locale(defaultLng);
        }

        return _this.DateTimeParser(timestamp).locale(defaultLng);
      }

      if (isDayJs(_this.DateTimeParser)) {
        return _this.DateTimeParser(timestamp).locale(_this.currentLanguage);
      }

      return _this.DateTimeParser(timestamp).locale(_this.currentLanguage);
    };
  }

  (0, _createClass2["default"])(Streami18n, [{
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.validateCurrentLanguage();
                _context.prev = 1;
                _context.next = 4;
                return this.i18nInstance.init(_objectSpread(_objectSpread({}, this.i18nextConfig), {}, {
                  lng: this.currentLanguage,
                  resources: this.translations
                }));

              case 4:
                this.t = _context.sent;
                this.initialized = true;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                this.logger("Something went wrong with init:" + JSON.stringify(_context.t0));

              case 11:
                return _context.abrupt("return", {
                  t: this.t,
                  tDateTimeParser: this.tDateTimeParser
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "getTranslators",
    value: function () {
      var _getTranslators = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.initialized) {
                  _context2.next = 7;
                  break;
                }

                if (this.dayjsLocales[this.currentLanguage]) {
                  this.addOrUpdateLocale(this.currentLanguage, this.dayjsLocales[this.currentLanguage]);
                }

                _context2.next = 4;
                return this.init();

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                return _context2.abrupt("return", {
                  t: this.t,
                  tDateTimeParser: this.tDateTimeParser
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getTranslators() {
        return _getTranslators.apply(this, arguments);
      }

      return getTranslators;
    }()
  }, {
    key: "registerTranslation",
    value: function registerTranslation(language, translation, customDayjsLocale) {
      if (!translation) {
        this.logger("Streami18n: registerTranslation(language, translation, customDayjsLocale) called without translation");
        return;
      }

      if (!this.translations[language]) {
        this.translations[language] = (0, _defineProperty2["default"])({}, defaultNS, translation);
      } else {
        this.translations[language][defaultNS] = translation;
      }

      if (customDayjsLocale) {
        this.dayjsLocales[language] = _objectSpread({}, customDayjsLocale);
      } else if (!this.localeExists(language)) {
        this.logger("Streami18n: registerTranslation(language, translation, customDayjsLocale) - " + ("Locale config for " + language + " does not exist in Dayjs.") + ("Please import the locale file using \"import 'dayjs/locale/" + language + "';\" in your app or ") + "register the locale config with Streami18n using registerTranslation(language, translation, customDayjsLocale)");
      }

      if (this.initialized) {
        this.i18nInstance.addResources(language, defaultNS, translation);
      }
    }
  }, {
    key: "addOrUpdateLocale",
    value: function addOrUpdateLocale(key, config) {
      if (this.localeExists(key)) {
        _dayjs["default"].updateLocale(key, _objectSpread({}, config));
      } else {
        _dayjs["default"].locale(_objectSpread(_objectSpread({
          name: key
        }, en_locale), config), undefined, true);
      }
    }
  }, {
    key: "setLanguage",
    value: function () {
      var _setLanguage = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(language) {
        var _t;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.currentLanguage = language;

                if (this.initialized) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

              case 3:
                _context3.prev = 3;
                _context3.next = 6;
                return this.i18nInstance.changeLanguage(language);

              case 6:
                _t = _context3.sent;

                if (this.dayjsLocales[language]) {
                  this.addOrUpdateLocale(this.currentLanguage, this.dayjsLocales[this.currentLanguage]);
                }

                this.setLanguageCallback(_t);
                return _context3.abrupt("return", _t);

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](3);
                this.logger("Failed to set language:" + JSON.stringify(_context3.t0));
                return _context3.abrupt("return", this.t);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 12]]);
      }));

      function setLanguage(_x) {
        return _setLanguage.apply(this, arguments);
      }

      return setLanguage;
    }()
  }, {
    key: "registerSetLanguageCallback",
    value: function registerSetLanguageCallback(callback) {
      this.setLanguageCallback = callback;
    }
  }]);
  return Streami18n;
}();

exports.Streami18n = Streami18n;
//# sourceMappingURL=Streami18n.js.map