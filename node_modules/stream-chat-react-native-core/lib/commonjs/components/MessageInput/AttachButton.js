var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachButton = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageInput/AttachButton.tsx";

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  margin-right: 8px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 15px;\n  width: 15px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var iconAddAttachment = require("../../images/icons/plus-outline.png");

var AttachButtonIcon = _styledComponents.styled.Image(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.messageInput.attachButtonIcon.css;
});

var Container = _styledComponents.styled.TouchableOpacity(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageInput.attachButton.css;
});

var AttachButton = function AttachButton(props) {
  var _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      handleOnPress = props.handleOnPress;
  return _react["default"].createElement(Container, {
    disabled: disabled,
    onPress: handleOnPress,
    testID: "attach-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, _react["default"].createElement(AttachButtonIcon, {
    source: iconAddAttachment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
};

exports.AttachButton = AttachButton;
//# sourceMappingURL=AttachButton.js.map