var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconBadge = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _styledComponents = require("../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/IconBadge.tsx";

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: #ffffff;\n  font-size: 10px;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  align-self: flex-start;\n  background-color: green;\n  border-radius: 20px;\n  height: 15px;\n  justify-content: center;\n  min-width: 15px;\n  padding-horizontal: 3px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  align-self: center;\n  border-radius: 20px;\n  justify-content: center;\n  padding-top: 5px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Icon = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.iconBadge.icon.css;
});

var IconInner = _styledComponents.styled.View(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.iconBadge.iconInner.css;
});

var UnreadCount = _styledComponents.styled.Text(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.iconBadge.unreadCount.css;
});

var IconBadge = function IconBadge(props) {
  var children = props.children,
      showNumber = props.showNumber,
      unread = props.unread;
  return _react["default"].createElement(_reactNative.View, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, children, unread > 0 && _react["default"].createElement(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, _react["default"].createElement(IconInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, showNumber && _react["default"].createElement(UnreadCount, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 28
    }
  }, unread))));
};

exports.IconBadge = IconBadge;
//# sourceMappingURL=IconBadge.js.map