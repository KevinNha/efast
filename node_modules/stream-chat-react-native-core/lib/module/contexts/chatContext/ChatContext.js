var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withChatContext = exports.useChatContext = exports.ChatProvider = exports.ChatContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/contexts/chatContext/ChatContext.tsx";

var ChatContext = _react["default"].createContext({});

exports.ChatContext = ChatContext;

var ChatProvider = function ChatProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(ChatContext.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 3
    }
  }, children);
};

exports.ChatProvider = ChatProvider;

var useChatContext = function useChatContext() {
  return (0, _react.useContext)(ChatContext);
};

exports.useChatContext = useChatContext;

var withChatContext = function withChatContext(Component) {
  var WithChatContextComponent = function WithChatContextComponent(props) {
    var chatContext = useChatContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, chatContext, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 12
      }
    }));
  };

  WithChatContextComponent.displayName = "WithChatContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithChatContextComponent;
};

exports.withChatContext = withChatContext;
//# sourceMappingURL=ChatContext.js.map