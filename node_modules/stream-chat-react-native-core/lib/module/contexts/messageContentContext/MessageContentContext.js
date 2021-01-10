var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMessageContentContext = exports.useMessageContentContext = exports.MessageContentProvider = exports.MessageContentContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/contexts/messageContentContext/MessageContentContext.tsx";

var MessageContentContext = _react["default"].createContext({});

exports.MessageContentContext = MessageContentContext;

var MessageContentProvider = function MessageContentProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(MessageContentContext.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }, children);
};

exports.MessageContentProvider = MessageContentProvider;

var useMessageContentContext = function useMessageContentContext() {
  return (0, _react.useContext)(MessageContentContext);
};

exports.useMessageContentContext = useMessageContentContext;

var withMessageContentContext = function withMessageContentContext(Component) {
  var WithMessageContentContextComponent = function WithMessageContentContextComponent(props) {
    var messageContentContext = useMessageContentContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, messageContentContext, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 12
      }
    }));
  };

  WithMessageContentContextComponent.displayName = "WithMessageContentContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithMessageContentContextComponent;
};

exports.withMessageContentContext = withMessageContentContext;
//# sourceMappingURL=MessageContentContext.js.map