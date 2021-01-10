var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseButton = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/CloseButton/CloseButton.tsx";

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: white;\n  border-color: rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  border-style: solid;\n  border-width: 1px;\n  height: 30px;\n  justify-content: center;\n  width: 30px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.closeButton.container.css;
});

var CloseButton = function CloseButton() {
  return _react["default"].createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, _react["default"].createElement(_reactNative.Image, {
    source: require("../../images/icons/close-round.png"),
    testID: "close-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }));
};

exports.CloseButton = CloseButton;
//# sourceMappingURL=CloseButton.js.map