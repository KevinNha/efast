var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLatestMessagePreview = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");

var getLatestMessageDisplayText = function getLatestMessageDisplayText(message, t) {
  var _message$attachments;

  if (!message) return t('Nothing yet...');
  if (message.deleted_at) return t('Message deleted');
  if (message.text) return message.text;
  if (message.command) return '/' + message.command;
  if ((_message$attachments = message.attachments) == null ? void 0 : _message$attachments.length) return t('🏙 Attachment...');
  return t('Empty message...');
};

var getLatestMessageDisplayDate = function getLatestMessageDisplayDate(message, tDateTimeParser) {
  var parserOutput = tDateTimeParser(message.created_at.asMutable());

  if ((0, _TranslationContext.isDayOrMoment)(parserOutput)) {
    if (parserOutput.isSame(new Date(), 'day')) {
      return parserOutput.format('LT');
    }

    return parserOutput.format('L');
  }

  return parserOutput;
};

var getLatestMessagePreview = function getLatestMessagePreview(channel, t, tDateTimeParser) {
  var _channel$state;

  var messages = channel == null ? void 0 : (_channel$state = channel.state) == null ? void 0 : _channel$state.messages;

  if (!(messages == null ? void 0 : messages.length)) {
    return {
      created_at: '',
      messageObject: undefined,
      text: ''
    };
  }

  var message = messages[messages.length - 1];
  return {
    created_at: getLatestMessageDisplayDate(message, tDateTimeParser),
    messageObject: message,
    text: getLatestMessageDisplayText(message, t)
  };
};

var useLatestMessagePreview = function useLatestMessagePreview(channel, lastMessage) {
  var _channel$state2;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t,
      tDateTimeParser = _useTranslationContex.tDateTimeParser;

  var messages = (channel == null ? void 0 : (_channel$state2 = channel.state) == null ? void 0 : _channel$state2.messages) || [];
  var message = messages[messages.length - 1];

  var _useState = (0, _react.useState)(getLatestMessagePreview(channel, t, tDateTimeParser)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      latestMessagePreview = _useState2[0],
      setLatestMessagePreview = _useState2[1];

  (0, _react.useEffect)(function () {
    setLatestMessagePreview(getLatestMessagePreview(channel, t, tDateTimeParser));
  }, [lastMessage, message]);
  return latestMessagePreview;
};

exports.useLatestMessagePreview = useLatestMessagePreview;
//# sourceMappingURL=useLatestMessagePreview.js.map