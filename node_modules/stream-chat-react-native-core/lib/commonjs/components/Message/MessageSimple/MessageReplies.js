var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageReplies = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Message/MessageSimple/MessageReplies.tsx";

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: ", ";\n  font-size: 12px;\n  font-weight: 700;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  transform: ", ";\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  flex-direction: row;\n  padding: 5px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var iconPath = require("../../../images/icons/icon_path.png");

var Container = _styledComponents.styled.TouchableOpacity(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.message.replies.container.css;
});

var MessageRepliesImage = _styledComponents.styled.Image(_templateObject2(), function (_ref2) {
  var alignment = _ref2.alignment;
  return alignment === 'left' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.message.replies.image.css;
});

var MessageRepliesText = _styledComponents.styled.Text(_templateObject3(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.message.replies.messageRepliesText.css;
});

var MessageReplies = function MessageReplies(props) {
  var alignment = props.alignment,
      isThreadList = props.isThreadList,
      message = props.message,
      openThread = props.openThread;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  if (isThreadList || !message.reply_count) return null;
  return _react["default"].createElement(Container, {
    onPress: openThread,
    testID: "message-replies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, alignment === 'left' && _react["default"].createElement(MessageRepliesImage, {
    alignment: alignment,
    source: iconPath,
    testID: "message-replies-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), _react["default"].createElement(MessageRepliesText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, message.reply_count === 1 ? t('1 reply') : t('{{ replyCount }} replies', {
    replyCount: message.reply_count
  })), alignment === 'right' && _react["default"].createElement(MessageRepliesImage, {
    alignment: alignment,
    source: iconPath,
    testID: "message-replies-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }));
};

exports.MessageReplies = MessageReplies;
//# sourceMappingURL=MessageReplies.js.map