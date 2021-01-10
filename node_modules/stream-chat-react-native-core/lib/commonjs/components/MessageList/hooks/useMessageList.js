var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMessageList = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _getGroupStyles = require("../utils/getGroupStyles");

var _getReadStates = require("../utils/getReadStates");

var _insertDates = require("../utils/insertDates");

var _ChannelContext = require("../../../contexts/channelContext/ChannelContext");

var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");

var _ThreadContext = require("../../../contexts/threadContext/ThreadContext");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var useMessageList = function useMessageList(params) {
  var inverted = params.inverted,
      noGroupByUser = params.noGroupByUser,
      threadList = params.threadList;

  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      read = _useChannelContext.read;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      messages = _useMessagesContext.messages;

  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
      threadMessages = _useThreadContext.threadMessages;

  var messageList = threadList ? threadMessages : messages;
  var readList = threadList ? undefined : read;
  var messagesWithDates = (0, _insertDates.insertDates)(messageList);
  var messageGroupStyles = (0, _getGroupStyles.getGroupStyles)({
    messagesWithDates: messagesWithDates,
    noGroupByUser: noGroupByUser
  });
  var readData = (0, _getReadStates.getReadStates)(messagesWithDates, readList);
  var messagesWithDatesList = messagesWithDates.map(function (msg) {
    return _objectSpread(_objectSpread({}, msg), {}, {
      groupStyles: !(0, _insertDates.isDateSeparator)(msg) && msg.id ? messageGroupStyles[msg.id] || [] : [],
      readBy: !(0, _insertDates.isDateSeparator)(msg) && msg.id ? readData[msg.id] || [] : []
    });
  });
  return inverted ? messagesWithDatesList.reverse() : messagesWithDatesList;
};

exports.useMessageList = useMessageList;
//# sourceMappingURL=useMessageList.js.map