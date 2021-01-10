Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConnectionRecovered = void 0;

var _react = require("react");

var _ChatContext = require("../../../../contexts/chatContext/ChatContext");

var useConnectionRecovered = function useConnectionRecovered(_ref) {
  var setForceUpdate = _ref.setForceUpdate;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent() {
      setForceUpdate(function (count) {
        return count + 1;
      });
    };

    client.on('connection.recovered', handleEvent);
    return function () {
      return client.off('connection.recovered', handleEvent);
    };
  }, []);
};

exports.useConnectionRecovered = useConnectionRecovered;
//# sourceMappingURL=useConnectionRecovered.js.map