var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypingIndicator = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _useTypingString = require("./hooks/useTypingString");

var _Avatar = require("../Avatar/Avatar");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageList/TypingIndicator.tsx";

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: ", ";\n  font-size: ", "px;\n  margin-left: 10px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: flex-end;\n  flex-direction: row;\n  justify-content: flex-start;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.typingIndicator.container.css;
});

var TypingText = _styledComponents.styled.Text(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.typingIndicator.text.color;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typingIndicator.text.fontSize;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typingIndicator.text.css;
});

var TypingIndicator = function TypingIndicator(_ref5) {
  var _ref5$Avatar = _ref5.Avatar,
      Avatar = _ref5$Avatar === void 0 ? _Avatar.Avatar : _ref5$Avatar;

  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      typing = _useChannelContext.typing;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var typingString = (0, _useTypingString.useTypingString)();
  var typingUsers = Object.values(typing);
  return _react["default"].createElement(Container, {
    testID: "typing-indicator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, typingUsers.filter(function (_ref6) {
    var _client$user;

    var user = _ref6.user;
    return !!user && user.id !== (client == null ? void 0 : (_client$user = client.user) == null ? void 0 : _client$user.id);
  }).map(function (_ref7, idx) {
    var user = _ref7.user;
    return _react["default"].createElement(Avatar, {
      image: user.image,
      key: "" + user.id + idx,
      name: user.name || user.id,
      size: 20,
      testID: "typing-avatar-" + idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    });
  }), _react["default"].createElement(TypingText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, typingString));
};

exports.TypingIndicator = TypingIndicator;
//# sourceMappingURL=TypingIndicator.js.map