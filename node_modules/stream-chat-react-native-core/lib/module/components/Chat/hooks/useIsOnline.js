var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsOnline = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _native = require("../../../native");

var useIsOnline = function useIsOnline(client) {
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      unsubscribeNetInfo = _useState2[0],
      setUnsubscribeNetInfo = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isOnline = _useState4[0],
      setIsOnline = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      connectionRecovering = _useState6[0],
      setConnectionRecovering = _useState6[1];

  (0, _react.useEffect)(function () {
    var handleChangedEvent = function handleChangedEvent(event) {
      setConnectionRecovering(!event.online);
      setIsOnline(event.online || false);
    };

    var handleRecoveredEvent = function handleRecoveredEvent() {
      return setConnectionRecovering(false);
    };

    var notifyChatClient = function notifyChatClient(netInfoState) {
      if (client == null ? void 0 : client.wsConnection) {
        if (netInfoState) {
          client.wsConnection.onlineStatusChanged({
            type: 'online'
          });
        } else {
          client.wsConnection.onlineStatusChanged({
            type: 'offline'
          });
        }
      }
    };

    var setConnectionListener = function setConnectionListener() {
      _native.NetInfo.fetch().then(function (netInfoState) {
        notifyChatClient(netInfoState);
      });

      setUnsubscribeNetInfo(_native.NetInfo.addEventListener(function (netInfoState) {
        notifyChatClient(netInfoState);
      }));
    };

    if (client) {
      client.on('connection.changed', handleChangedEvent);
      client.on('connection.recovered', handleRecoveredEvent);
      setConnectionListener();
    }

    return function () {
      client.off('connection.changed', handleChangedEvent);
      client.off('connection.recovered', handleRecoveredEvent);

      if (unsubscribeNetInfo) {
        unsubscribeNetInfo();
      }
    };
  }, [client]);
  return {
    connectionRecovering: connectionRecovering,
    isOnline: isOnline
  };
};

exports.useIsOnline = useIsOnline;
//# sourceMappingURL=useIsOnline.js.map