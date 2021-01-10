var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelListHeaderNetworkDownIndicator = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/ChannelList/ChannelListHeaderNetworkDownIndicator.tsx";

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: red;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 3px;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: #fae6e8;\n  justify-content: center;\n  padding: 3px;\n  width: 100%;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.channelListHeaderErrorIndicator.container.css;
});

var ErrorText = _styledComponents.styled.Text(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.channelListHeaderErrorIndicator.errorText.css;
});

var ChannelListHeaderNetworkDownIndicator = function ChannelListHeaderNetworkDownIndicator() {
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, _react["default"].createElement(ErrorText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, t('Connection failure, reconnecting now ...')));
};

exports.ChannelListHeaderNetworkDownIndicator = ChannelListHeaderNetworkDownIndicator;
//# sourceMappingURL=ChannelListHeaderNetworkDownIndicator.js.map