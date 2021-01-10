var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withKeyboardContext = exports.useKeyboardContext = exports.KeyboardProvider = exports.KeyboardContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _getDisplayName = require("../utils/getDisplayName");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/contexts/keyboardContext/KeyboardContext.tsx";

var KeyboardContext = _react["default"].createContext({
  dismissKeyboard: _reactNative.Keyboard.dismiss
});

exports.KeyboardContext = KeyboardContext;

var KeyboardProvider = function KeyboardProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(KeyboardContext.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }, children);
};

exports.KeyboardProvider = KeyboardProvider;

var useKeyboardContext = function useKeyboardContext() {
  return (0, _react.useContext)(KeyboardContext);
};

exports.useKeyboardContext = useKeyboardContext;

var withKeyboardContext = function withKeyboardContext(Component) {
  var WithKeyboardContextComponent = function WithKeyboardContextComponent(props) {
    var keyboardContext = useKeyboardContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, keyboardContext, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    }));
  };

  WithKeyboardContextComponent.displayName = "WithKeyboardContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithKeyboardContextComponent;
};

exports.withKeyboardContext = withKeyboardContext;
//# sourceMappingURL=KeyboardContext.js.map