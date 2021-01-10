var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageContent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireWildcard(require("react"));

var _MessageActionSheet = require("./MessageActionSheet");

var _MessageReplies = require("./MessageReplies");

var _MessageTextContainer = require("./MessageTextContainer");

var _Attachment = require("../../Attachment/Attachment");

var _FileAttachment = require("../../Attachment/FileAttachment");

var _FileAttachmentGroup = require("../../Attachment/FileAttachmentGroup");

var _Gallery = require("../../Attachment/Gallery");

var _ReactionList = require("../../Reaction/ReactionList");

var _ReactionPickerWrapper = require("../../Reaction/ReactionPickerWrapper");

var _ChannelContext = require("../../../contexts/channelContext/ChannelContext");

var _MessageContentContext = require("../../../contexts/messageContentContext/MessageContentContext");

var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");

var _ThreadContext = require("../../../contexts/threadContext/ThreadContext");

var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../../styles/styledComponents");

var _utils = require("../../../utils/utils");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Message/MessageSimple/MessageContent.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject7() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: ", ";\n  font-size: 11px;\n  text-align: ", ";\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  margin-top: 2px;\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: #a4a4a4;\n  margin-right: 5px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: #a4a4a4;\n  font-size: 15px;\n  line-height: 20px;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: ", ";\n  justify-content: ", ";\n  max-width: 250px;\n  padding: 5px;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: ", ";\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: ", ";\n  background-color: ", ";\n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n  border-top-left-radius: ", "px;\n  border-top-right-radius: ", "px;\n  justify-content: ", ";\n  max-width: 250px;\n  padding: ", "px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.TouchableOpacity(_templateObject(), function (_ref) {
  var alignment = _ref.alignment;
  return alignment === 'left' ? 'flex-start' : 'flex-end';
}, function (_ref2) {
  var error = _ref2.error,
      theme = _ref2.theme;
  return error ? theme.message.content.errorContainer.backgroundColor : theme.colors.transparent;
}, function (_ref3) {
  var alignment = _ref3.alignment,
      theme = _ref3.theme;
  return alignment === 'left' ? theme.message.content.container.borderRadiusS : theme.message.content.container.borderRadiusL;
}, function (_ref4) {
  var alignment = _ref4.alignment,
      theme = _ref4.theme;
  return alignment === 'left' ? theme.message.content.container.borderRadiusL : theme.message.content.container.borderRadiusS;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.message.content.container.borderRadiusL;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.message.content.container.borderRadiusL;
}, function (_ref7) {
  var alignment = _ref7.alignment;
  return alignment === 'left' ? 'flex-start' : 'flex-end';
}, function (_ref8) {
  var error = _ref8.error;
  return error ? 5 : 0;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.message.content.container.css;
});

var ContainerInner = _styledComponents.styled.View(_templateObject2(), function (_ref10) {
  var alignment = _ref10.alignment;
  return alignment === 'left' ? 'flex-start' : 'flex-end';
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.message.content.containerInner.css;
});

var DeletedContainer = _styledComponents.styled.View(_templateObject3(), function (_ref12) {
  var alignment = _ref12.alignment;
  return alignment === 'left' ? 'flex-start' : 'flex-end';
}, function (_ref13) {
  var alignment = _ref13.alignment;
  return alignment === 'left' ? 'flex-start' : 'flex-end';
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.message.content.deletedContainer.css;
});

var DeletedText = _styledComponents.styled.Text(_templateObject4(), function (_ref15) {
  var theme = _ref15.theme;
  return theme.message.content.deletedText.css;
});

var FailedText = _styledComponents.styled.Text(_templateObject5());

var MetaContainer = _styledComponents.styled.View(_templateObject6(), function (_ref16) {
  var theme = _ref16.theme;
  return theme.message.content.metaContainer.css;
});

var MetaText = _styledComponents.styled.Text(_templateObject7(), function (_ref17) {
  var theme = _ref17.theme;
  return theme.colors.textGrey;
}, function (_ref18) {
  var alignment = _ref18.alignment;
  return alignment;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.message.content.metaText.css;
});

var MessageContent = function MessageContent(props) {
  var _props$ActionSheet = props.ActionSheet,
      ActionSheet = _props$ActionSheet === void 0 ? _MessageActionSheet.MessageActionSheet : _props$ActionSheet,
      PropsAttachment = props.Attachment,
      AttachmentActions = props.AttachmentActions,
      AttachmentFileIcon = props.AttachmentFileIcon,
      Card = props.Card,
      CardCover = props.CardCover,
      CardFooter = props.CardFooter,
      CardHeader = props.CardHeader,
      _props$FileAttachment = props.FileAttachment,
      FileAttachment = _props$FileAttachment === void 0 ? _FileAttachment.FileAttachment : _props$FileAttachment,
      _props$FileAttachment2 = props.FileAttachmentGroup,
      FileAttachmentGroup = _props$FileAttachment2 === void 0 ? _FileAttachmentGroup.FileAttachmentGroup : _props$FileAttachment2,
      _props$Gallery = props.Gallery,
      Gallery = _props$Gallery === void 0 ? _Gallery.Gallery : _props$Gallery,
      Giphy = props.Giphy,
      MessageFooter = props.MessageFooter,
      MessageHeader = props.MessageHeader,
      _props$MessageReplies = props.MessageReplies,
      MessageReplies = _props$MessageReplies === void 0 ? _MessageReplies.MessageReplies : _props$MessageReplies,
      MessageText = props.MessageText,
      _props$ReactionList = props.ReactionList,
      ReactionList = _props$ReactionList === void 0 ? _ReactionList.ReactionList : _props$ReactionList,
      UrlPreview = props.UrlPreview,
      actionSheetStyles = props.actionSheetStyles,
      actionSheetVisible = props.actionSheetVisible,
      additionalTouchableProps = props.additionalTouchableProps,
      alignment = props.alignment,
      canDeleteMessage = props.canDeleteMessage,
      canEditMessage = props.canEditMessage,
      customMessageContent = props.customMessageContent,
      dismissReactionPicker = props.dismissReactionPicker,
      _props$enableLongPres = props.enableLongPress,
      enableLongPress = _props$enableLongPres === void 0 ? true : _props$enableLongPres,
      formatDate = props.formatDate,
      getTotalReactionCount = props.getTotalReactionCount,
      groupStyles = props.groupStyles,
      handleAction = props.handleAction,
      handleDelete = props.handleDelete,
      handleEdit = props.handleEdit,
      handleReaction = props.handleReaction,
      _props$hideReactionCo = props.hideReactionCount,
      hideReactionCount = _props$hideReactionCo === void 0 ? false : _props$hideReactionCo,
      _props$hideReactionOw = props.hideReactionOwners,
      hideReactionOwners = _props$hideReactionOw === void 0 ? false : _props$hideReactionOw,
      isMyMessage = props.isMyMessage,
      markdownRules = props.markdownRules,
      message = props.message,
      messageActions = props.messageActions,
      onLongPress = props.onLongPress,
      onPress = props.onPress,
      onThreadSelect = props.onThreadSelect,
      openReactionPicker = props.openReactionPicker,
      reactionPickerVisible = props.reactionPickerVisible,
      _props$reactionsEnabl = props.reactionsEnabled,
      reactionsEnabled = _props$reactionsEnabl === void 0 ? true : _props$reactionsEnabl,
      _props$repliesEnabled = props.repliesEnabled,
      repliesEnabled = _props$repliesEnabled === void 0 ? true : _props$repliesEnabled,
      setActionSheetVisible = props.setActionSheetVisible,
      showActionSheet = props.showActionSheet,
      _props$supportedReact = props.supportedReactions,
      supportedReactions = _props$supportedReact === void 0 ? _utils.emojiData : _props$supportedReact,
      threadList = props.threadList,
      _props$textBeforeAtta = props.textBeforeAttachments,
      textBeforeAttachments = _props$textBeforeAtta === void 0 ? false : _props$textBeforeAtta,
      disabledFromProps = props.disabled;

  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      disabledFromContext = _useChannelContext.disabled;

  var disabled = disabledFromProps || disabledFromContext;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      ContextAttachment = _useMessagesContext.Attachment,
      Message = _useMessagesContext.Message,
      retrySendMessage = _useMessagesContext.retrySendMessage;

  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
      openThread = _useThreadContext.openThread;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t,
      tDateTimeParser = _useTranslationContex.tDateTimeParser;

  var Attachment = PropsAttachment || ContextAttachment || _Attachment.Attachment;
  var actionSheetRef = (0, _react.useRef)();

  var onOpenThread = function onOpenThread() {
    if (onThreadSelect) {
      onThreadSelect(message);
    } else if (openThread) {
      openThread(message);
    }
  };

  (0, _react.useEffect)(function () {
    if (actionSheetVisible && actionSheetRef.current) {
      setTimeout(function () {
        var _actionSheetRef$curre;

        (_actionSheetRef$curre = actionSheetRef.current) == null ? void 0 : _actionSheetRef$curre.show == null ? void 0 : _actionSheetRef$curre.show();
      }, customMessageContent ? 10 : 0);
    }
  }, [actionSheetVisible]);
  var showTime = groupStyles[0] === 'single' || groupStyles[0] === 'bottom';
  var hasReactions = reactionsEnabled && message.latest_reactions && message.latest_reactions.length > 0;
  var images = Array.isArray(message.attachments) && message.attachments.filter(function (item) {
    return item.type === 'image' && !item.title_link && !item.og_scrape_url;
  }) || [];
  var files = Array.isArray(message.attachments) && message.attachments.filter(function (item) {
    return item.type === 'file';
  }) || [];

  if (message.deleted_at) {
    return _react["default"].createElement(DeletedContainer, {
      alignment: alignment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 7
      }
    }, _react["default"].createElement(DeletedText, {
      testID: "message-deleted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 9
      }
    }, t('This message was deleted ...')));
  }

  var contentProps = _objectSpread({
    activeOpacity: 0.7,
    alignment: alignment,
    disabled: disabled,
    hasReactions: hasReactions,
    onLongPress: onLongPress && !disabled ? function (event) {
      return onLongPress(message, event);
    } : enableLongPress ? showActionSheet : function () {
      return null;
    },
    onPress: onPress ? function (event) {
      return onPress(message, event);
    } : function () {
      return null;
    },
    status: message.status
  }, additionalTouchableProps);

  if (message.status === 'failed') {
    contentProps.onPress = function () {
      return retrySendMessage(message);
    };
  }

  var context = {
    additionalTouchableProps: additionalTouchableProps,
    disabled: disabled,
    onLongPress: contentProps.onLongPress
  };

  var getDateText = function getDateText(formatter) {
    if (!message.created_at) return '';

    if (formatter) {
      if (typeof message.created_at === 'string') {
        return formatter(message.created_at);
      } else {
        return formatter(message.created_at.asMutable());
      }
    }

    var parserOutput;

    if (typeof message.created_at === 'string') {
      parserOutput = tDateTimeParser(message.created_at);
    } else {
      parserOutput = tDateTimeParser(message.created_at.asMutable());
    }

    if ((0, _TranslationContext.isDayOrMoment)(parserOutput)) {
      return parserOutput.format('LT');
    }

    return message.created_at;
  };

  var renderAttachments = function renderAttachments() {
    return _react["default"].createElement(_react["default"].Fragment, null, Array.isArray(message.attachments) && message.attachments.map(function (attachment, index) {
      if (attachment.type === 'file' || attachment.type === 'image' && !attachment.title_link && !attachment.og_scrape_url) {
        return null;
      }

      return _react["default"].createElement(Attachment, {
        actionHandler: handleAction,
        alignment: alignment,
        attachment: attachment,
        AttachmentActions: AttachmentActions,
        Card: Card,
        CardCover: CardCover,
        CardFooter: CardFooter,
        CardHeader: CardHeader,
        FileAttachment: FileAttachment,
        Giphy: Giphy,
        key: message.id + "-" + index,
        UrlPreview: UrlPreview,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 13
        }
      });
    }), files.length > 0 && _react["default"].createElement(FileAttachmentGroup, {
      alignment: alignment,
      AttachmentActions: AttachmentActions,
      AttachmentFileIcon: AttachmentFileIcon,
      FileAttachment: FileAttachment,
      files: files,
      handleAction: handleAction,
      messageId: message.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 9
      }
    }), images.length > 0 && _react["default"].createElement(Gallery, {
      alignment: alignment,
      images: images,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 9
      }
    }));
  };

  return _react["default"].createElement(_MessageContentContext.MessageContentProvider, {
    value: context,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 5
    }
  }, _react["default"].createElement(Container, (0, _extends2["default"])({}, contentProps, {
    error: message.type === 'error' || message.status === 'failed',
    testID: "message-content-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 7
    }
  }), message.type === 'error' && _react["default"].createElement(FailedText, {
    testID: "message-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 11
    }
  }, t('ERROR · UNSENT')), message.status === 'failed' && _react["default"].createElement(FailedText, {
    testID: "message-failed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 11
    }
  }, t('Message failed - try again')), reactionsEnabled && ReactionList && _react["default"].createElement(_ReactionPickerWrapper.ReactionPickerWrapper, {
    alignment: alignment,
    customMessageContent: customMessageContent,
    dismissReactionPicker: dismissReactionPicker,
    handleReaction: handleReaction,
    hideReactionCount: hideReactionCount,
    hideReactionOwners: hideReactionOwners,
    message: message,
    offset: {
      left: 10,
      right: 10,
      top: 0
    },
    openReactionPicker: openReactionPicker,
    reactionPickerVisible: reactionPickerVisible,
    supportedReactions: supportedReactions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 11
    }
  }, message.latest_reactions && message.latest_reactions.length > 0 && _react["default"].createElement(ReactionList, {
    alignment: alignment,
    getTotalReactionCount: getTotalReactionCount,
    latestReactions: message.latest_reactions,
    supportedReactions: supportedReactions,
    visible: !reactionPickerVisible,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 17
    }
  })), MessageHeader && _react["default"].createElement(MessageHeader, (0, _extends2["default"])({
    testID: "message-header"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 27
    }
  })), _react["default"].createElement(ContainerInner, {
    alignment: alignment,
    collapsable: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 9
    }
  }, !textBeforeAttachments && renderAttachments(), _react["default"].createElement(_MessageTextContainer.MessageTextContainer, {
    alignment: alignment,
    disabled: message.status === 'failed' || message.type === 'error',
    groupStyles: groupStyles,
    handleReaction: handleReaction,
    isMyMessage: isMyMessage,
    markdownRules: markdownRules,
    message: message,
    Message: Message,
    MessageText: MessageText,
    openThread: onOpenThread,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 11
    }
  }), textBeforeAttachments && renderAttachments()), repliesEnabled && _react["default"].createElement(MessageReplies, {
    alignment: alignment,
    isThreadList: !!threadList,
    message: message,
    openThread: onOpenThread,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 11
    }
  }), MessageFooter && _react["default"].createElement(MessageFooter, (0, _extends2["default"])({
    testID: "message-footer"
  }, props, {
    supportedReactions: supportedReactions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 11
    }
  })), !MessageFooter && showTime && _react["default"].createElement(MetaContainer, {
    testID: "show-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 11
    }
  }, _react["default"].createElement(MetaText, {
    alignment: alignment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 13
    }
  }, getDateText(formatDate))), actionSheetVisible && enableLongPress && _react["default"].createElement(ActionSheet, {
    actionSheetStyles: actionSheetStyles,
    canDeleteMessage: canDeleteMessage,
    canEditMessage: canEditMessage,
    handleDelete: handleDelete,
    handleEdit: handleEdit,
    handleReaction: handleReaction,
    message: message,
    messageActions: messageActions,
    openReactionPicker: openReactionPicker,
    openThread: onOpenThread,
    reactionsEnabled: reactionsEnabled,
    ref: actionSheetRef,
    repliesEnabled: repliesEnabled,
    setActionSheetVisible: setActionSheetVisible,
    supportedReactions: _utils.emojiData,
    threadList: threadList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 11
    }
  })));
};

exports.MessageContent = MessageContent;
//# sourceMappingURL=MessageContent.js.map