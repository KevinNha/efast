var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyStateIndicator = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Indicators/EmptyStateIndicator.tsx";

var EmptyStateIndicator = function EmptyStateIndicator(_ref) {
  var listType = _ref.listType;

  switch (listType) {
    case 'channel':
      return _react["default"].createElement(_reactNative.Text, {
        testID: "empty-channel-state",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }
      }, "You have no channels currently");

    case 'message':
      return null;

    default:
      return _react["default"].createElement(_reactNative.Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 14
        }
      }, "No items exist");
  }
};

exports.EmptyStateIndicator = EmptyStateIndicator;
//# sourceMappingURL=EmptyStateIndicator.js.map