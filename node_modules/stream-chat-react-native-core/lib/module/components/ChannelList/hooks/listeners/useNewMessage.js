var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNewMessage = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = require("react");

var _utils = require("../../utils");

var _ChatContext = require("../../../../contexts/chatContext/ChatContext");

var useNewMessage = function useNewMessage(_ref) {
  var lockChannelOrder = _ref.lockChannelOrder,
      setChannels = _ref.setChannels;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent(event) {
      setChannels(function (channels) {
        if (!lockChannelOrder && event.cid) return (0, _utils.moveChannelUp)({
          channels: channels,
          cid: event.cid
        });
        return (0, _toConsumableArray2["default"])(channels);
      });
    };

    client.on('message.new', handleEvent);
    return function () {
      return client.off('message.new', handleEvent);
    };
  }, []);
};

exports.useNewMessage = useNewMessage;
//# sourceMappingURL=useNewMessage.js.map