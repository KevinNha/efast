var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chat = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _useIsOnline2 = require("./hooks/useIsOnline");

var _useStreami18n = require("./hooks/useStreami18n");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _package = require("../../../package.json");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Chat/Chat.tsx";

var Chat = function Chat(props) {
  var children = props.children,
      client = props.client,
      i18nInstance = props.i18nInstance,
      _props$logger = props.logger,
      logger = _props$logger === void 0 ? function () {
    return null;
  } : _props$logger,
      style = props.style;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      channel = _useState2[0],
      setChannel = _useState2[1];

  var _useState3 = (0, _react.useState)({
    t: function t(key) {
      return key;
    },
    tDateTimeParser: function tDateTimeParser(input) {
      return (0, _dayjs["default"])(input);
    }
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      translators = _useState4[0],
      setTranslators = _useState4[1];

  (0, _useStreami18n.useStreami18n)({
    i18nInstance: i18nInstance,
    setTranslators: setTranslators
  });

  var _useIsOnline = (0, _useIsOnline2.useIsOnline)(client),
      connectionRecovering = _useIsOnline.connectionRecovering,
      isOnline = _useIsOnline.isOnline;

  (0, _react.useEffect)(function () {
    client == null ? void 0 : client.setUserAgent("stream-chat-react-native-" + _reactNative.Platform.OS + "-" + _package.version);
    client.recoverStateOnReconnect = false;
  }, []);

  var setActiveChannel = function setActiveChannel(newChannel) {
    return setChannel(newChannel);
  };

  if (!translators.t) return null;
  var chatContext = {
    channel: channel,
    client: client,
    connectionRecovering: connectionRecovering,
    isOnline: isOnline,
    logger: logger,
    setActiveChannel: setActiveChannel
  };
  return _react["default"].createElement(_ChatContext.ChatProvider, {
    value: chatContext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }
  }, _react["default"].createElement(_TranslationContext.TranslationProvider, {
    value: translators,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, _react["default"].createElement(_ThemeContext.ThemeProvider, {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, children)));
};

exports.Chat = Chat;
//# sourceMappingURL=Chat.js.map