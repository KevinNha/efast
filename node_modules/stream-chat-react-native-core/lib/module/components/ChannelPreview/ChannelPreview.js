var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreview = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ChannelPreviewMessenger = require("./ChannelPreviewMessenger");

var _useLatestMessagePreview = require("./hooks/useLatestMessagePreview");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/ChannelPreview/ChannelPreview.tsx";

var UnMemoizedChannelPreview = function UnMemoizedChannelPreview(props) {
  var channel = props.channel,
      forceUpdate = props.forceUpdate,
      _props$Preview = props.Preview,
      Preview = _props$Preview === void 0 ? _ChannelPreviewMessenger.ChannelPreviewMessenger : _props$Preview;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      lastMessage = _useState2[0],
      setLastMessage = _useState2[1];

  var _useState3 = (0, _react.useState)(channel.countUnread()),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      unread = _useState4[0],
      setUnread = _useState4[1];

  var latestMessagePreview = (0, _useLatestMessagePreview.useLatestMessagePreview)(channel, lastMessage);
  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent(event) {
      if (event.message) {
        setLastMessage(event.message);
      }

      if (event.type === 'message.new') {
        setUnread(channel.countUnread());
      }
    };

    channel.on('message.new', handleEvent);
    channel.on('message.updated', handleEvent);
    channel.on('message.deleted', handleEvent);
    return function () {
      channel.off('message.new', handleEvent);
      channel.off('message.updated', handleEvent);
      channel.off('message.deleted', handleEvent);
    };
  }, []);
  (0, _react.useEffect)(function () {
    setUnread(channel.countUnread());
  }, [forceUpdate]);
  (0, _react.useEffect)(function () {
    var handleReadEvent = function handleReadEvent(event) {
      var _event$user;

      if (((_event$user = event.user) == null ? void 0 : _event$user.id) === client.userID) {
        setUnread(0);
      }
    };

    channel.on('message.read', handleReadEvent);
    return function () {
      return channel.off('message.read', handleReadEvent);
    };
  }, []);
  return _react["default"].createElement(Preview, (0, _extends2["default"])({}, props, {
    lastMessage: lastMessage,
    latestMessagePreview: latestMessagePreview,
    unread: unread,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var previousLast = prevProps.channel.state.last_message_at;
  var nextLast = nextProps.channel.state.last_message_at;
  return previousLast === nextLast && prevProps.forceUpdate === nextProps.forceUpdate;
};

var ChannelPreview = _react["default"].memo(UnMemoizedChannelPreview, areEqual);

exports.ChannelPreview = ChannelPreview;
//# sourceMappingURL=ChannelPreview.js.map