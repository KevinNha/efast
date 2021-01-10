var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _MessageSimple = require("./MessageSimple/MessageSimple");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _KeyboardContext = require("../../contexts/keyboardContext/KeyboardContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Message/Message.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DefaultMessageWithContext = function DefaultMessageWithContext(props) {
  var channel = props.channel,
      client = props.client,
      disabled = props.disabled,
      dismissKeyboard = props.dismissKeyboard,
      dismissKeyboardOnMessageTouch = props.dismissKeyboardOnMessageTouch,
      emojiData = props.emojiData,
      message = props.message,
      _props$Message = props.Message,
      MessageSimple = _props$Message === void 0 ? _MessageSimple.MessageSimple : _props$Message,
      removeMessage = props.removeMessage,
      retrySendMessage = props.retrySendMessage,
      setEditingState = props.setEditingState,
      updateMessage = props.updateMessage,
      rest = (0, _objectWithoutProperties2["default"])(props, ["channel", "client", "disabled", "dismissKeyboard", "dismissKeyboardOnMessageTouch", "emojiData", "message", "Message", "removeMessage", "retrySendMessage", "setEditingState", "updateMessage"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      actionSheetVisible = _useState2[0],
      setActionSheetVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      reactionPickerVisible = _useState4[0],
      setReactionPickerVisible = _useState4[1];

  var actionsEnabled = message.type === 'regular' && message.status === 'received';

  var isMyMessage = function isMyMessage() {
    var _client$user, _message$user;

    return client && message && ((_client$user = client.user) == null ? void 0 : _client$user.id) === ((_message$user = message.user) == null ? void 0 : _message$user.id);
  };

  var isAdmin = function isAdmin() {
    var _client$user2;

    return (client == null ? void 0 : (_client$user2 = client.user) == null ? void 0 : _client$user2.role) === 'admin' || (channel == null ? void 0 : channel.state.membership.role) === 'admin';
  };

  var isOwner = function isOwner() {
    return (channel == null ? void 0 : channel.state.membership.role) === 'owner';
  };

  var isModerator = function isModerator() {
    return (channel == null ? void 0 : channel.state.membership.role) === 'channel_moderator' || (channel == null ? void 0 : channel.state.membership.role) === 'moderator';
  };

  var canEditMessage = function canEditMessage() {
    return isMyMessage() || isModerator() || isOwner() || isAdmin();
  };

  var canDeleteMessage = function canDeleteMessage() {
    return canEditMessage();
  };

  var handleEdit = function handleEdit() {
    return setEditingState(message);
  };

  var handleDelete = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!message.id) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return client.deleteMessage(message.id);

            case 3:
              data = _context.sent;
              updateMessage(data.message);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDelete() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleFlag = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!message.id) {
                _context2.next = 3;
                break;
              }

              _context2.next = 3;
              return client.flagMessage(message.id);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleFlag() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleMute = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      var _message$user2;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!((_message$user2 = message.user) == null ? void 0 : _message$user2.id)) {
                _context3.next = 3;
                break;
              }

              _context3.next = 3;
              return client.muteUser(message.user.id);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleMute() {
      return _ref3.apply(this, arguments);
    };
  }();

  var showActionSheet = function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dismissKeyboard();

            case 2:
              setActionSheetVisible(true);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function showActionSheet() {
      return _ref4.apply(this, arguments);
    };
  }();

  var openReactionPicker = function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!disabled) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return");

            case 2:
              _context5.next = 4;
              return dismissKeyboard();

            case 4:
              setReactionPickerVisible(true);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function openReactionPicker() {
      return _ref5.apply(this, arguments);
    };
  }();

  var dismissReactionPicker = function dismissReactionPicker() {
    return setReactionPickerVisible(false);
  };

  var handleReaction = function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6(reactionType) {
      var userExistingReaction, _iterator, _step, _reaction$user, _reaction$user2, reaction, tmpReaction;

      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setReactionPickerVisible(false);

              if (Array.isArray(message.own_reactions)) {
                for (_iterator = _createForOfIteratorHelperLoose(message.own_reactions); !(_step = _iterator()).done;) {
                  reaction = _step.value;

                  if (client.userID === ((_reaction$user = reaction.user) == null ? void 0 : _reaction$user.id) && reaction.type === reactionType) {
                    userExistingReaction = reaction;
                  } else if (client.userID !== ((_reaction$user2 = reaction.user) == null ? void 0 : _reaction$user2.id)) {
                    console.warn("message.own_reactions contained reactions from a different user, this indicates a bug");
                  }
                }
              }

              _context6.prev = 2;

              if (!channel) {
                _context6.next = 16;
                break;
              }

              if (!userExistingReaction) {
                _context6.next = 11;
                break;
              }

              channel.state.removeReaction(userExistingReaction);

              if (!message.id) {
                _context6.next = 9;
                break;
              }

              _context6.next = 9;
              return channel.deleteReaction(message.id, userExistingReaction.type);

            case 9:
              _context6.next = 16;
              break;

            case 11:
              tmpReaction = {
                created_at: new Date(),
                message_id: message.id,
                type: reactionType,
                updated_at: new Date(),
                user: client.user
              };
              channel.state.addReaction(tmpReaction);

              if (!message.id) {
                _context6.next = 16;
                break;
              }

              _context6.next = 16;
              return channel.sendReaction(message.id, {
                type: reactionType
              });

            case 16:
              _context6.next = 22;
              break;

            case 18:
              _context6.prev = 18;
              _context6.t0 = _context6["catch"](2);
              setReactionPickerVisible(true);
              updateMessage(message);

            case 22:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[2, 18]]);
    }));

    return function handleReaction(_x) {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleAction = function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7(name, value) {
      var data;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!message.id) {
                _context7.next = 5;
                break;
              }

              _context7.next = 3;
              return channel == null ? void 0 : channel.sendAction(message.id, (0, _defineProperty2["default"])({}, name, value));

            case 3:
              data = _context7.sent;

              if (data == null ? void 0 : data.message) {
                updateMessage(data.message);
              } else {
                removeMessage({
                  id: message.id,
                  parent_id: message.parent_id
                });
              }

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function handleAction(_x2, _x3) {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleRetry = function () {
    var _ref8 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8() {
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return retrySendMessage(_objectSpread(_objectSpread({}, message), {}, {
                updated_at: undefined
              }));

            case 2:
              return _context8.abrupt("return", _context8.sent);

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function handleRetry() {
      return _ref8.apply(this, arguments);
    };
  }();

  var getTotalReactionCount = function getTotalReactionCount(supportedReactions) {
    var count = 0;

    if (!supportedReactions) {
      supportedReactions = emojiData;
    }

    var reactionCounts = message.reaction_counts;

    if (reactionCounts && Object.keys(reactionCounts).length > 0) {
      Object.keys(reactionCounts).forEach(function (key) {
        if (supportedReactions.find(function (supportedReaction) {
          return supportedReaction.id === key;
        })) {
          count += reactionCounts[key];
        }
      });
    }

    return count;
  };

  var actionProps = {};

  if (typeof (channel == null ? void 0 : channel.getConfig) === 'function') {
    var _channel$getConfig;

    var reactions = (_channel$getConfig = channel.getConfig()) == null ? void 0 : _channel$getConfig.reactions;
    actionProps.reactionsEnabled = reactions;
    actionProps.repliesEnabled = reactions;
  }

  var onPress = function onPress() {
    if (dismissKeyboardOnMessageTouch) {
      _reactNative.Keyboard.dismiss();
    }
  };

  return _react["default"].createElement(_reactNative.TouchableOpacity, {
    activeOpacity: 1,
    onPress: onPress,
    testID: "message-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 5
    }
  }, _react["default"].createElement(MessageSimple, (0, _extends2["default"])({}, rest, actionProps, {
    actionsEnabled: actionsEnabled,
    actionSheetVisible: actionSheetVisible,
    canDeleteMessage: canDeleteMessage,
    canEditMessage: canEditMessage,
    dismissReactionPicker: dismissReactionPicker,
    getTotalReactionCount: getTotalReactionCount,
    handleAction: handleAction,
    handleDelete: handleDelete,
    handleEdit: handleEdit,
    handleFlag: handleFlag,
    handleMute: handleMute,
    handleReaction: handleReaction,
    handleRetry: handleRetry,
    isAdmin: isAdmin,
    isModerator: isModerator,
    isMyMessage: isMyMessage,
    message: message,
    Message: MessageSimple,
    onPress: onPress,
    openReactionPicker: openReactionPicker,
    reactionPickerVisible: reactionPickerVisible,
    setActionSheetVisible: setActionSheetVisible,
    showActionSheet: showActionSheet,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 7
    }
  })));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var _prevMessage$latest_r, _nextMessage$latest_r;

  var prevLastReceivedId = prevProps.lastReceivedId,
      prevMessage = prevProps.message,
      prevReadBy = prevProps.readBy;
  var nextLastReceivedId = nextProps.lastReceivedId,
      nextMessage = nextProps.message,
      nextReadBy = nextProps.readBy;
  var messageEqual = prevMessage.updated_at === nextMessage.updated_at;
  var lastReceivedIdEqual = prevLastReceivedId === nextLastReceivedId || prevLastReceivedId !== nextMessage.id && nextLastReceivedId !== nextMessage.id && prevLastReceivedId !== prevMessage.id && nextLastReceivedId !== prevMessage.id;
  var reactionsEqual = ((_prevMessage$latest_r = prevMessage.latest_reactions) == null ? void 0 : _prevMessage$latest_r.length) === ((_nextMessage$latest_r = nextMessage.latest_reactions) == null ? void 0 : _nextMessage$latest_r.length);
  var repliesEqual = prevMessage.reply_count === nextMessage.reply_count;
  var readByEqual = prevReadBy === nextReadBy;
  return messageEqual && reactionsEqual && repliesEqual && lastReceivedIdEqual && readByEqual;
};

var MemoizedDefaultMessage = _react["default"].memo(DefaultMessageWithContext, areEqual);

var Message = function Message(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      channel = _useChannelContext.channel,
      disabled = _useChannelContext.disabled;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useKeyboardContext = (0, _KeyboardContext.useKeyboardContext)(),
      dismissKeyboard = _useKeyboardContext.dismissKeyboard;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      emojiData = _useMessagesContext.emojiData,
      removeMessage = _useMessagesContext.removeMessage,
      retrySendMessage = _useMessagesContext.retrySendMessage,
      setEditingState = _useMessagesContext.setEditingState,
      updateMessage = _useMessagesContext.updateMessage;

  return _react["default"].createElement(MemoizedDefaultMessage, (0, _extends2["default"])({}, props, {
    channel: channel,
    client: client,
    disabled: disabled,
    dismissKeyboard: dismissKeyboard,
    emojiData: emojiData,
    removeMessage: removeMessage,
    retrySendMessage: retrySendMessage,
    setEditingState: setEditingState,
    updateMessage: updateMessage
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 5
    }
  }));
};

exports.Message = Message;
//# sourceMappingURL=Message.js.map