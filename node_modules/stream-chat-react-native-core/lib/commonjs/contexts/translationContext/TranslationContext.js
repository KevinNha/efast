var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTranslationContext = exports.useTranslationContext = exports.TranslationProvider = exports.TranslationContext = exports.isDayOrMoment = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _getDisplayName = require("../utils/getDisplayName");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/contexts/translationContext/TranslationContext.tsx";

var isDayOrMoment = function isDayOrMoment(output) {
  return output.isSame != null;
};

exports.isDayOrMoment = isDayOrMoment;

var TranslationContext = _react["default"].createContext({
  t: function t(key) {
    return key;
  },
  tDateTimeParser: function tDateTimeParser(input) {
    return (0, _dayjs["default"])(input);
  }
});

exports.TranslationContext = TranslationContext;

var TranslationProvider = function TranslationProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(TranslationContext.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, children);
};

exports.TranslationProvider = TranslationProvider;

var useTranslationContext = function useTranslationContext() {
  return (0, _react.useContext)(TranslationContext);
};

exports.useTranslationContext = useTranslationContext;

var withTranslationContext = function withTranslationContext(Component) {
  var WithTranslationContextComponent = function WithTranslationContextComponent(props) {
    var translationContext = useTranslationContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, translationContext, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 12
      }
    }));
  };

  WithTranslationContextComponent.displayName = "WithTranslationContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithTranslationContextComponent;
};

exports.withTranslationContext = withTranslationContext;
//# sourceMappingURL=TranslationContext.js.map