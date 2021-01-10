var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Channel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _seamlessImmutable = _interopRequireDefault(require("seamless-immutable"));

var _streamChat = require("stream-chat");

var _EmptyStateIndicator = require("../Indicators/EmptyStateIndicator");

var _LoadingErrorIndicator = require("../Indicators/LoadingErrorIndicator");

var _LoadingIndicator = require("../Indicators/LoadingIndicator");

var _KeyboardCompatibleView = require("../KeyboardCompatibleView/KeyboardCompatibleView");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _SuggestionsContext = require("../../contexts/suggestionsContext/SuggestionsContext");

var _ThreadContext = require("../../contexts/threadContext/ThreadContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _utils = require("../../utils/utils");

var _generateRandomId = require("../../utils/generateRandomId");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Channel/Channel.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Channel = function Channel(props) {
  var _channel$state, _channel$state$thread, _channel$data;

  var additionalKeyboardAvoidingViewProps = props.additionalKeyboardAvoidingViewProps,
      Attachment = props.Attachment,
      channel = props.channel,
      children = props.children,
      _props$disableIfFroze = props.disableIfFrozenChannel,
      disableIfFrozenChannel = _props$disableIfFroze === void 0 ? true : _props$disableIfFroze,
      _props$disableKeyboar = props.disableKeyboardCompatibleView,
      disableKeyboardCompatibleView = _props$disableKeyboar === void 0 ? false : _props$disableKeyboar,
      doMarkReadRequest = props.doMarkReadRequest,
      doSendMessageRequest = props.doSendMessageRequest,
      doUpdateMessageRequest = props.doUpdateMessageRequest,
      _props$emojiData = props.emojiData,
      emojiData = _props$emojiData === void 0 ? _utils.emojiData : _props$emojiData,
      _props$EmptyStateIndi = props.EmptyStateIndicator,
      EmptyStateIndicator = _props$EmptyStateIndi === void 0 ? _EmptyStateIndicator.EmptyStateIndicator : _props$EmptyStateIndi,
      keyboardBehavior = props.keyboardBehavior,
      _props$KeyboardCompat = props.KeyboardCompatibleView,
      KeyboardCompatibleView = _props$KeyboardCompat === void 0 ? _KeyboardCompatibleView.KeyboardCompatibleView : _props$KeyboardCompat,
      keyboardVerticalOffset = props.keyboardVerticalOffset,
      _props$LoadingErrorIn = props.LoadingErrorIndicator,
      LoadingErrorIndicator = _props$LoadingErrorIn === void 0 ? _LoadingErrorIndicator.LoadingErrorIndicator : _props$LoadingErrorIn,
      _props$LoadingIndicat = props.LoadingIndicator,
      LoadingIndicator = _props$LoadingIndicat === void 0 ? _LoadingIndicator.LoadingIndicator : _props$LoadingIndicat,
      Message = props.Message,
      threadProps = props.thread;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      eventHistory = _useState6[0],
      setEventHistory = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      hasMore = _useState8[0],
      setHasMore = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      lastRead = _useState10[0],
      setLastRead = _useState10[1];

  var _useState11 = (0, _react.useState)(true),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      loadingMore = _useState14[0],
      setLoadingMore = _useState14[1];

  var _useState15 = (0, _react.useState)({}),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      members = _useState16[0],
      setMembers = _useState16[1];

  var _useState17 = (0, _react.useState)((0, _seamlessImmutable["default"])([])),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      messages = _useState18[0],
      setMessages = _useState18[1];

  var _useState19 = (0, _react.useState)({}),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      read = _useState20[0],
      setRead = _useState20[1];

  var _useState21 = (0, _react.useState)(threadProps || null),
      _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
      thread = _useState22[0],
      setThread = _useState22[1];

  var _useState23 = (0, _react.useState)(true),
      _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
      threadHasMore = _useState24[0],
      setThreadHasMore = _useState24[1];

  var _useState25 = (0, _react.useState)(false),
      _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
      threadLoadingMore = _useState26[0],
      setThreadLoadingMore = _useState26[1];

  var _useState27 = (0, _react.useState)((threadProps == null ? void 0 : threadProps.id) && (channel == null ? void 0 : (_channel$state = channel.state) == null ? void 0 : (_channel$state$thread = _channel$state.threads) == null ? void 0 : _channel$state$thread[threadProps.id]) || (0, _seamlessImmutable["default"])([])),
      _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
      threadMessages = _useState28[0],
      setThreadMessages = _useState28[1];

  var _useState29 = (0, _react.useState)({}),
      _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
      typing = _useState30[0],
      setTyping = _useState30[1];

  var _useState31 = (0, _react.useState)(),
      _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
      watcherCount = _useState32[0],
      setWatcherCount = _useState32[1];

  var _useState33 = (0, _react.useState)({}),
      _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
      watchers = _useState34[0],
      setWatchers = _useState34[1];

  (0, _react.useEffect)(function () {
    if (channel) initChannel();
    return function () {
      client.off('connection.recovered', handleEvent);
      channel == null ? void 0 : channel.off == null ? void 0 : channel.off(handleEvent);
      handleEventStateThrottled.cancel();
      loadMoreFinishedDebounced.cancel();
      loadMoreThreadFinishedDebounced.cancel();
    };
  }, [channel]);
  (0, _react.useEffect)(function () {
    if (threadProps) {
      setThread(threadProps);

      if (channel && (threadProps == null ? void 0 : threadProps.id)) {
        var _channel$state$thread2;

        setThreadMessages(((_channel$state$thread2 = channel.state.threads) == null ? void 0 : _channel$state$thread2[threadProps.id]) || []);
      }
    }
  }, [threadProps]);

  var markRead = function markRead() {
    var _channel$getConfig;

    if ((channel == null ? void 0 : channel.disconnected) || !(channel == null ? void 0 : channel.getConfig == null ? void 0 : (_channel$getConfig = channel.getConfig()) == null ? void 0 : _channel$getConfig.read_events)) {
      return;
    }

    if (doMarkReadRequest) {
      doMarkReadRequest(channel);
    } else {
      (0, _streamChat.logChatPromiseExecution)(channel.markRead(), 'mark read');
    }
  };

  var markReadThrottled = (0, _throttle["default"])(markRead, 500, {
    leading: true,
    trailing: true
  });

  var copyChannelState = function copyChannelState() {
    setLoading(false);

    if (channel) {
      setMembers(channel.state.members);
      setMessages(channel.state.messages);
      setRead(channel.state.read);
      setTyping(channel.state.typing);
      setWatcherCount(channel.state.watcher_count);
      setWatchers(channel.state.watchers);

      if (channel.countUnread() > 0) {
        markReadThrottled();
      }
    }
  };

  var addToEventHistory = function addToEventHistory(event) {
    var lastMessageId = messages.length ? messages[messages.length - 1].id : 'none';

    if (lastMessageId) {
      setEventHistory(function (prevState) {
        if (!prevState[lastMessageId]) {
          return _objectSpread(_objectSpread({}, prevState), {}, (0, _defineProperty2["default"])({}, lastMessageId, [event]));
        } else {
          return _objectSpread(_objectSpread({}, prevState), {}, (0, _defineProperty2["default"])({}, lastMessageId, [].concat((0, _toConsumableArray2["default"])(prevState[lastMessageId]), [event])));
        }
      });
    }
  };

  var handleEventStateChange = function handleEventStateChange(channelState) {
    setMessages(channelState.messages);
    setRead(channelState.read);
    setTyping(channelState.typing);
    setWatcherCount(channelState.watcher_count);
    setWatchers(channelState.watchers);
  };

  var handleEventStateThrottled = (0, _throttle["default"])(handleEventStateChange, 500, {
    leading: true,
    trailing: true
  });

  var handleEvent = function handleEvent(event) {
    var _event$message;

    if (thread) {
      var updatedThreadMessages = thread.id && channel && channel.state.threads[thread.id] || threadMessages;
      setThreadMessages(updatedThreadMessages);
    }

    if (channel && thread && ((_event$message = event.message) == null ? void 0 : _event$message.id) === thread.id) {
      var updatedThread = channel.state.messageToImmutable(event.message);
      setThread(updatedThread);
    }

    if (event.type === 'member.added') addToEventHistory(event);
    if (event.type === 'member.removed') addToEventHistory(event);

    if (channel) {
      handleEventStateThrottled(channel.state);
    }
  };

  var listenToChanges = function listenToChanges() {
    client.on('connection.recovered', handleEvent);
    channel == null ? void 0 : channel.on(handleEvent);
  };

  var initChannel = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var initError;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              initError = false;
              setError(false);
              setLoading(true);

              if (!(channel && !channel.initialized && channel.cid)) {
                _context.next = 14;
                break;
              }

              _context.prev = 4;
              _context.next = 7;
              return channel.watch();

            case 7:
              _context.next = 14;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](4);
              setError(_context.t0);
              setLoading(false);
              initError = true;

            case 14:
              setLastRead(new Date());

              if (!initError) {
                copyChannelState();
                listenToChanges();
              }

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 9]]);
    }));

    return function initChannel() {
      return _ref.apply(this, arguments);
    };
  }();

  var updateMessage = function updateMessage(updatedMessage) {
    var extraState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (channel) {
      channel.state.addMessageSorted(updatedMessage, true);

      if (thread && updatedMessage.parent_id) {
        extraState.threadMessages = channel.state.threads[updatedMessage.parent_id] || [];
        setThreadMessages(extraState.threadMessages);
      }

      setMessages(channel.state.messages);
    }
  };

  var createMessagePreview = function createMessagePreview(_ref2) {
    var attachments = _ref2.attachments,
        mentioned_users = _ref2.mentioned_users,
        parent_id = _ref2.parent_id,
        text = _ref2.text,
        extraFields = (0, _objectWithoutProperties2["default"])(_ref2, ["attachments", "mentioned_users", "parent_id", "text"]);

    var message = _objectSpread({
      __html: text,
      attachments: attachments,
      created_at: new Date(),
      html: text,
      id: client.userID + "-" + (0, _generateRandomId.generateRandomId)(),
      mentioned_users: (mentioned_users == null ? void 0 : mentioned_users.map(function (userId) {
        return {
          id: userId
        };
      })) || [],
      parent_id: parent_id,
      reactions: [],
      status: 'sending',
      text: text,
      type: 'regular',
      user: _objectSpread({
        id: client.userID
      }, client.user)
    }, extraFields);

    return message;
  };

  var sendMessageRequest = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(message) {
      var __html, attachments, created_at, html, id, mentioned_users, parent_id, reactions, status, text, type, user, extraFields, messageData, messageResponse;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              __html = message.__html, attachments = message.attachments, created_at = message.created_at, html = message.html, id = message.id, mentioned_users = message.mentioned_users, parent_id = message.parent_id, reactions = message.reactions, status = message.status, text = message.text, type = message.type, user = message.user, extraFields = (0, _objectWithoutProperties2["default"])(message, ["__html", "attachments", "created_at", "html", "id", "mentioned_users", "parent_id", "reactions", "status", "text", "type", "user"]);
              messageData = _objectSpread({
                attachments: attachments,
                id: id,
                mentioned_users: (mentioned_users == null ? void 0 : mentioned_users.map(function (mentionedUser) {
                  return mentionedUser.id;
                })) || [],
                parent_id: parent_id,
                text: text
              }, extraFields);
              _context2.prev = 2;
              messageResponse = {};

              if (!doSendMessageRequest) {
                _context2.next = 10;
                break;
              }

              _context2.next = 7;
              return doSendMessageRequest((channel == null ? void 0 : channel.cid) || '', messageData);

            case 7:
              messageResponse = _context2.sent;
              _context2.next = 14;
              break;

            case 10:
              if (!channel) {
                _context2.next = 14;
                break;
              }

              _context2.next = 13;
              return channel.sendMessage(messageData);

            case 13:
              messageResponse = _context2.sent;

            case 14:
              if (messageResponse.message) {
                messageResponse.message.status = 'received';
                updateMessage(messageResponse.message);
              }

              _context2.next = 22;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);
              message.status = 'failed';
              updateMessage(message);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 17]]);
    }));

    return function sendMessageRequest(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var sendMessage = function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(message) {
      var _channel$state2;

      var messagePreview;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (channel == null ? void 0 : (_channel$state2 = channel.state) == null ? void 0 : _channel$state2.filterErrorMessages) {
                channel.state.filterErrorMessages();
              }

              messagePreview = createMessagePreview(_objectSpread(_objectSpread({}, message), {}, {
                attachments: message.attachments || []
              }));
              updateMessage(messagePreview, {
                commands: [],
                messageInput: ''
              });
              _context3.next = 5;
              return sendMessageRequest(messagePreview);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function sendMessage(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var retrySendMessage = function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(message) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              message = _objectSpread(_objectSpread({}, message), {}, {
                status: 'sending'
              });
              updateMessage(message);
              _context4.next = 4;
              return sendMessageRequest(message);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function retrySendMessage(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  var loadMoreFinished = function loadMoreFinished(updatedHasMore, newMessages) {
    setLoadingMore(false);
    setHasMore(updatedHasMore);
    setMessages(newMessages);
  };

  var loadMoreFinishedDebounced = (0, _debounce["default"])(loadMoreFinished, 2000, {
    leading: true,
    trailing: true
  });

  var loadMore = function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
      var oldestMessage, oldestID, limit, queryResponse, updatedHasMore;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(loadingMore || hasMore === false)) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return");

            case 2:
              setLoadingMore(true);

              if (messages.length) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", setLoadingMore(false));

            case 5:
              oldestMessage = messages && messages[0];

              if (!(oldestMessage && oldestMessage.status !== 'received')) {
                _context5.next = 8;
                break;
              }

              return _context5.abrupt("return", setLoadingMore(false));

            case 8:
              oldestID = oldestMessage && oldestMessage.id;
              limit = 100;
              _context5.prev = 10;

              if (!channel) {
                _context5.next = 17;
                break;
              }

              _context5.next = 14;
              return channel.query({
                messages: {
                  id_lt: oldestID,
                  limit: limit
                }
              });

            case 14:
              queryResponse = _context5.sent;
              updatedHasMore = queryResponse.messages.length === limit;
              loadMoreFinishedDebounced(updatedHasMore, channel.state.messages);

            case 17:
              _context5.next = 23;
              break;

            case 19:
              _context5.prev = 19;
              _context5.t0 = _context5["catch"](10);
              console.warn('Message pagination request failed with error', _context5.t0);
              return _context5.abrupt("return", setLoadingMore(false));

            case 23:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[10, 19]]);
    }));

    return function loadMore() {
      return _ref6.apply(this, arguments);
    };
  }();

  var loadMoreThrottled = (0, _throttle["default"])(loadMore, 2000, {
    leading: true,
    trailing: true
  });

  var editMessage = function editMessage(updatedMessage) {
    return doUpdateMessageRequest ? doUpdateMessageRequest((channel == null ? void 0 : channel.cid) || '', updatedMessage) : client.updateMessage(updatedMessage);
  };

  var setEditingState = function setEditingState(message) {
    setEditing(message);
  };

  var clearEditingState = function clearEditingState() {
    return setEditing(false);
  };

  var removeMessage = function removeMessage(message) {
    if (channel) {
      channel.state.removeMessage(message);
      setMessages(channel.state.messages);
    }
  };

  var openThread = function openThread(message) {
    var _channel$state3;

    var newThreadMessages = (message == null ? void 0 : message.id) ? (channel == null ? void 0 : (_channel$state3 = channel.state) == null ? void 0 : _channel$state3.threads[message.id]) || (0, _seamlessImmutable["default"])([]) : (0, _seamlessImmutable["default"])([]);
    setThread(message);
    setThreadMessages(newThreadMessages);
  };

  var closeThread = function closeThread() {
    setThread(null);
    setThreadMessages((0, _seamlessImmutable["default"])([]));
  };

  var loadMoreThreadFinished = function loadMoreThreadFinished(newThreadHasMore, updatedThreadMessages) {
    setThreadHasMore(newThreadHasMore);
    setThreadLoadingMore(false);
    setThreadMessages(updatedThreadMessages);
  };

  var loadMoreThreadFinishedDebounced = (0, _debounce["default"])(loadMoreThreadFinished, 2000, {
    leading: true,
    trailing: true
  });

  var loadMoreThread = function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
      var _oldMessages$, parentID, oldMessages, oldestMessageID, limit, queryResponse, updatedHasMore, updatedThreadMessages;

      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(threadLoadingMore || !(thread == null ? void 0 : thread.id))) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt("return");

            case 2:
              setThreadLoadingMore(true);

              if (!channel) {
                _context6.next = 14;
                break;
              }

              parentID = thread.id;
              oldMessages = channel.state.threads[parentID] || [];
              oldestMessageID = oldMessages == null ? void 0 : (_oldMessages$ = oldMessages[0]) == null ? void 0 : _oldMessages$.id;
              limit = 50;
              _context6.next = 10;
              return channel.getReplies(parentID, {
                id_lt: oldestMessageID,
                limit: limit
              });

            case 10:
              queryResponse = _context6.sent;
              updatedHasMore = queryResponse.messages.length === limit;
              updatedThreadMessages = channel.state.threads[parentID] || [];
              loadMoreThreadFinishedDebounced(updatedHasMore, updatedThreadMessages);

            case 14:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function loadMoreThread() {
      return _ref7.apply(this, arguments);
    };
  }();

  var channelContext = {
    channel: channel,
    disabled: (channel == null ? void 0 : (_channel$data = channel.data) == null ? void 0 : _channel$data.frozen) && disableIfFrozenChannel,
    EmptyStateIndicator: EmptyStateIndicator,
    error: error,
    eventHistory: eventHistory,
    lastRead: lastRead,
    loading: loading,
    LoadingIndicator: LoadingIndicator,
    markRead: markReadThrottled,
    members: members,
    read: read,
    setLastRead: setLastRead,
    typing: typing,
    watcherCount: watcherCount,
    watchers: watchers
  };
  var messagesContext = {
    Attachment: Attachment,
    clearEditingState: clearEditingState,
    editing: editing,
    editMessage: editMessage,
    emojiData: emojiData,
    hasMore: hasMore,
    loadingMore: loadingMore,
    loadMore: loadMoreThrottled,
    Message: Message,
    messages: messages,
    removeMessage: removeMessage,
    retrySendMessage: retrySendMessage,
    sendMessage: sendMessage,
    setEditingState: setEditingState,
    updateMessage: updateMessage
  };
  var threadContext = {
    closeThread: closeThread,
    loadMoreThread: loadMoreThread,
    openThread: openThread,
    thread: thread,
    threadHasMore: threadHasMore,
    threadLoadingMore: threadLoadingMore,
    threadMessages: threadMessages
  };

  if (!channel || error) {
    return _react["default"].createElement(LoadingErrorIndicator, {
      error: error,
      listType: "message",
      retry: function retry() {
        loadMoreThrottled();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 832,
        columnNumber: 7
      }
    });
  }

  if (!(channel == null ? void 0 : channel.cid) || !channel.watch) {
    return _react["default"].createElement(_reactNative.Text, {
      style: {
        fontWeight: 'bold',
        padding: 16
      },
      testID: "no-channel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 844,
        columnNumber: 7
      }
    }, t('Please select a channel first'));
  }

  return _react["default"].createElement(KeyboardCompatibleView, (0, _extends2["default"])({
    behavior: keyboardBehavior,
    enabled: !disableKeyboardCompatibleView,
    keyboardVerticalOffset: keyboardVerticalOffset
  }, additionalKeyboardAvoidingViewProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 5
    }
  }), _react["default"].createElement(_ChannelContext.ChannelProvider, {
    value: channelContext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857,
      columnNumber: 7
    }
  }, _react["default"].createElement(_MessagesContext.MessagesProvider, {
    value: messagesContext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858,
      columnNumber: 9
    }
  }, _react["default"].createElement(_ThreadContext.ThreadProvider, {
    value: threadContext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859,
      columnNumber: 11
    }
  }, _react["default"].createElement(_SuggestionsContext.SuggestionsProvider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860,
      columnNumber: 13
    }
  }, children)))));
};

exports.Channel = Channel;
//# sourceMappingURL=Channel.js.map