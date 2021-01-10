var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageSimple = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _MessageAvatar = require("./MessageAvatar");

var _MessageContent = require("./MessageContent");

var _MessageStatus = require("./MessageStatus");

var _styledComponents = require("../../../styles/styledComponents");

var _ChannelContext = require("../../../contexts/channelContext/ChannelContext");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Message/MessageSimple/MessageSimple.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: flex-end;\n  flex-direction: row;\n  justify-content: ", ";\n  margin-bottom: ", "px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var alignment = _ref.alignment;
  return alignment === 'left' ? 'flex-start' : 'flex-end';
}, function (_ref2) {
  var hasMarginBottom = _ref2.hasMarginBottom,
      isVeryLastMessage = _ref2.isVeryLastMessage;
  return hasMarginBottom ? isVeryLastMessage ? 30 : 20 : 0;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.message.container.css;
});

var MessageSimple = function MessageSimple(props) {
  var _channel$state$messag;

  var _props$forceAlign = props.forceAlign,
      forceAlign = _props$forceAlign === void 0 ? false : _props$forceAlign,
      groupStyles = props.groupStyles,
      isMyMessage = props.isMyMessage,
      message = props.message,
      _props$MessageAvatar = props.MessageAvatar,
      MessageAvatar = _props$MessageAvatar === void 0 ? _MessageAvatar.MessageAvatar : _props$MessageAvatar,
      _props$MessageContent = props.MessageContent,
      MessageContent = _props$MessageContent === void 0 ? _MessageContent.MessageContent : _props$MessageContent,
      _props$MessageStatus = props.MessageStatus,
      MessageStatus = _props$MessageStatus === void 0 ? _MessageStatus.MessageStatus : _props$MessageStatus,
      _props$reactionsEnabl = props.reactionsEnabled,
      reactionsEnabled = _props$reactionsEnabl === void 0 ? true : _props$reactionsEnabl,
      _props$showMessageSta = props.showMessageStatus,
      showMessageStatus = _props$showMessageSta === void 0 ? true : _props$showMessageSta;

  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      channel = _useChannelContext.channel;

  var customMessageContent = !!props.MessageContent;
  var alignment = forceAlign && (forceAlign === 'left' || forceAlign === 'right') ? forceAlign : isMyMessage(message) ? 'right' : 'left';
  var isVeryLastMessage = (channel == null ? void 0 : (_channel$state$messag = channel.state.messages[(channel == null ? void 0 : channel.state.messages.length) - 1]) == null ? void 0 : _channel$state$messag.id) === message.id;
  var hasMarginBottom = groupStyles[0] === 'single' || groupStyles[0] === 'bottom';

  var forwardedProps = _objectSpread(_objectSpread({}, props), {}, {
    alignment: alignment,
    customMessageContent: customMessageContent,
    groupStyles: reactionsEnabled && message.latest_reactions && message.latest_reactions.length > 0 && props.ReactionList ? ['bottom'] : groupStyles
  });

  return _react["default"].createElement(Container, {
    alignment: alignment,
    hasMarginBottom: hasMarginBottom,
    isVeryLastMessage: isVeryLastMessage,
    testID: "message-simple-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 5
    }
  }, alignment === 'right' ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(MessageContent, (0, _extends2["default"])({}, forwardedProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 11
    }
  })), _react["default"].createElement(MessageAvatar, (0, _extends2["default"])({}, forwardedProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 11
    }
  })), showMessageStatus && _react["default"].createElement(MessageStatus, (0, _extends2["default"])({}, forwardedProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 13
    }
  }))) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(MessageAvatar, (0, _extends2["default"])({}, forwardedProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 11
    }
  })), _react["default"].createElement(MessageContent, (0, _extends2["default"])({}, forwardedProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 11
    }
  }))));
};

exports.MessageSimple = MessageSimple;
//# sourceMappingURL=MessageSimple.js.map