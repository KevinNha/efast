Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupStyles = void 0;

var _insertDates = require("./insertDates");

var getGroupStyles = function getGroupStyles(params) {
  var messagesWithDates = params.messagesWithDates,
      noGroupByUser = params.noGroupByUser;
  var messageGroupStyles = {};

  for (var i = 0; i < messagesWithDates.length; i++) {
    var _message$user, _previousMessage$user, _nextMessage$user;

    var previousMessage = messagesWithDates[i - 1];
    var message = messagesWithDates[i];
    var nextMessage = messagesWithDates[i + 1];
    var groupStyles = [];

    if (message.type === 'channel.event') {
      continue;
    }

    if ((0, _insertDates.isDateSeparator)(message)) {
      continue;
    }

    var userId = (message == null ? void 0 : (_message$user = message.user) == null ? void 0 : _message$user.id) || null;
    var isTopMessage = !previousMessage || (0, _insertDates.isDateSeparator)(previousMessage) || previousMessage.type === 'system' || previousMessage.type === 'channel.event' || previousMessage.attachments && previousMessage.attachments.length !== 0 || userId !== (previousMessage == null ? void 0 : (_previousMessage$user = previousMessage.user) == null ? void 0 : _previousMessage$user.id) || previousMessage.type === 'error' || !!previousMessage.deleted_at;
    var isBottomMessage = !nextMessage || (0, _insertDates.isDateSeparator)(nextMessage) || nextMessage.type === 'system' || nextMessage.type === 'channel.event' || nextMessage.attachments && nextMessage.attachments.length !== 0 || userId !== (nextMessage == null ? void 0 : (_nextMessage$user = nextMessage.user) == null ? void 0 : _nextMessage$user.id) || nextMessage.type === 'error' || !!nextMessage.deleted_at;

    if (isTopMessage) {
      groupStyles.push('top');
    }

    if (isBottomMessage) {
      if (isTopMessage || message.deleted_at || message.type === 'error') {
        groupStyles.splice(0, groupStyles.length);
        groupStyles.push('single');
      } else {
        groupStyles.push('bottom');
      }
    }

    if (!isTopMessage && !isBottomMessage) {
      if (message.deleted_at || message.type === 'error') {
        groupStyles.splice(0, groupStyles.length);
        groupStyles.push('single');
      } else {
        groupStyles.splice(0, groupStyles.length);
        groupStyles.push('middle');
      }
    }

    if (message.attachments && message.attachments.length !== 0) {
      groupStyles.splice(0, groupStyles.length);
      groupStyles.push('single');
    }

    if (noGroupByUser) {
      groupStyles.splice(0, groupStyles.length);
      groupStyles.push('single');
    }

    if (message.id) {
      messageGroupStyles[message.id] = groupStyles;
    }
  }

  return messageGroupStyles;
};

exports.getGroupStyles = getGroupStyles;
//# sourceMappingURL=getGroupStyles.js.map