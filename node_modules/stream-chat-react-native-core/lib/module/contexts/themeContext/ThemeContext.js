var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _replaceCssShorthand = require("./utils/replaceCssShorthand");

var _styledComponents = require("../../styles/styledComponents");

var _themeConstants = require("../../styles/themeConstants");

var _formatDotNotation = require("./utils/formatDotNotation");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/contexts/themeContext/ThemeContext.tsx";

var ThemeProvider = function ThemeProvider(props) {
  var children = props.children,
      style = props.style;
  var theme = (0, _styledComponents.useTheme)();
  var modifiedTheme = theme || _themeConstants.defaultTheme;

  if (style) {
    var formattedStyle = (0, _replaceCssShorthand.replaceCssShorthand)(style);
    var formattedTheme = (0, _formatDotNotation.formatDotNotation)({
      formattedStyle: formattedStyle,
      modifiedTheme: modifiedTheme
    });
    (0, _merge["default"])(modifiedTheme, formattedTheme);
  }

  return _react["default"].createElement(_styledComponents.StyledComponentsThemeProvider, {
    theme: modifiedTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, children);
};

exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeContext.js.map