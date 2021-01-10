var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStreami18n = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _Streami18n = require("../../../utils/Streami18n");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var useStreami18n = function useStreami18n(_ref) {
  var i18nInstance = _ref.i18nInstance,
      setTranslators = _ref.setTranslators;
  (0, _react.useEffect)(function () {
    var streami18n;

    if (i18nInstance instanceof _Streami18n.Streami18n) {
      streami18n = i18nInstance;
    } else {
      streami18n = new _Streami18n.Streami18n({
        language: 'en'
      });
    }

    streami18n.registerSetLanguageCallback(function (t) {
      return setTranslators(function (prevTranslator) {
        return _objectSpread(_objectSpread({}, prevTranslator), {}, {
          t: t
        });
      });
    });
    streami18n.getTranslators().then(function (translator) {
      if (translator) setTranslators(translator);
    });
  }, [i18nInstance]);
};

exports.useStreami18n = useStreami18n;
//# sourceMappingURL=useStreami18n.js.map