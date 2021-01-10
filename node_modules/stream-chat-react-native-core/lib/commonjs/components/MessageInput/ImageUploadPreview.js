var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageUploadPreview = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _UploadProgressIndicator = require("./UploadProgressIndicator");

var _styledComponents = require("../../styles/styledComponents");

var _utils = require("../../utils/utils");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageInput/ImageUploadPreview.tsx";

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  border-radius: 10px;\n  height: 50px;\n  width: 50px;\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: flex-start;\n  flex-direction: row;\n  height: 50px;\n  margin-left: 5px;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 10px;\n  width: 10px;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: #fff;\n  border-radius: 20px;\n  height: 20px;\n  justify-content: center;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  width: 20px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 70px;\n  padding: 10px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var closeRound = require("../../images/icons/close-round.png");

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.messageInput.imageUploadPreview.container.css;
});

var Dismiss = _styledComponents.styled.TouchableOpacity(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageInput.imageUploadPreview.dismiss.css;
});

var DismissImage = _styledComponents.styled.Image(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.messageInput.imageUploadPreview.dismissImage.css;
});

var ItemContainer = _styledComponents.styled.View(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.messageInput.imageUploadPreview.itemContainer.css;
});

var Upload = _styledComponents.styled.Image(_templateObject5(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.messageInput.imageUploadPreview.upload.css;
});

var ImageUploadPreview = function ImageUploadPreview(props) {
  var imageUploads = props.imageUploads,
      removeImage = props.removeImage,
      retryUpload = props.retryUpload;

  var renderItem = function renderItem(_ref6) {
    var item = _ref6.item;
    return _react["default"].createElement(ItemContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }
    }, _react["default"].createElement(_UploadProgressIndicator.UploadProgressIndicator, {
      action: function action() {
        if (retryUpload) {
          retryUpload({
            newImage: item
          });
        }
      },
      active: item.state !== _utils.FileState.UPLOADED,
      type: item.state === _utils.FileState.UPLOADING ? _utils.ProgressIndicatorTypes.IN_PROGRESS : item.state === _utils.FileState.UPLOAD_FAILED ? _utils.ProgressIndicatorTypes.RETRY : undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }
    }, _react["default"].createElement(Upload, {
      resizeMode: "cover",
      source: {
        uri: item.file.uri || item.url
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    })), _react["default"].createElement(Dismiss, {
      onPress: function onPress() {
        if (removeImage) {
          removeImage(item.id);
        }
      },
      testID: "remove-image-upload-preview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }
    }, _react["default"].createElement(DismissImage, {
      source: closeRound,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }
    })));
  };

  return (imageUploads == null ? void 0 : imageUploads.length) > 0 ? _react["default"].createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.FlatList, {
    data: imageUploads,
    horizontal: true,
    keyExtractor: function keyExtractor(item) {
      return item.id;
    },
    renderItem: renderItem,
    style: {
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  })) : null;
};

exports.ImageUploadPreview = ImageUploadPreview;
//# sourceMappingURL=ImageUploadPreview.js.map