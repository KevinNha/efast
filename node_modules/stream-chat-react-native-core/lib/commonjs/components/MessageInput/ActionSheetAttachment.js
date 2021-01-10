var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionSheetAttachment = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactNativeActionsheet = require("react-native-actionsheet");

var _IconSquare = require("../IconSquare");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageInput/ActionSheetAttachment.tsx";

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  font-weight: bold;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  flex-direction: row;\n  height: 100%;\n  justify-content: space-between;\n  padding-horizontal: 20px;\n  width: 100%;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding-left: 20px;\n  width: 100%;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var iconGallery = require("../../images/icons/icon_attach-media.png");

var iconClose = require("../../images/icons/icon_close.png");

var iconFolder = require("../../images/icons/icon_folder.png");

var ActionSheetButtonContainer = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.messageInput.actionSheet.buttonContainer.css;
});

var ActionSheetButtonText = _styledComponents.styled.Text(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageInput.actionSheet.buttonText.css;
});

var ActionSheetTitleContainer = _styledComponents.styled.View(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.messageInput.actionSheet.titleContainer.css;
});

var ActionSheetTitleText = _styledComponents.styled.Text(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.messageInput.actionSheet.titleText.css;
});

var AttachmentActionSheetItem = function AttachmentActionSheetItem(props) {
  var icon = props.icon,
      key = props.key,
      testID = props.testID,
      text = props.text;
  return _react["default"].createElement(ActionSheetButtonContainer, {
    key: key,
    testID: testID,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, _react["default"].createElement(_IconSquare.IconSquare, {
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), _react["default"].createElement(ActionSheetButtonText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, text));
};

var ActionSheetAttachment = function ActionSheetAttachment(props) {
  var closeAttachActionSheet = props.closeAttachActionSheet,
      pickFile = props.pickFile,
      pickImage = props.pickImage,
      setAttachActionSheetRef = props.setAttachActionSheetRef,
      styles = props.styles;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(_reactNativeActionsheet.ActionSheetCustom, {
    onPress: function onPress(index) {
      setTimeout(function () {
        switch (index) {
          case 0:
            pickImage();
            break;

          case 1:
            pickFile();
            break;

          default:
        }
      }, 201);
    },
    options: [_react["default"].createElement(AttachmentActionSheetItem, {
      icon: iconGallery,
      key: "upload-photo-item",
      testID: "upload-photo-item",
      text: t('Upload a photo'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }), _react["default"].createElement(AttachmentActionSheetItem, {
      icon: iconFolder,
      key: "upload-file-item",
      testID: "upload-file-item",
      text: t('Upload a file'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }
    })],
    ref: setAttachActionSheetRef,
    styles: styles,
    title: _react["default"].createElement(ActionSheetTitleContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }
    }, _react["default"].createElement(ActionSheetTitleText, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }
    }, t('Add a file')), _react["default"].createElement(_IconSquare.IconSquare, {
      icon: iconClose,
      onPress: closeAttachActionSheet,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  });
};

exports.ActionSheetAttachment = ActionSheetAttachment;
//# sourceMappingURL=ActionSheetAttachment.js.map