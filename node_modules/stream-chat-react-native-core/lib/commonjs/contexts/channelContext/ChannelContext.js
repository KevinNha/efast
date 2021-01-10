var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withChannelContext = exports.useChannelContext = exports.ChannelProvider = exports.ChannelContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/contexts/channelContext/ChannelContext.tsx";

var ChannelContext = _react["default"].createContext({});

exports.ChannelContext = ChannelContext;

var ChannelProvider = function ChannelProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(ChannelContext.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 3
    }
  }, children);
};

exports.ChannelProvider = ChannelProvider;

var useChannelContext = function useChannelContext() {
  return (0, _react.useContext)(ChannelContext);
};

exports.useChannelContext = useChannelContext;

var withChannelContext = function withChannelContext(Component) {
  var WithChannelContextComponent = function WithChannelContextComponent(props) {
    var channelContext = useChannelContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, channelContext, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 12
      }
    }));
  };

  WithChannelContextComponent.displayName = "WithChannelContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithChannelContextComponent;
};

exports.withChannelContext = withChannelContext;
//# sourceMappingURL=ChannelContext.js.map