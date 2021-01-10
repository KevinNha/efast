var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReadStates = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _insertDates = require("../utils/insertDates");

var getReadStates = function getReadStates(messages, read) {
  var readData = messages.reduce(function (acc, cur) {
    if (!(0, _insertDates.isDateSeparator)(cur) && cur.id) {
      acc[cur.id] = [];
    }

    return acc;
  }, {});
  var filteredMessagesReversed = messages.filter(function (msg) {
    return !(0, _insertDates.isDateSeparator)(msg) && msg.updated_at;
  }).reverse();

  if (read) {
    var _loop = function _loop(readState) {
      var _filteredMessagesReve;

      if (!readState.last_read) {
        return "continue";
      }

      var userLastReadMsgId = (_filteredMessagesReve = filteredMessagesReversed.find(function (msg) {
        return msg.updated_at < readState.last_read;
      })) == null ? void 0 : _filteredMessagesReve.id;

      if (userLastReadMsgId) {
        readData[userLastReadMsgId] = [].concat((0, _toConsumableArray2["default"])(readData[userLastReadMsgId]), [readState.user]);
      }
    };

    for (var _i = 0, _Object$values = Object.values(read); _i < _Object$values.length; _i++) {
      var readState = _Object$values[_i];

      var _ret = _loop(readState);

      if (_ret === "continue") continue;
    }
  }

  return readData;
};

exports.getReadStates = getReadStates;
//# sourceMappingURL=getReadStates.js.map