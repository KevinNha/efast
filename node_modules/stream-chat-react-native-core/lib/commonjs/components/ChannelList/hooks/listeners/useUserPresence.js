var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserPresence = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = require("react");

var _ChatContext = require("../../../../contexts/chatContext/ChatContext");

var useUserPresence = function useUserPresence(_ref) {
  var setChannels = _ref.setChannels;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent(event) {
      setChannels(function (channels) {
        var newChannels = channels.map(function (channel) {
          var _event$user;

          if (!((_event$user = event.user) == null ? void 0 : _event$user.id) || !channel.state.members[event.user.id]) {
            return channel;
          } else {
            channel.state.members.setIn([event.user.id, 'user'], event.user);
            return channel;
          }
        });
        return (0, _toConsumableArray2["default"])(newChannels);
      });
    };

    client.on('user.presence.changed', handleEvent);
    client.on('user.updated', handleEvent);
    return function () {
      client.off('user.presence.changed', handleEvent);
      client.off('user.updated', handleEvent);
    };
  }, []);
};

exports.useUserPresence = useUserPresence;
//# sourceMappingURL=useUserPresence.js.map