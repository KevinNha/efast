Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTypingString = void 0;

var _ChannelContext = require("../../../contexts/channelContext/ChannelContext");

var _ChatContext = require("../../../contexts/chatContext/ChatContext");

var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");

var useTypingString = function useTypingString() {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      typing = _useChannelContext.typing;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  var typingKeys = Object.keys(typing);
  var nonSelfUsers = [];
  typingKeys.forEach(function (typingKey) {
    var _client$user, _typing$typingKey, _typing$typingKey$use, _typing$typingKey2, _typing$typingKey2$us, _typing$typingKey3, _typing$typingKey3$us;

    if ((client == null ? void 0 : (_client$user = client.user) == null ? void 0 : _client$user.id) === (typing == null ? void 0 : (_typing$typingKey = typing[typingKey]) == null ? void 0 : (_typing$typingKey$use = _typing$typingKey.user) == null ? void 0 : _typing$typingKey$use.id)) {
      return;
    }

    var user = (typing == null ? void 0 : (_typing$typingKey2 = typing[typingKey]) == null ? void 0 : (_typing$typingKey2$us = _typing$typingKey2.user) == null ? void 0 : _typing$typingKey2$us.name) || (typing == null ? void 0 : (_typing$typingKey3 = typing[typingKey]) == null ? void 0 : (_typing$typingKey3$us = _typing$typingKey3.user) == null ? void 0 : _typing$typingKey3$us.id);

    if (user) {
      nonSelfUsers.push(user);
    }
  });

  if (nonSelfUsers.length === 1) {
    return t('{{ user }} is typing...', {
      user: nonSelfUsers[0]
    });
  }

  if (nonSelfUsers.length === 2) {
    return t('{{ firstUser }} and {{ secondUser }} are typing...', {
      firstUser: nonSelfUsers[0],
      secondUser: nonSelfUsers[1]
    });
  }

  if (nonSelfUsers.length > 2) {
    return t('{{ commaSeparatedUsers }} and {{ lastUser }} are typing...', {
      commaSeparatedUsers: nonSelfUsers.slice(0, -1).join(', '),
      lastUser: nonSelfUsers.slice(-1)
    });
  }

  return '';
};

exports.useTypingString = useTypingString;
//# sourceMappingURL=useTypingString.js.map