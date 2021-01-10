var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gallery = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeImageZoomViewer = _interopRequireDefault(require("react-native-image-zoom-viewer"));

var _seamlessImmutable = require("seamless-immutable");

var _CloseButton = require("../CloseButton/CloseButton");

var _MessageContentContext = require("../../contexts/messageContentContext/MessageContentContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../styles/styledComponents");

var _utils = require("../../utils/utils");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Attachment/Gallery.tsx";

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  border-radius: 20px;\n  height: 30px;\n  justify-content: center;\n  margin-right: 32px;\n  margin-top: 32px;\n  width: 30px;\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  flex-direction: row;\n  justify-content: flex-end;\n  position: absolute;\n  width: 100%;\n  z-index: 1000;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: ", "px;\n  width: ", "px;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  height: ", "px;\n  overflow: hidden;\n  width: ", "px;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n  height: 200px;\n  overflow: hidden;\n  width: ", "px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Single = _styledComponents.styled.TouchableOpacity(_templateObject(), function (_ref) {
  var alignment = _ref.alignment;
  return alignment === 'right' ? 16 : 2;
}, function (_ref2) {
  var alignment = _ref2.alignment;
  return alignment === 'left' ? 16 : 2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.message.gallery.width;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.message.gallery.single.css;
});

var GalleryContainer = _styledComponents.styled.View(_templateObject2(), function (_ref5) {
  var alignment = _ref5.alignment;
  return alignment === 'right' ? 16 : 2;
}, function (_ref6) {
  var alignment = _ref6.alignment;
  return alignment === 'left' ? 16 : 2;
}, function (_ref7) {
  var length = _ref7.length,
      theme = _ref7.theme;
  return length && length >= 4 ? theme.message.gallery.doubleSize : length === 3 ? theme.message.gallery.halfSize : theme.message.gallery.size;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.message.gallery.width;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.message.gallery.galleryContainer.css;
});

var ImageContainer = _styledComponents.styled.TouchableOpacity(_templateObject3(), function (_ref10) {
  var length = _ref10.length,
      theme = _ref10.theme;
  return length !== 3 ? theme.message.gallery.size : theme.message.gallery.halfSize;
}, function (_ref11) {
  var length = _ref11.length,
      theme = _ref11.theme;
  return length !== 3 ? theme.message.gallery.size : theme.message.gallery.halfSize;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.message.gallery.imageContainer.css;
});

var HeaderContainer = _styledComponents.styled.View(_templateObject4(), function (_ref13) {
  var theme = _ref13.theme;
  return theme.message.gallery.header.container.css;
});

var HeaderButton = _styledComponents.styled.TouchableOpacity(_templateObject5(), function (_ref14) {
  var theme = _ref14.theme;
  return theme.message.gallery.header.button.css;
});

var GalleryHeader = function GalleryHeader(_ref15) {
  var handleDismiss = _ref15.handleDismiss;
  (0, _react.useEffect)(function () {
    _reactNative.StatusBar.setHidden(true);

    return function () {
      return _reactNative.StatusBar.setHidden(false);
    };
  }, []);
  return _react["default"].createElement(HeaderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, _react["default"].createElement(HeaderButton, {
    onPress: handleDismiss,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, _react["default"].createElement(_CloseButton.CloseButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  })));
};

var Gallery = function Gallery(props) {
  var alignment = props.alignment,
      images = props.images;

  var _useMessageContentCon = (0, _MessageContentContext.useMessageContentContext)(),
      additionalTouchableProps = _useMessageContentCon.additionalTouchableProps,
      onLongPress = _useMessageContentCon.onLongPress;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      viewerModalImageIndex = _useState2[0],
      setViewerModalImageIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      viewerModalOpen = _useState4[0],
      setViewerModalOpen = _useState4[1];

  if (!(images == null ? void 0 : images.length)) return null;
  var immutableGalleryImages = images.reduce(function (returnArray, currentImage) {
    var url = currentImage.image_url || currentImage.thumb_url;

    if (url) {
      returnArray.push({
        url: (0, _utils.makeImageCompatibleUrl)(url)
      });
    }

    return returnArray;
  }, []);
  var galleryImages = [];
  immutableGalleryImages.forEach(function (image) {
    var galleryImage = (0, _seamlessImmutable.isImmutable)(image) ? image.asMutable() : image;
    galleryImages.push(galleryImage);
  });

  if (galleryImages.length === 1) {
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Single, (0, _extends2["default"])({
      alignment: alignment,
      onLongPress: onLongPress,
      onPress: function onPress() {
        return setViewerModalOpen(true);
      },
      testID: "image-attachment-single"
    }, additionalTouchableProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }
    }), _react["default"].createElement(_reactNative.Image, {
      resizeMode: "cover",
      source: {
        uri: galleryImages[0].url
      },
      style: {
        flex: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 11
      }
    })), viewerModalOpen && _react["default"].createElement(_reactNative.Modal, {
      onRequestClose: function onRequestClose() {
        return setViewerModalOpen(false);
      },
      transparent: true,
      visible: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 11
      }
    }, _react["default"].createElement(_reactNativeImageZoomViewer["default"], {
      enableSwipeDown: true,
      imageUrls: galleryImages,
      onCancel: function onCancel() {
        return setViewerModalOpen(false);
      },
      renderHeader: function renderHeader() {
        return _react["default"].createElement(GalleryHeader, {
          handleDismiss: function handleDismiss() {
            return setViewerModalOpen(false);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 17
          }
        });
      },
      saveToLocalByLongPress: false,
      useNativeDriver: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }
    })));
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(GalleryContainer, {
    alignment: alignment,
    length: galleryImages.length,
    testID: "image-multiple-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, galleryImages.slice(0, 4).map(function (image, i) {
    return _react["default"].createElement(ImageContainer, (0, _extends2["default"])({
      activeOpacity: 0.8,
      key: "gallery-item-" + i,
      length: galleryImages.length,
      onLongPress: onLongPress,
      onPress: function onPress() {
        setViewerModalOpen(true);
        setViewerModalImageIndex(i);
      },
      testID: "image-multiple"
    }, additionalTouchableProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 11
      }
    }), i === 3 && galleryImages.length > 4 ? _react["default"].createElement(_reactNative.View, {
      style: {
        flex: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 15
      }
    }, _react["default"].createElement(_reactNative.Image, {
      resizeMode: "cover",
      source: {
        uri: galleryImages[i].url
      },
      style: {
        flex: 1,
        opacity: 0.5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }
    }), _react["default"].createElement(_reactNative.View, {
      style: [_reactNative.StyleSheet.absoluteFillObject, {
        alignItems: 'center',
        justifyContent: 'center'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 17
      }
    }, _react["default"].createElement(_reactNative.View, {
      style: {
        alignItems: 'center',
        backgroundColor: '#000000B0',
        borderRadius: 20,
        height: '40%',
        justifyContent: 'center',
        width: '90%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 19
      }
    }, _react["default"].createElement(_reactNative.Text, {
      style: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 21
      }
    }, "+", t('{{ imageCount }} more', {
      imageCount: galleryImages.length - i
    }))))) : _react["default"].createElement(_reactNative.Image, {
      resizeMode: "cover",
      source: {
        uri: image == null ? void 0 : image.url
      },
      style: {
        flex: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 15
      }
    }));
  })), viewerModalOpen && _react["default"].createElement(_reactNative.Modal, {
    onRequestClose: function onRequestClose() {
      return setViewerModalOpen(false);
    },
    transparent: true,
    visible: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNativeImageZoomViewer["default"], {
    enableSwipeDown: true,
    imageUrls: galleryImages,
    index: viewerModalImageIndex,
    onCancel: function onCancel() {
      return setViewerModalOpen(false);
    },
    renderHeader: function renderHeader() {
      return _react["default"].createElement(GalleryHeader, {
        handleDismiss: function handleDismiss() {
          return setViewerModalOpen(false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 15
        }
      });
    },
    saveToLocalByLongPress: false,
    useNativeDriver: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  })));
};

exports.Gallery = Gallery;
//# sourceMappingURL=Gallery.js.map