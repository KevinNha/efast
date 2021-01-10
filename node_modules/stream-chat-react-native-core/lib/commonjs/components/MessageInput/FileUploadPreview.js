var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUploadPreview = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _UploadProgressIndicator = require("./UploadProgressIndicator");

var _FileIcon = require("../Attachment/FileIcon");

var _styledComponents = require("../../styles/styledComponents");

var _utils = require("../../utils/utils");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageInput/FileUploadPreview.tsx";

function _templateObject6() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  padding-left: 10px;\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 10px;\n  width: 10px;\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: #fff;\n  border-radius: 20px;\n  height: 20px;\n  justify-content: center;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  width: 20px;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: ", "px;\n  margin-horizontal: 10px;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  flex-direction: row;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  border-color: #ebebeb;\n  border-width: 0.5px;\n  flex-direction: row;\n  height: ", "px;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  padding: ", "px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var closeRound = require("../../images/icons/close-round.png");

var FILE_PREVIEW_HEIGHT = 50;
var FILE_PREVIEW_PADDING = 10;

var AttachmentContainerView = _styledComponents.styled.View(_templateObject(), FILE_PREVIEW_HEIGHT, FILE_PREVIEW_PADDING, function (_ref) {
  var theme = _ref.theme;
  return theme.messageInput.fileUploadPreview.attachmentContainerView.css;
});

var AttachmentView = _styledComponents.styled.View(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageInput.fileUploadPreview.attachmentView.css;
});

var Container = _styledComponents.styled.View(_templateObject3(), function (_ref3) {
  var fileUploadsLength = _ref3.fileUploadsLength;
  return fileUploadsLength * (FILE_PREVIEW_HEIGHT + 5);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.messageInput.fileUploadPreview.container.css;
});

var Dismiss = _styledComponents.styled.TouchableOpacity(_templateObject4(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.messageInput.fileUploadPreview.dismiss.css;
});

var DismissImage = _styledComponents.styled.Image(_templateObject5(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.messageInput.fileUploadPreview.dismissImage.css;
});

var FilenameText = _styledComponents.styled.Text(_templateObject6(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.messageInput.fileUploadPreview.filenameText.css;
});

var FileUploadPreview = function FileUploadPreview(props) {
  var _props$AttachmentFile = props.AttachmentFileIcon,
      AttachmentFileIcon = _props$AttachmentFile === void 0 ? _FileIcon.FileIcon : _props$AttachmentFile,
      fileUploads = props.fileUploads,
      removeFile = props.removeFile,
      retryUpload = props.retryUpload;

  var renderItem = function renderItem(_ref8) {
    var item = _ref8.item;
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_UploadProgressIndicator.UploadProgressIndicator, {
      action: function action() {
        if (retryUpload) {
          retryUpload({
            newFile: item
          });
        }
      },
      active: item.state !== _utils.FileState.UPLOADED,
      type: item.state === _utils.FileState.UPLOADING ? _utils.ProgressIndicatorTypes.IN_PROGRESS : item.state === _utils.FileState.UPLOAD_FAILED ? _utils.ProgressIndicatorTypes.RETRY : undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 7
      }
    }, _react["default"].createElement(AttachmentContainerView, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }
    }, _react["default"].createElement(AttachmentView, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 11
      }
    }, _react["default"].createElement(AttachmentFileIcon, {
      mimeType: item.file.type,
      size: 20,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }
    }), _react["default"].createElement(FilenameText, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }
    }, item.file.name ? item.file.name.length > 35 ? item.file.name.substring(0, 35).concat('...') : item.file.name : '')))), _react["default"].createElement(Dismiss, {
      onPress: function onPress() {
        if (removeFile) {
          removeFile(item.id);
        }
      },
      testID: "remove-file-upload-preview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 7
      }
    }, _react["default"].createElement(DismissImage, {
      source: closeRound,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }
    })));
  };

  return (fileUploads == null ? void 0 : fileUploads.length) > 0 ? _react["default"].createElement(Container, {
    fileUploadsLength: fileUploads.length,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.FlatList, {
    data: fileUploads,
    keyExtractor: function keyExtractor(item) {
      return item.id;
    },
    renderItem: renderItem,
    style: {
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  })) : null;
};

exports.FileUploadPreview = FileUploadPreview;
//# sourceMappingURL=FileUploadPreview.js.map