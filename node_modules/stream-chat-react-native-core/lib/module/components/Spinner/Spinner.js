var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Spinner/Spinner.tsx";

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  border-color: ", ";\n  border-radius: 30px;\n  border-right-color: transparent;\n  border-width: 2px;\n  height: 30px;\n  justify-content: center;\n  margin: 5px;\n  width: 30px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var AnimatedView = _reactNative.Animated.createAnimatedComponent(_reactNative.Animated.View);

var Circle = (0, _styledComponents.styled)(AnimatedView)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spinner.css;
});

var Spinner = function Spinner() {
  var rotateValue = (0, _react.useRef)(new _reactNative.Animated.Value(0));

  var loop = _reactNative.Animated.loop(_reactNative.Animated.timing(rotateValue.current, {
    duration: 800,
    easing: _reactNative.Easing.linear,
    toValue: 1,
    useNativeDriver: true
  }));

  (0, _react.useEffect)(function () {
    loop.start();
    return loop.stop;
  });
  return _react["default"].createElement(Circle, {
    style: {
      transform: [{
        rotate: rotateValue.current.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
        })
      }]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  });
};

exports.Spinner = Spinner;
//# sourceMappingURL=Spinner.js.map