var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypingIndicatorContainer = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageList/TypingIndicatorContainer.tsx";

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  bottom: 0px;\n  height: 30px;\n  padding-left: 16px;\n  padding-vertical: 3px;\n  position: absolute;\n  width: 100%;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.messageList.typingIndicatorContainer.css;
});

var TypingIndicatorContainer = function TypingIndicatorContainer(_ref2) {
  var _typingUsers$0$user, _client$user;

  var children = _ref2.children;

  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      typing = _useChannelContext.typing;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var typingUsers = Object.values(typing);

  if (!typingUsers.length || typingUsers.length === 1 && ((_typingUsers$0$user = typingUsers[0].user) == null ? void 0 : _typingUsers$0$user.id) === (client == null ? void 0 : (_client$user = client.user) == null ? void 0 : _client$user.id)) {
    return null;
  }

  return _react["default"].createElement(Container, {
    testID: "typing-indicator-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }
  }, children);
};

exports.TypingIndicatorContainer = TypingIndicatorContainer;
//# sourceMappingURL=TypingIndicatorContainer.js.map