var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChannelPreviewDisplayName = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _ChatContext = require("../../../contexts/chatContext/ChatContext");

var getChannelPreviewDisplayName = function getChannelPreviewDisplayName(channel, client) {
  var _client$user, _channel$data, _channel$state;

  var currentUserId = client == null ? void 0 : (_client$user = client.user) == null ? void 0 : _client$user.id;
  var channelName = channel == null ? void 0 : (_channel$data = channel.data) == null ? void 0 : _channel$data.name;
  if (channelName) return channelName;
  var members = Object.values(((_channel$state = channel.state) == null ? void 0 : _channel$state.members) || {});
  var otherMembers = members.filter(function (member) {
    var _member$user;

    return ((_member$user = member.user) == null ? void 0 : _member$user.id) !== currentUserId;
  });
  var name = otherMembers.map(function (member) {
    var _member$user2, _member$user3;

    return ((_member$user2 = member.user) == null ? void 0 : _member$user2.name) || ((_member$user3 = member.user) == null ? void 0 : _member$user3.id) || 'Unnamed User';
  }).join(', ');
  return name;
};

var useChannelPreviewDisplayName = function useChannelPreviewDisplayName(channel) {
  var _client$user2, _channel$state2, _channel$data2;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var id = client == null ? void 0 : (_client$user2 = client.user) == null ? void 0 : _client$user2.id;
  var members = (_channel$state2 = channel.state) == null ? void 0 : _channel$state2.members;
  var name = channel == null ? void 0 : (_channel$data2 = channel.data) == null ? void 0 : _channel$data2.name;

  var _useState = (0, _react.useState)(getChannelPreviewDisplayName(channel, client)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      displayName = _useState2[0],
      setDisplayName = _useState2[1];

  (0, _react.useEffect)(function () {
    setDisplayName(getChannelPreviewDisplayName(channel, client));
  }, [id, members, name]);
  return displayName;
};

exports.useChannelPreviewDisplayName = useChannelPreviewDisplayName;
//# sourceMappingURL=useChannelPreviewDisplayName.js.map