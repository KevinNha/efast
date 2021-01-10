var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconSquare = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _styledComponents = require("../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/IconSquare.tsx";

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  padding: 5px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  padding: 5px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledTouchableOpacity = _styledComponents.styled.TouchableOpacity(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.iconSquare.container.css;
});

var StyledView = _styledComponents.styled.View(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.iconSquare.container.css;
});

var IconSquare = function IconSquare(props) {
  var icon = props.icon,
      onPress = props.onPress;

  if (onPress) {
    return _react["default"].createElement(StyledTouchableOpacity, {
      onPress: onPress,
      testID: "icon-square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, _react["default"].createElement(_reactNative.Image, {
      source: icon,
      style: {
        height: 15,
        width: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }));
  }

  return _react["default"].createElement(StyledView, {
    testID: "icon-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.Image, {
    source: icon,
    style: {
      height: 15,
      width: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
};

exports.IconSquare = IconSquare;
//# sourceMappingURL=IconSquare.js.map