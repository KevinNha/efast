var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Avatar/Avatar.tsx";

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: ", ";\n  font-size: ", "px;\n  font-weight: bold;\n  text-transform: uppercase;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  border-radius: ", "px;\n  height: ", "px;\n  width: ", "px;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", "px;\n  height: ", "px;\n  justify-content: center;\n  width: ", "px;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var BASE_AVATAR_FALLBACK_TEXT_SIZE = 14;
var BASE_AVATAR_SIZE = 32;

var AvatarContainer = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.avatar.container.css;
});

var AvatarFallback = _styledComponents.styled.View(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (_ref3) {
  var size = _ref3.size;
  return size / 2;
}, function (_ref4) {
  var size = _ref4.size;
  return size;
}, function (_ref5) {
  var size = _ref5.size;
  return size;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.avatar.fallback.css;
});

var AvatarImage = _styledComponents.styled.Image(_templateObject3(), function (_ref7) {
  var size = _ref7.size;
  return size / 2;
}, function (_ref8) {
  var size = _ref8.size;
  return size;
}, function (_ref9) {
  var size = _ref9.size;
  return size;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.avatar.image.css;
});

var AvatarText = _styledComponents.styled.Text(_templateObject4(), function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.textLight;
}, function (_ref12) {
  var fontSize = _ref12.fontSize;
  return fontSize;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.avatar.text.css;
});

var getInitials = function getInitials(fullName) {
  return fullName ? fullName.split(' ').slice(0, 2).map(function (name) {
    return name.charAt(0);
  }) : null;
};

var Avatar = function Avatar(props) {
  var image = props.image,
      name = props.name,
      _props$size = props.size,
      size = _props$size === void 0 ? BASE_AVATAR_SIZE : _props$size,
      testID = props.testID;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      imageError = _useState2[0],
      setImageError = _useState2[1];

  return _react["default"].createElement(AvatarContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, image && !imageError ? _react["default"].createElement(AvatarImage, {
    accessibilityLabel: "initials",
    onError: function onError() {
      return setImageError(true);
    },
    resizeMethod: "resize",
    size: size,
    source: {
      uri: image
    },
    testID: testID || 'avatar-image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }) : _react["default"].createElement(AvatarFallback, {
    size: size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, _react["default"].createElement(AvatarText, {
    fontSize: BASE_AVATAR_FALLBACK_TEXT_SIZE * (size / BASE_AVATAR_SIZE),
    testID: testID || 'avatar-text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, getInitials(name))));
};

exports.Avatar = Avatar;
//# sourceMappingURL=Avatar.js.map