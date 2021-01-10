var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendButton = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageInput/SendButton.tsx";

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 15px;\n  width: 15px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  margin-left: 8px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var iconEdit = require("../../images/icons/icon_edit.png");

var iconSendNewMessage = require("../../images/icons/icon_new_message.png");

var Container = _styledComponents.styled.TouchableOpacity(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.messageInput.sendButton.css;
});

var SendButtonIcon = _styledComponents.styled.Image(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageInput.sendButtonIcon.css;
});

var SendButton = function SendButton(props) {
  var _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      sendMessage = props.sendMessage;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      editing = _useMessagesContext.editing;

  return _react["default"].createElement(Container, {
    disabled: disabled,
    onPress: sendMessage,
    testID: "send-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, _react["default"].createElement(SendButtonIcon, {
    source: editing ? iconEdit : iconSendNewMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }));
};

exports.SendButton = SendButton;
//# sourceMappingURL=SendButton.js.map