var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageAvatar = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _Avatar = require("../../Avatar/Avatar");

var _styledComponents = require("../../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Message/MessageSimple/MessageAvatar.tsx";

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 28px;\n  width: 32px;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  margin-left: ", "px;\n  margin-right: ", "px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var alignment = _ref.alignment;
  return alignment === 'right' ? 8 : 0;
}, function (_ref2) {
  var alignment = _ref2.alignment;
  return alignment === 'left' ? 8 : 0;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.message.avatarWrapper.container.css;
});

var Spacer = _styledComponents.styled.View(_templateObject2(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.message.avatarWrapper.spacer.css;
});

var MessageAvatar = function MessageAvatar(props) {
  var _message$user, _message$user2, _message$user3;

  var alignment = props.alignment,
      groupStyles = props.groupStyles,
      message = props.message,
      showAvatar = props.showAvatar;
  var visible = typeof showAvatar === 'boolean' ? showAvatar : groupStyles[0] === 'single' || groupStyles[0] === 'bottom';
  return _react["default"].createElement(Container, {
    alignment: alignment,
    testID: "message-avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, visible ? _react["default"].createElement(_Avatar.Avatar, {
    image: (_message$user = message.user) == null ? void 0 : _message$user.image,
    name: ((_message$user2 = message.user) == null ? void 0 : _message$user2.name) || ((_message$user3 = message.user) == null ? void 0 : _message$user3.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }) : _react["default"].createElement(Spacer, {
    testID: "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }));
};

exports.MessageAvatar = MessageAvatar;
//# sourceMappingURL=MessageAvatar.js.map