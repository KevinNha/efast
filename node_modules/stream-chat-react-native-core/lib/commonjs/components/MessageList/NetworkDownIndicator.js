var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetworkDownIndicator = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageList/NetworkDownIndicator.tsx";

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  background-color: #fae6e8;\n  color: red;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: #fae6e8;\n  color: red;\n  padding: 5px;\n  z-index: 10;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ErrorNotification = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.messageList.errorNotification.css;
});

var ErrorNotificationText = _styledComponents.styled.Text(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageList.errorNotificationText.css;
});

var NetworkDownIndicator = function NetworkDownIndicator() {
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(ErrorNotification, {
    testID: "error-notification",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, _react["default"].createElement(ErrorNotificationText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, t('Connection failure, reconnecting now ...')));
};

exports.NetworkDownIndicator = NetworkDownIndicator;
//# sourceMappingURL=NetworkDownIndicator.js.map