var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMessagesContext = exports.useMessagesContext = exports.MessagesProvider = exports.MessagesContext = exports.isEditingBoolean = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/contexts/messagesContext/MessagesContext.tsx";

var isEditingBoolean = function isEditingBoolean(editing) {
  return typeof editing === 'boolean';
};

exports.isEditingBoolean = isEditingBoolean;

var MessagesContext = _react["default"].createContext({});

exports.MessagesContext = MessagesContext;

var MessagesProvider = function MessagesProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(MessagesContext.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 3
    }
  }, children);
};

exports.MessagesProvider = MessagesProvider;

var useMessagesContext = function useMessagesContext() {
  return (0, _react.useContext)(MessagesContext);
};

exports.useMessagesContext = useMessagesContext;

var withMessagesContext = function withMessagesContext(Component) {
  var WithMessagesContextComponent = function WithMessagesContextComponent(props) {
    var messagesContext = useMessagesContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, messagesContext, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 12
      }
    }));
  };

  WithMessagesContextComponent.displayName = "WithMessagesContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithMessagesContextComponent;
};

exports.withMessagesContext = withMessagesContext;
//# sourceMappingURL=MessagesContext.js.map