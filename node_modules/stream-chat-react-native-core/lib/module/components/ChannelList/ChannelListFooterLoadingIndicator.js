var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelListFooterLoadingIndicator = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _Spinner = require("../Spinner/Spinner");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/ChannelList/ChannelListFooterLoadingIndicator.tsx";

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.channelListFooterLoadingIndicator.container.css;
});

var ChannelListFooterLoadingIndicator = function ChannelListFooterLoadingIndicator() {
  return _react["default"].createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, _react["default"].createElement(_Spinner.Spinner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }));
};

exports.ChannelListFooterLoadingIndicator = ChannelListFooterLoadingIndicator;
//# sourceMappingURL=ChannelListFooterLoadingIndicator.js.map