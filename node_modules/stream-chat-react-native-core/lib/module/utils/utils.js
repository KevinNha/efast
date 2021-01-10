var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeImageCompatibleUrl = exports.MESSAGE_ACTIONS = exports.ACITriggerSettings = exports.isMentionTrigger = exports.queryMembersDebounced = exports.ProgressIndicatorTypes = exports.FileState = exports.emojiData = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var emojiData = [{
  icon: '👍',
  id: 'like'
}, {
  icon: '❤️️',
  id: 'love'
}, {
  icon: '😂',
  id: 'haha'
}, {
  icon: '😮',
  id: 'wow'
}, {
  icon: '😔',
  id: 'sad'
}, {
  icon: '😠',
  id: 'angry'
}];
exports.emojiData = emojiData;
var FileState = Object.freeze({
  FINISHED: 'finished',
  NO_FILE: 'no_file',
  UPLOAD_FAILED: 'upload_failed',
  UPLOADED: 'uploaded',
  UPLOADING: 'uploading'
});
exports.FileState = FileState;
var ProgressIndicatorTypes = Object.freeze({
  IN_PROGRESS: 'in_progress',
  RETRY: 'retry'
});
exports.ProgressIndicatorTypes = ProgressIndicatorTypes;

var isUserResponse = function isUserResponse(user) {
  return user !== undefined;
};

var getCommands = function getCommands(channel) {
  var _channel$getConfig;

  return ((_channel$getConfig = channel.getConfig()) == null ? void 0 : _channel$getConfig.commands) || [];
};

var getMembers = function getMembers(channel) {
  var members = channel.state.members;
  return members && Object.values(members).length ? Object.values(members).filter(function (member) {
    return member.user;
  }).map(function (member) {
    return member.user;
  }) : [];
};

var getWatchers = function getWatchers(channel) {
  var watchers = channel.state.watchers;
  return watchers && Object.values(watchers).length ? (0, _toConsumableArray2["default"])(Object.values(watchers)) : [];
};

var getMembersAndWatchers = function getMembersAndWatchers(channel) {
  var users = [].concat((0, _toConsumableArray2["default"])(getMembers(channel)), (0, _toConsumableArray2["default"])(getWatchers(channel)));
  return Object.values(users.reduce(function (acc, cur) {
    if (!acc[cur.id]) {
      acc[cur.id] = cur;
    }

    return acc;
  }, {}));
};

var queryMembers = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(channel, query, onReady) {
    var response, _users;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof query === 'string')) {
              _context.next = 7;
              break;
            }

            _context.next = 3;
            return channel.queryMembers({
              name: {
                $autocomplete: query
              }
            });

          case 3:
            response = _context.sent;
            _users = [];
            response.members.forEach(function (member) {
              return isUserResponse(member.user) && _users.push(member.user);
            });

            if (onReady && _users) {
              onReady(_users);
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function queryMembers(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var queryMembersDebounced = (0, _debounce["default"])(queryMembers, 200, {
  leading: false,
  trailing: true
});
exports.queryMembersDebounced = queryMembersDebounced;

var isMentionTrigger = function isMentionTrigger(trigger) {
  return trigger === '@';
};

exports.isMentionTrigger = isMentionTrigger;

var ACITriggerSettings = function ACITriggerSettings(_ref2) {
  var channel = _ref2.channel,
      onMentionSelectItem = _ref2.onMentionSelectItem,
      _ref2$t = _ref2.t,
      t = _ref2$t === void 0 ? function (msg) {
    return msg;
  } : _ref2$t,
      _ref2$autocompleteSug = _ref2.autocompleteSuggestionsLimit,
      autocompleteSuggestionsLimit = _ref2$autocompleteSug === void 0 ? 10 : _ref2$autocompleteSug;
  return {
    '/': {
      component: 'CommandsItem',
      dataProvider: function dataProvider(query, text, onReady) {
        if (text.indexOf('/') !== 0) return [];
        var selectedCommands = getCommands(channel).filter(function (command) {
          var _command$name;

          return query && ((_command$name = command.name) == null ? void 0 : _command$name.indexOf(query)) !== -1;
        });
        selectedCommands.sort(function (a, b) {
          var _a$name, _b$name;

          var nameA = ((_a$name = a.name) == null ? void 0 : _a$name.toLowerCase()) || '';
          var nameB = ((_b$name = b.name) == null ? void 0 : _b$name.toLowerCase()) || '';

          if (query && nameA.indexOf(query) === 0) {
            nameA = "0" + nameA;
          }

          if (query && nameB.indexOf(query) === 0) {
            nameB = "0" + nameB;
          }

          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        var result = selectedCommands.slice(0, autocompleteSuggestionsLimit);

        if (onReady) {
          onReady(result, query);
        }

        return result;
      },
      output: function output(entity) {
        return {
          caretPosition: 'next',
          key: "" + entity.name,
          text: "/" + entity.name
        };
      },
      title: t('Commands')
    },
    '@': {
      callback: function callback(item) {
        onMentionSelectItem(item);
      },
      component: 'MentionsItem',
      dataProvider: function dataProvider(query, _, onReady) {
        var members = channel.state.members;

        if (!query || Object.values(members).length < 100) {
          var _users2 = getMembersAndWatchers(channel);

          var matchingUsers = _users2.filter(function (user) {
            var _user$name;

            if (!query) return true;

            if (((_user$name = user.name) == null ? void 0 : _user$name.toLowerCase().indexOf(query.toLowerCase())) !== -1) {
              return true;
            }

            if (user.id.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
              return true;
            }

            return false;
          });

          var _data = matchingUsers.slice(0, autocompleteSuggestionsLimit);

          if (onReady) {
            onReady(_data, query);
          }

          return _data;
        }

        return queryMembersDebounced(channel, query, function (data) {
          if (onReady) {
            onReady(data, query);
          }
        });
      },
      output: function output(entity) {
        return {
          caretPosition: 'next',
          key: entity.id,
          text: "@" + (entity.name || entity.id)
        };
      },
      title: t('Searching for people')
    }
  };
};

exports.ACITriggerSettings = ACITriggerSettings;
var MESSAGE_ACTIONS = {
  "delete": 'delete',
  edit: 'edit',
  reactions: 'reactions',
  reply: 'reply'
};
exports.MESSAGE_ACTIONS = MESSAGE_ACTIONS;

var makeImageCompatibleUrl = function makeImageCompatibleUrl(url) {
  return (url.indexOf('//') === 0 ? "https:" + url : url).trim();
};

exports.makeImageCompatibleUrl = makeImageCompatibleUrl;
//# sourceMappingURL=utils.js.map