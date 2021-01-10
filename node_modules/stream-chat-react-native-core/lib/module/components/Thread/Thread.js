var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Thread = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Message = require("../Message/Message");

var _MessageInput = require("../MessageInput/MessageInput");

var _MessageList = require("../MessageList/MessageList");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _ThreadContext = require("../../contexts/threadContext/ThreadContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Thread/Thread.tsx";

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: #f4f9ff;\n  border-radius: 4px;\n  margin: 10px;\n  padding: 8px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NewThread = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.thread.newThread.css;
});

var NewThreadText = _styledComponents.styled.Text(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.thread.newThread.text.css;
});

var Thread = function Thread(props) {
  var additionalMessageInputProps = props.additionalMessageInputProps,
      additionalMessageListProps = props.additionalMessageListProps,
      additionalParentMessageProps = props.additionalParentMessageProps,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      disabled = props.disabled,
      MessageFromProps = props.Message,
      _props$MessageInput = props.MessageInput,
      MessageInput = _props$MessageInput === void 0 ? _MessageInput.MessageInput : _props$MessageInput,
      _props$MessageList = props.MessageList,
      MessageList = _props$MessageList === void 0 ? _MessageList.MessageList : _props$MessageList;

  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      channel = _useChannelContext.channel;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      MessageFromContext = _useMessagesContext.Message;

  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
      loadMoreThread = _useThreadContext.loadMoreThread,
      thread = _useThreadContext.thread;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  (0, _react.useEffect)(function () {
    var loadMoreThreadAsync = function () {
      var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return loadMoreThread();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function loadMoreThreadAsync() {
        return _ref3.apply(this, arguments);
      };
    }();

    if ((thread == null ? void 0 : thread.id) && thread.reply_count) {
      loadMoreThreadAsync();
    }
  }, []);
  if (!thread) return null;
  var Message = MessageFromProps || MessageFromContext;

  var footerComponent = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Message.Message, (0, _extends2["default"])({
    groupStyles: ['single'],
    message: thread,
    Message: Message,
    threadList: true
  }, additionalParentMessageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  })), _react["default"].createElement(NewThread, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }, _react["default"].createElement(NewThreadText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, t('Start of a new thread'))));

  return _react["default"].createElement(_react["default"].Fragment, {
    key: "thread-" + thread.id + "-" + ((channel == null ? void 0 : channel.cid) || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 5
    }
  }, _react["default"].createElement(MessageList, (0, _extends2["default"])({
    FooterComponent: footerComponent,
    Message: Message,
    threadList: true
  }, additionalMessageListProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  })), _react["default"].createElement(MessageInput, (0, _extends2["default"])({
    additionalTextInputProps: {
      autoFocus: autoFocus,
      editable: !disabled
    },
    parent_id: thread.id
  }, additionalMessageInputProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  })));
};

exports.Thread = Thread;
//# sourceMappingURL=Thread.js.map