var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTheme = exports.useTheme = exports.StyledComponentsThemeProvider = exports.ThemeContext = exports.ThemeConsumer = exports.styled = exports.css = void 0;

var styledComponents = _interopRequireWildcard(require("styled-components/native"));

var appStyledComponents = styledComponents;
var css = appStyledComponents.css,
    styled = appStyledComponents["default"],
    ThemeProvider = appStyledComponents.ThemeProvider,
    useTheme = appStyledComponents.useTheme,
    withTheme = appStyledComponents.withTheme;
exports.withTheme = withTheme;
exports.useTheme = useTheme;
exports.StyledComponentsThemeProvider = ThemeProvider;
exports.styled = styled;
exports.css = css;
var ThemeConsumer = appStyledComponents.ThemeConsumer;
exports.ThemeConsumer = ThemeConsumer;
var ThemeContext = appStyledComponents.ThemeContext;
exports.ThemeContext = ThemeContext;
//# sourceMappingURL=styledComponents.js.map