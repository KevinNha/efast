var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withThreadContext = exports.useThreadContext = exports.ThreadProvider = exports.ThreadContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/contexts/threadContext/ThreadContext.tsx";

var ThreadContext = _react["default"].createContext({});

exports.ThreadContext = ThreadContext;

var ThreadProvider = function ThreadProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(ThreadContext.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 3
    }
  }, children);
};

exports.ThreadProvider = ThreadProvider;

var useThreadContext = function useThreadContext() {
  return (0, _react.useContext)(ThreadContext);
};

exports.useThreadContext = useThreadContext;

var withThreadContext = function withThreadContext(Component) {
  var WithThreadContextComponent = function WithThreadContextComponent(props) {
    var threadContext = useThreadContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, threadContext, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 12
      }
    }));
  };

  WithThreadContextComponent.displayName = "WithThreadContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithThreadContextComponent;
};

exports.withThreadContext = withThreadContext;
//# sourceMappingURL=ThreadContext.js.map