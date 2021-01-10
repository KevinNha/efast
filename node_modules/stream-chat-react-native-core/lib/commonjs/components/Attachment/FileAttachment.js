var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileAttachment = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _AttachmentActions = require("./AttachmentActions");

var _MessageContentContext = require("../../contexts/messageContentContext/MessageContentContext");

var _styledComponents = require("../../styles/styledComponents");

var _FileIcon = require("./FileIcon");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Attachment/FileAttachment.tsx";

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  font-weight: 700;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  padding-left: 10px;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: #ebebeb;\n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n  border-top-left-radius: ", "px;\n  border-top-right-radius: ", "px;\n  flex-direction: row;\n  padding: 10px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FileContainer = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var alignment = _ref.alignment,
      groupStyle = _ref.groupStyle;
  if (groupStyle === 'top' || groupStyle === 'middle') return 0;
  return alignment === 'right' ? 16 : 2;
}, function (_ref2) {
  var alignment = _ref2.alignment,
      groupStyle = _ref2.groupStyle;
  if (groupStyle === 'top' || groupStyle === 'middle') return 0;
  return alignment === 'left' ? 16 : 2;
}, function (_ref3) {
  var groupStyle = _ref3.groupStyle;
  if (groupStyle === 'middle' || groupStyle === 'bottom') return 0;
  return 16;
}, function (_ref4) {
  var groupStyle = _ref4.groupStyle;
  if (groupStyle === 'middle' || groupStyle === 'bottom') return 0;
  return 16;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.message.file.container.css;
});

var FileDetails = _styledComponents.styled.View(_templateObject2(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.message.file.details.css;
});

var FileSize = _styledComponents.styled.Text(_templateObject3(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.message.file.size.css;
});

var FileTitle = _styledComponents.styled.Text(_templateObject4(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.message.file.title.css;
});

var getFileSizeDisplayText = function getFileSizeDisplayText(size) {
  if (!size) return;

  if (typeof size === 'string') {
    size = parseFloat(size);
  }

  if (size < 1000 * 1000) {
    return Math.floor(size / 10) / 100 + " KB";
  }

  return Math.floor(size / 10000) / 100 + " MB";
};

var goToURL = function goToURL(url) {
  if (!url) return;

  _reactNative.Linking.canOpenURL(url).then(function (supported) {
    if (supported) {
      _reactNative.Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};

var FileAttachment = function FileAttachment(props) {
  var _attachment$actions;

  var actionHandler = props.actionHandler,
      _props$alignment = props.alignment,
      alignment = _props$alignment === void 0 ? 'right' : _props$alignment,
      attachment = props.attachment,
      _props$AttachmentActi = props.AttachmentActions,
      AttachmentActions = _props$AttachmentActi === void 0 ? _AttachmentActions.AttachmentActions : _props$AttachmentActi,
      _props$AttachmentFile = props.AttachmentFileIcon,
      AttachmentFileIcon = _props$AttachmentFile === void 0 ? _FileIcon.FileIcon : _props$AttachmentFile,
      groupStyle = props.groupStyle;

  var _useMessageContentCon = (0, _MessageContentContext.useMessageContentContext)(),
      additionalTouchableProps = _useMessageContentCon.additionalTouchableProps,
      onLongPress = _useMessageContentCon.onLongPress;

  return _react["default"].createElement(_reactNative.TouchableOpacity, (0, _extends2["default"])({
    onLongPress: onLongPress,
    onPress: function onPress() {
      return goToURL(attachment.asset_url);
    },
    testID: "file-attachment"
  }, additionalTouchableProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }), _react["default"].createElement(FileContainer, {
    alignment: alignment,
    groupStyle: groupStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, _react["default"].createElement(AttachmentFileIcon, {
    mimeType: attachment.mime_type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }), _react["default"].createElement(FileDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, _react["default"].createElement(FileTitle, {
    numberOfLines: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, attachment.title), _react["default"].createElement(FileSize, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, getFileSizeDisplayText(attachment.file_size)))), ((_attachment$actions = attachment.actions) == null ? void 0 : _attachment$actions.length) ? _react["default"].createElement(AttachmentActions, (0, _extends2["default"])({
    actionHandler: actionHandler
  }, attachment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  })) : null);
};

exports.FileAttachment = FileAttachment;
//# sourceMappingURL=FileAttachment.js.map