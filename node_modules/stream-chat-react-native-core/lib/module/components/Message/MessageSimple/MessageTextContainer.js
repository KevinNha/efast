var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageTextContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireWildcard(require("react"));

var _capitalize = require("./utils/capitalize");

var _renderText = require("./utils/renderText");

var _styledComponents = require("../../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Message/MessageSimple/MessageTextContainer.tsx";

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-self: ", ";\n  background-color: ", ";\n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n  border-color: ", ";\n  border-top-left-radius: ", "px;\n  border-top-right-radius: ", "px;\n  border-width: ", "px;\n  margin-top: 2px;\n  padding-horizontal: 8px;\n  padding-vertical: 5px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TextContainer = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var alignment = _ref.alignment;
  return alignment === 'left' ? 'flex-start' : 'flex-end';
}, function (_ref2) {
  var alignment = _ref2.alignment,
      status = _ref2.status,
      theme = _ref2.theme,
      type = _ref2.type;
  return alignment === 'left' || type === 'error' || status === 'failed' ? theme.colors.transparent : theme.colors.light;
}, function (_ref3) {
  var groupStyle = _ref3.groupStyle,
      theme = _ref3.theme;
  return groupStyle.indexOf('left') !== -1 ? theme.message.content.textContainer.borderRadiusS : theme.message.content.textContainer.borderRadiusL;
}, function (_ref4) {
  var groupStyle = _ref4.groupStyle,
      theme = _ref4.theme;
  return groupStyle.indexOf('right') !== -1 ? theme.message.content.textContainer.borderRadiusS : theme.message.content.textContainer.borderRadiusL;
}, function (_ref5) {
  var alignment = _ref5.alignment,
      theme = _ref5.theme;
  return alignment === 'left' ? theme.message.content.textContainer.leftBorderColor : theme.message.content.textContainer.rightBorderColor;
}, function (_ref6) {
  var groupStyle = _ref6.groupStyle,
      theme = _ref6.theme;
  return groupStyle === 'leftBottom' || groupStyle === 'leftMiddle' ? theme.message.content.textContainer.borderRadiusS : theme.message.content.textContainer.borderRadiusL;
}, function (_ref7) {
  var groupStyle = _ref7.groupStyle,
      theme = _ref7.theme;
  return groupStyle === 'rightBottom' || groupStyle === 'rightMiddle' ? theme.message.content.textContainer.borderRadiusS : theme.message.content.textContainer.borderRadiusL;
}, function (_ref8) {
  var alignment = _ref8.alignment,
      theme = _ref8.theme;
  return alignment === 'left' ? theme.message.content.textContainer.leftBorderWidth : theme.message.content.textContainer.rightBorderWidth;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.message.content.textContainer.css;
});

var MessageTextContainer = function MessageTextContainer(props) {
  var alignment = props.alignment,
      _props$groupStyles = props.groupStyles,
      groupStyles = _props$groupStyles === void 0 ? ['bottom'] : _props$groupStyles,
      _props$markdownRules = props.markdownRules,
      markdownRules = _props$markdownRules === void 0 ? {} : _props$markdownRules,
      message = props.message,
      MessageText = props.MessageText;
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  if (!message.text) return null;
  var groupStyle = alignment + (0, _capitalize.capitalize)(Array.isArray(message.attachments) && message.attachments.length > 0 ? 'bottom' : groupStyles[0]);
  var markdownStyles = theme ? theme.message.content.markdown : {};
  return _react["default"].createElement(TextContainer, {
    alignment: alignment,
    groupStyle: groupStyle,
    status: message.status,
    testID: "message-text-container",
    type: message.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    }
  }, MessageText ? _react["default"].createElement(MessageText, (0, _extends2["default"])({}, props, {
    renderText: _renderText.renderText,
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  })) : (0, _renderText.renderText)({
    markdownRules: markdownRules,
    markdownStyles: markdownStyles,
    message: message
  }));
};

exports.MessageTextContainer = MessageTextContainer;
//# sourceMappingURL=MessageTextContainer.js.map