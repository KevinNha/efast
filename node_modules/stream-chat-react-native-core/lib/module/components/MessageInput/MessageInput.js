var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageInput = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _uniq = _interopRequireDefault(require("lodash/uniq"));

var _mimeTypes = require("mime-types");

var _streamChat = require("stream-chat");

var _ActionSheetAttachment = require("./ActionSheetAttachment");

var _AttachButton = require("./AttachButton");

var _FileUploadPreview = require("./FileUploadPreview");

var _ImageUploadPreview = require("./ImageUploadPreview");

var _SendButton = require("./SendButton");

var _useMessageDetailsForState = require("./hooks/useMessageDetailsForState");

var _generateRandomId = require("../../utils/generateRandomId");

var _AutoCompleteInput = require("../AutoCompleteInput/AutoCompleteInput");

var _IconSquare = require("../IconSquare");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _SuggestionsContext = require("../../contexts/suggestionsContext/SuggestionsContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _native = require("../../native");

var _styledComponents = require("../../styles/styledComponents");

var _utils = require("../../utils/utils");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageInput/MessageInput.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  flex-direction: row;\n  margin: 10px;\n  min-height: 46px;\n  padding-horizontal: 10px;\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  font-weight: bold;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  background-color: white;\n  padding-horizontal: 0px;\n  shadow-color: grey;\n  shadow-opacity: 0.5;\n  z-index: 100;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  margin-horizontal: 10px;\n  padding-top: ", "px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var iconClose = require("../../images/icons/icon_close.png");

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var imageUploads = _ref.imageUploads,
      theme = _ref.theme;
  return imageUploads && imageUploads.length ? theme.messageInput.container.conditionalPadding : 0;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageInput.container.css;
});

var EditingBoxContainer = _styledComponents.styled.View(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.messageInput.editingBoxContainer.css;
});

var EditingBoxHeader = _styledComponents.styled.View(_templateObject3(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.messageInput.editingBoxHeader.css;
});

var EditingBoxHeaderTitle = _styledComponents.styled.Text(_templateObject4(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.messageInput.editingBoxHeaderTitle.css;
});

var InputBoxContainer = (0, _styledComponents.styled)(_reactNative.View)(_templateObject5(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.messageInput.inputBoxContainer.css;
});

var MessageInput = function MessageInput(props) {
  var _props$ActionSheetAtt = props.ActionSheetAttachment,
      ActionSheetAttachment = _props$ActionSheetAtt === void 0 ? _ActionSheetAttachment.ActionSheetAttachment : _props$ActionSheetAtt,
      actionSheetStyles = props.actionSheetStyles,
      additionalTextInputProps = props.additionalTextInputProps,
      _props$AttachButton = props.AttachButton,
      AttachButton = _props$AttachButton === void 0 ? _AttachButton.AttachButton : _props$AttachButton,
      AttachmentFileIcon = props.AttachmentFileIcon,
      compressImageQuality = props.compressImageQuality,
      disabledProp = props.disabled,
      doDocUploadRequest = props.doDocUploadRequest,
      doImageUploadRequest = props.doImageUploadRequest,
      _props$FileUploadPrev = props.FileUploadPreview,
      FileUploadPreview = _props$FileUploadPrev === void 0 ? _FileUploadPreview.FileUploadPreview : _props$FileUploadPrev,
      _props$hasFilePicker = props.hasFilePicker,
      hasFilePicker = _props$hasFilePicker === void 0 ? true : _props$hasFilePicker,
      _props$hasImagePicker = props.hasImagePicker,
      hasImagePicker = _props$hasImagePicker === void 0 ? true : _props$hasImagePicker,
      _props$ImageUploadPre = props.ImageUploadPreview,
      ImageUploadPreview = _props$ImageUploadPre === void 0 ? _ImageUploadPreview.ImageUploadPreview : _props$ImageUploadPre,
      initialValue = props.initialValue,
      _props$autocompleteSu = props.autocompleteSuggestionsLimit,
      autocompleteSuggestionsLimit = _props$autocompleteSu === void 0 ? 10 : _props$autocompleteSu,
      Input = props.Input,
      _props$maxNumberOfFil = props.maxNumberOfFiles,
      maxNumberOfFiles = _props$maxNumberOfFil === void 0 ? 10 : _props$maxNumberOfFil,
      onChangeTextProp = props.onChangeText,
      parent_id = props.parent_id,
      _props$SendButton = props.SendButton,
      SendButton = _props$SendButton === void 0 ? _SendButton.SendButton : _props$SendButton,
      _props$sendImageAsync = props.sendImageAsync,
      sendImageAsync = _props$sendImageAsync === void 0 ? false : _props$sendImageAsync,
      setInputRef = props.setInputRef;

  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      channel = _useChannelContext.channel,
      _useChannelContext$di = _useChannelContext.disabled,
      disabledContext = _useChannelContext$di === void 0 ? false : _useChannelContext$di,
      members = _useChannelContext.members,
      watchers = _useChannelContext.watchers;

  var disabled = disabledProp || disabledContext;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      clearEditingState = _useMessagesContext.clearEditingState,
      editing = _useMessagesContext.editing,
      editMessage = _useMessagesContext.editMessage,
      sendMessageContext = _useMessagesContext.sendMessage;

  var _useSuggestionsContex = (0, _SuggestionsContext.useSuggestionsContext)(),
      setInputBoxContainerRef = _useSuggestionsContex.setInputBoxContainerRef;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  var attachActionSheet = (0, _react.useRef)(null);
  var inputBoxRef = (0, _react.useRef)(null);
  var sending = (0, _react.useRef)(false);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      asyncIds = _useState2[0],
      setAsyncIds = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      asyncUploads = _useState4[0],
      setAsyncUploads = _useState4[1];

  var _useMessageDetailsFor = (0, _useMessageDetailsForState.useMessageDetailsForState)(editing, initialValue),
      fileUploads = _useMessageDetailsFor.fileUploads,
      imageUploads = _useMessageDetailsFor.imageUploads,
      mentionedUsers = _useMessageDetailsFor.mentionedUsers,
      numberOfUploads = _useMessageDetailsFor.numberOfUploads,
      setFileUploads = _useMessageDetailsFor.setFileUploads,
      setImageUploads = _useMessageDetailsFor.setImageUploads,
      setMentionedUsers = _useMessageDetailsFor.setMentionedUsers,
      setNumberOfUploads = _useMessageDetailsFor.setNumberOfUploads,
      setText = _useMessageDetailsFor.setText,
      text = _useMessageDetailsFor.text;

  (0, _react.useEffect)(function () {
    if (editing && inputBoxRef.current) {
      inputBoxRef.current.focus();
    }

    if (!editing) {
      resetInput();
    }
  }, [editing]);

  var sendMessageAsync = function sendMessageAsync(id) {
    var image = asyncUploads[id];

    if (!image || image.state === _utils.FileState.UPLOAD_FAILED) {
      return;
    }

    if (image.state === _utils.FileState.UPLOADED) {
      var attachments = [{
        image_url: image.url,
        type: 'image'
      }];

      try {
        sendMessageContext({
          attachments: attachments,
          mentioned_users: [],
          parent_id: parent_id,
          text: ''
        });
        setAsyncIds(function (prevAsyncIds) {
          return prevAsyncIds.splice(prevAsyncIds.indexOf(id), 1);
        });
        setAsyncUploads(function (prevAsyncUploads) {
          delete prevAsyncUploads[id];
          return prevAsyncUploads;
        });
        setNumberOfUploads(function (prevNumberOfUploads) {
          return prevNumberOfUploads - 1;
        });
      } catch (_error) {
        console.log('Failed');
      }
    }
  };

  (0, _react.useEffect)(function () {
    if (Object.keys(asyncUploads).length) {
      sending.current = true;
      asyncIds.forEach(function (id) {
        return sendMessageAsync(id);
      });
      sending.current = false;
    }
  }, [asyncIds, asyncUploads, sending, sendMessageAsync]);

  var appendText = function appendText(newText) {
    setText(function (prevText) {
      return "" + prevText + newText;
    });
  };

  var closeAttachActionSheet = function closeAttachActionSheet() {
    if (attachActionSheet.current) {
      attachActionSheet.current.hide();
    }
  };

  var getMembers = function getMembers() {
    var result = [];

    if (members && Object.values(members).length) {
      Object.values(members).forEach(function (member) {
        return result.push(member.user);
      });
    }

    return result;
  };

  var getUsers = function getUsers() {
    var users = [].concat((0, _toConsumableArray2["default"])(getMembers()), (0, _toConsumableArray2["default"])(getWatchers()));
    var uniqueUsers = {};

    for (var _iterator = _createForOfIteratorHelperLoose(users), _step; !(_step = _iterator()).done;) {
      var user = _step.value;

      if (user && !uniqueUsers[user.id]) {
        uniqueUsers[user.id] = user;
      }
    }

    var usersArray = Object.values(uniqueUsers);
    return usersArray;
  };

  var getWatchers = function getWatchers() {
    var result = [];

    if (watchers && Object.values(watchers).length) {
      result.push.apply(result, (0, _toConsumableArray2["default"])(Object.values(watchers)));
    }

    return result;
  };

  var isValidMessage = function isValidMessage() {
    if (text) {
      return true;
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(imageUploads), _step2; !(_step2 = _iterator2()).done;) {
      var _image = _step2.value;

      if (!_image || _image.state === _utils.FileState.UPLOAD_FAILED) {
        continue;
      }

      if (_image.state === _utils.FileState.UPLOADING) {
        return false;
      }

      return true;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(fileUploads), _step3; !(_step3 = _iterator3()).done;) {
      var _file = _step3.value;

      if (!_file || _file.state === _utils.FileState.UPLOAD_FAILED) {
        continue;
      }

      if (_file.state === _utils.FileState.UPLOADING) {
        return false;
      }

      return true;
    }

    return false;
  };

  var onChangeText = function onChangeText(newText) {
    if (sending.current) {
      return;
    }

    setText(newText);

    if (newText && channel) {
      (0, _streamChat.logChatPromiseExecution)(channel.keystroke(), 'start typing event');
    }

    if (onChangeTextProp) {
      onChangeTextProp(newText);
    }
  };

  var onSelectItem = function onSelectItem(item) {
    setMentionedUsers(function (prevMentionedUsers) {
      return [].concat((0, _toConsumableArray2["default"])(prevMentionedUsers), [item.id]);
    });
  };

  var pickFile = function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var result;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(maxNumberOfFiles && numberOfUploads >= maxNumberOfFiles)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return (0, _native.pickDocument)({
                maxNumberOfFiles: maxNumberOfFiles - numberOfUploads
              });

            case 4:
              result = _context.sent;

              if (!result.cancelled && result.docs) {
                result.docs.forEach(function (doc) {
                  var mimeType = (0, _mimeTypes.lookup)(doc.name);

                  if (mimeType && (mimeType == null ? void 0 : mimeType.startsWith('image/'))) {
                    uploadNewImage(doc);
                  } else {
                    uploadNewFile(doc);
                  }
                });
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function pickFile() {
      return _ref7.apply(this, arguments);
    };
  }();

  var pickImage = function () {
    var _ref8 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
      var result;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(maxNumberOfFiles && numberOfUploads >= maxNumberOfFiles)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.next = 4;
              return (0, _native.pickImage)({
                compressImageQuality: compressImageQuality,
                maxNumberOfFiles: maxNumberOfFiles - numberOfUploads
              });

            case 4:
              result = _context2.sent;

              if (!result.cancelled && result.images) {
                result.images.forEach(function (image) {
                  uploadNewImage(image);
                });
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function pickImage() {
      return _ref8.apply(this, arguments);
    };
  }();

  var removeFile = function removeFile(id) {
    if (fileUploads.some(function (file) {
      return file.id === id;
    })) {
      setFileUploads(function (prevFileUploads) {
        return prevFileUploads.filter(function (file) {
          return file.id !== id;
        });
      });
      setNumberOfUploads(function (prevNumberOfUploads) {
        return prevNumberOfUploads - 1;
      });
    }
  };

  var removeImage = function removeImage(id) {
    if (imageUploads.some(function (image) {
      return image.id === id;
    })) {
      setImageUploads(function (prevImageUploads) {
        return prevImageUploads.filter(function (image) {
          return image.id !== id;
        });
      });
      setNumberOfUploads(function (prevNumberOfUploads) {
        return prevNumberOfUploads - 1;
      });
    }
  };

  var handleOnPress = function () {
    var _ref9 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(maxNumberOfFiles && numberOfUploads >= maxNumberOfFiles || numberOfUploads >= 10)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              if (!hasImagePicker) {
                _context3.next = 12;
                break;
              }

              if (!hasFilePicker) {
                _context3.next = 9;
                break;
              }

              _context3.next = 6;
              return _reactNative.Keyboard.dismiss();

            case 6:
              if (attachActionSheet == null ? void 0 : attachActionSheet.current) {
                attachActionSheet.current.show();
              }

              _context3.next = 10;
              break;

            case 9:
              pickImage();

            case 10:
              _context3.next = 13;
              break;

            case 12:
              if (hasFilePicker) {
                pickFile();
              }

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleOnPress() {
      return _ref9.apply(this, arguments);
    };
  }();

  var renderInputContainer = function renderInputContainer() {
    var additionalTextInputContainerProps = _objectSpread({
      editable: disabled ? false : undefined
    }, additionalTextInputProps);

    var triggerSettings = channel ? (0, _utils.ACITriggerSettings)({
      autocompleteSuggestionsLimit: autocompleteSuggestionsLimit,
      channel: channel,
      onMentionSelectItem: onSelectItem,
      t: t
    }) : {};
    return _react["default"].createElement(Container, {
      imageUploads: imageUploads,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 7
      }
    }, fileUploads && _react["default"].createElement(FileUploadPreview, {
      AttachmentFileIcon: AttachmentFileIcon,
      fileUploads: fileUploads,
      removeFile: removeFile,
      retryUpload: uploadFile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634,
        columnNumber: 11
      }
    }), imageUploads && _react["default"].createElement(ImageUploadPreview, {
      imageUploads: imageUploads,
      removeImage: removeImage,
      retryUpload: uploadImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 11
      }
    }), _react["default"].createElement(ActionSheetAttachment, {
      closeAttachActionSheet: closeAttachActionSheet,
      pickFile: pickFile,
      pickImage: pickImage,
      setAttachActionSheetRef: setAttachActionSheetRef,
      styles: actionSheetStyles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653,
        columnNumber: 9
      }
    }), _react["default"].createElement(InputBoxContainer, {
      ref: setInputBoxContainerRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660,
        columnNumber: 9
      }
    }, Input ? _react["default"].createElement(Input, {
      _pickFile: pickFile,
      _pickImage: pickImage,
      _removeFile: removeFile,
      _removeImage: removeImage,
      _uploadFile: uploadFile,
      _uploadImage: uploadImage,
      additionalTextInputProps: additionalTextInputContainerProps,
      appendText: appendText,
      closeAttachActionSheet: closeAttachActionSheet,
      disabled: disabled,
      getUsers: getUsers,
      handleOnPress: handleOnPress,
      isValidMessage: isValidMessage,
      onChange: onChangeText,
      onSelectItem: onSelectItem,
      sendMessage: sendMessage,
      setInputBoxContainerRef: setInputBoxContainerRef,
      setInputBoxRef: setInputBoxRef,
      triggerSettings: triggerSettings,
      updateMessage: updateMessage,
      uploadNewFile: uploadNewFile,
      uploadNewImage: uploadNewImage,
      value: text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 662,
        columnNumber: 13
      }
    }) : _react["default"].createElement(_react["default"].Fragment, null, (hasImagePicker || hasFilePicker) && _react["default"].createElement(AttachButton, {
      disabled: disabled,
      handleOnPress: handleOnPress,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 690,
        columnNumber: 17
      }
    }), _react["default"].createElement(_AutoCompleteInput.AutoCompleteInput, {
      additionalTextInputProps: additionalTextInputProps || {},
      onChange: onChangeText,
      setInputBoxRef: setInputBoxRef,
      triggerSettings: triggerSettings,
      value: text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 15
      }
    }), _react["default"].createElement(SendButton, {
      disabled: disabled || sending.current || !isValidMessage(),
      sendMessage: sendMessage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 702,
        columnNumber: 15
      }
    }))));
  };

  var resetInput = function resetInput() {
    var pendingAttachments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    setFileUploads([]);
    setImageUploads([]);
    setMentionedUsers([]);
    setNumberOfUploads(function (prevNumberOfUploads) {
      return prevNumberOfUploads - ((pendingAttachments == null ? void 0 : pendingAttachments.length) || 0);
    });
    setText('');
  };

  var sendMessage = function () {
    var _ref10 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
      var prevText, attachments, _loop, _iterator4, _step4, _image2, _ret, _iterator5, _step5, _file2, updatedMessage, updateMessagePromise;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!sending.current) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              sending.current = true;
              prevText = text;
              _context4.next = 6;
              return setText('');

            case 6:
              if (inputBoxRef.current) {
                inputBoxRef.current.clear();
              }

              attachments = [];

              _loop = function _loop(_image2) {
                if (!_image2 || _image2.state === _utils.FileState.UPLOAD_FAILED) {
                  return "continue";
                }

                if (_image2.state === _utils.FileState.UPLOADING) {
                  if (sendImageAsync) {
                    setAsyncIds(function (prevAsyncIds) {
                      return [].concat((0, _toConsumableArray2["default"])(prevAsyncIds), [_image2.id]);
                    });
                  } else {
                    sending.current = false;
                    return {
                      v: setText(prevText)
                    };
                  }
                }

                if (_image2.state === _utils.FileState.UPLOADED || _image2.state === _utils.FileState.FINISHED) {
                  attachments.push({
                    fallback: _image2.file.name,
                    image_url: _image2.url,
                    type: 'image'
                  });
                }
              };

              _iterator4 = _createForOfIteratorHelperLoose(imageUploads);

            case 10:
              if ((_step4 = _iterator4()).done) {
                _context4.next = 19;
                break;
              }

              _image2 = _step4.value;
              _ret = _loop(_image2);

              if (!(_ret === "continue")) {
                _context4.next = 15;
                break;
              }

              return _context4.abrupt("continue", 17);

            case 15:
              if (!((0, _typeof2["default"])(_ret) === "object")) {
                _context4.next = 17;
                break;
              }

              return _context4.abrupt("return", _ret.v);

            case 17:
              _context4.next = 10;
              break;

            case 19:
              _iterator5 = _createForOfIteratorHelperLoose(fileUploads);

            case 20:
              if ((_step5 = _iterator5()).done) {
                _context4.next = 30;
                break;
              }

              _file2 = _step5.value;

              if (!(!_file2 || _file2.state === _utils.FileState.UPLOAD_FAILED)) {
                _context4.next = 24;
                break;
              }

              return _context4.abrupt("continue", 28);

            case 24:
              if (!(_file2.state === _utils.FileState.UPLOADING)) {
                _context4.next = 27;
                break;
              }

              sending.current = false;
              return _context4.abrupt("return");

            case 27:
              if (_file2.state === _utils.FileState.UPLOADED || _file2.state === _utils.FileState.FINISHED) {
                attachments.push({
                  asset_url: _file2.url,
                  file_size: _file2.file.size,
                  mime_type: _file2.file.type,
                  title: _file2.file.name,
                  type: 'file'
                });
              }

            case 28:
              _context4.next = 20;
              break;

            case 30:
              if (!(!prevText && attachments.length === 0)) {
                _context4.next = 33;
                break;
              }

              sending.current = false;
              return _context4.abrupt("return");

            case 33:
              if (editing && !(0, _MessagesContext.isEditingBoolean)(editing)) {
                updatedMessage = _objectSpread(_objectSpread({}, editing), {}, {
                  attachments: attachments,
                  mentioned_users: mentionedUsers,
                  text: prevText
                });
                clearEditingState();
                updateMessagePromise = editMessage(updatedMessage).then(clearEditingState);
                resetInput(attachments);
                (0, _streamChat.logChatPromiseExecution)(updateMessagePromise, 'update message');
                sending.current = false;
              } else {
                try {
                  sendMessageContext({
                    attachments: attachments,
                    mentioned_users: (0, _uniq["default"])(mentionedUsers),
                    parent_id: parent_id,
                    text: prevText
                  });
                  sending.current = false;
                  resetInput(attachments);
                } catch (_error) {
                  sending.current = false;
                  setText(prevText);
                  console.log('Failed to send message');
                }
              }

            case 34:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function sendMessage() {
      return _ref10.apply(this, arguments);
    };
  }();

  var setAttachActionSheetRef = function setAttachActionSheetRef(ref) {
    attachActionSheet.current = ref;
  };

  var setInputBoxRef = function setInputBoxRef(ref) {
    inputBoxRef.current = ref;

    if (setInputRef) {
      setInputRef(ref);
    }
  };

  var updateMessage = function () {
    var _ref11 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;

              if ((0, _MessagesContext.isEditingBoolean)(editing)) {
                _context5.next = 4;
                break;
              }

              _context5.next = 4;
              return client.updateMessage(_objectSpread(_objectSpread({}, editing), {}, {
                text: text
              }));

            case 4:
              resetInput();
              clearEditingState();
              _context5.next = 11;
              break;

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 8]]);
    }));

    return function updateMessage() {
      return _ref11.apply(this, arguments);
    };
  }();

  var uploadFile = function () {
    var _ref13 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6(_ref12) {
      var newFile, file, id, response;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              newFile = _ref12.newFile;

              if (newFile) {
                _context6.next = 3;
                break;
              }

              return _context6.abrupt("return");

            case 3:
              file = newFile.file, id = newFile.id;
              _context6.next = 6;
              return setFileUploads(function (prevFileUploads) {
                return prevFileUploads.map(function (fileUpload) {
                  if (fileUpload.id === id) {
                    return _objectSpread(_objectSpread({}, fileUpload), {}, {
                      state: _utils.FileState.UPLOADING
                    });
                  }

                  return fileUpload;
                });
              });

            case 6:
              response = {};
              _context6.prev = 7;

              if (!doDocUploadRequest) {
                _context6.next = 14;
                break;
              }

              _context6.next = 11;
              return doDocUploadRequest(file, channel);

            case 11:
              response = _context6.sent;
              _context6.next = 18;
              break;

            case 14:
              if (!(channel && file.uri)) {
                _context6.next = 18;
                break;
              }

              _context6.next = 17;
              return channel.sendFile(file.uri, file.name, file.type);

            case 17:
              response = _context6.sent;

            case 18:
              _context6.next = 25;
              break;

            case 20:
              _context6.prev = 20;
              _context6.t0 = _context6["catch"](7);
              console.warn(_context6.t0);

              if (!newFile) {
                setNumberOfUploads(function (prevNumberOfUploads) {
                  return prevNumberOfUploads - 1;
                });
              } else {
                setFileUploads(function (prevFileUploads) {
                  return prevFileUploads.map(function (fileUpload) {
                    if (fileUpload.id === id) {
                      return _objectSpread(_objectSpread({}, fileUpload), {}, {
                        state: _utils.FileState.UPLOAD_FAILED
                      });
                    }

                    return fileUpload;
                  });
                });
                setNumberOfUploads(function (prevNumberOfUploads) {
                  return prevNumberOfUploads - 1;
                });
              }

              return _context6.abrupt("return");

            case 25:
              setFileUploads(function (prevFileUploads) {
                return prevFileUploads.map(function (fileUpload) {
                  if (fileUpload.id === id) {
                    return _objectSpread(_objectSpread({}, fileUpload), {}, {
                      state: _utils.FileState.UPLOADED,
                      url: response.file
                    });
                  }

                  return fileUpload;
                });
              });

            case 26:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[7, 20]]);
    }));

    return function uploadFile(_x) {
      return _ref13.apply(this, arguments);
    };
  }();

  var uploadImage = function () {
    var _ref15 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7(_ref14) {
      var newImage, _ref16, file, id, response, filename, contentType;

      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              newImage = _ref14.newImage;
              _ref16 = newImage || {}, file = _ref16.file, id = _ref16.id;

              if (file) {
                _context7.next = 4;
                break;
              }

              return _context7.abrupt("return");

            case 4:
              response = {};
              filename = (file.name || file.uri || '').replace(/^(file:\/\/|content:\/\/)/, '');
              contentType = (0, _mimeTypes.lookup)(filename) || 'multipart/form-data';
              _context7.prev = 7;

              if (!doImageUploadRequest) {
                _context7.next = 14;
                break;
              }

              _context7.next = 11;
              return doImageUploadRequest(file, channel);

            case 11:
              response = _context7.sent;
              _context7.next = 22;
              break;

            case 14:
              if (!(file.uri && channel)) {
                _context7.next = 22;
                break;
              }

              if (!sendImageAsync) {
                _context7.next = 19;
                break;
              }

              channel.sendImage(file.uri, undefined, contentType).then(function (res) {
                if (asyncIds.includes(id)) {
                  setAsyncUploads(function (prevAsyncUploads) {
                    prevAsyncUploads[id] = _objectSpread(_objectSpread({}, prevAsyncUploads[id]), {}, {
                      state: _utils.FileState.UPLOADED,
                      url: res.file
                    });
                    return prevAsyncUploads;
                  });
                } else {
                  setImageUploads(function (prevImageUploads) {
                    return prevImageUploads.map(function (imageUpload) {
                      if (imageUpload.id === id) {
                        return _objectSpread(_objectSpread({}, imageUpload), {}, {
                          state: _utils.FileState.UPLOADED,
                          url: res.file
                        });
                      }

                      return imageUpload;
                    });
                  });
                }
              });
              _context7.next = 22;
              break;

            case 19:
              _context7.next = 21;
              return channel.sendImage(file.uri, undefined, contentType);

            case 21:
              response = _context7.sent;

            case 22:
              if (Object.keys(response).length) {
                setImageUploads(function (prevImageUploads) {
                  return prevImageUploads.map(function (imageUpload) {
                    if (imageUpload.id === id) {
                      return _objectSpread(_objectSpread({}, imageUpload), {}, {
                        state: _utils.FileState.UPLOADED,
                        url: response.file
                      });
                    }

                    return imageUpload;
                  });
                });
              }

              _context7.next = 31;
              break;

            case 25:
              _context7.prev = 25;
              _context7.t0 = _context7["catch"](7);
              console.warn(_context7.t0);

              if (newImage) {
                setImageUploads(function (prevImageUploads) {
                  return prevImageUploads.map(function (imageUpload) {
                    if (imageUpload.id === id) {
                      return _objectSpread(_objectSpread({}, imageUpload), {}, {
                        state: _utils.FileState.UPLOAD_FAILED
                      });
                    }

                    return imageUpload;
                  });
                });
              }

              setNumberOfUploads(function (prevNumberOfUploads) {
                return prevNumberOfUploads - 1;
              });
              return _context7.abrupt("return");

            case 31:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[7, 25]]);
    }));

    return function uploadImage(_x2) {
      return _ref15.apply(this, arguments);
    };
  }();

  var uploadNewFile = function () {
    var _ref17 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8(file) {
      var id, mimeType, newFile;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              id = (0, _generateRandomId.generateRandomId)();
              mimeType = (0, _mimeTypes.lookup)(file.name);
              newFile = {
                file: _objectSpread(_objectSpread({}, file), {}, {
                  type: mimeType || (file == null ? void 0 : file.type)
                }),
                id: id,
                state: _utils.FileState.UPLOADING
              };
              _context8.next = 5;
              return Promise.all([setFileUploads(function (prevFileUploads) {
                return prevFileUploads.concat([newFile]);
              }), setNumberOfUploads(function (prevNumberOfUploads) {
                return prevNumberOfUploads + 1;
              })]);

            case 5:
              uploadFile({
                newFile: newFile
              });

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function uploadNewFile(_x3) {
      return _ref17.apply(this, arguments);
    };
  }();

  var uploadNewImage = function () {
    var _ref18 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9(image) {
      var id, newImage;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              id = (0, _generateRandomId.generateRandomId)();
              newImage = {
                file: image,
                id: id,
                state: _utils.FileState.UPLOADING
              };
              _context9.next = 4;
              return Promise.all([setImageUploads(function (prevImageUploads) {
                return prevImageUploads.concat([newImage]);
              }), setNumberOfUploads(function (prevNumberOfUploads) {
                return prevNumberOfUploads + 1;
              })]);

            case 4:
              uploadImage({
                newImage: newImage
              });

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function uploadNewImage(_x4) {
      return _ref18.apply(this, arguments);
    };
  }();

  return editing ? _react["default"].createElement(EditingBoxContainer, {
    testID: "editing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 5
    }
  }, _react["default"].createElement(EditingBoxHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044,
      columnNumber: 7
    }
  }, _react["default"].createElement(EditingBoxHeaderTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045,
      columnNumber: 9
    }
  }, t('Editing Message')), _react["default"].createElement(_IconSquare.IconSquare, {
    icon: iconClose,
    onPress: function onPress() {
      resetInput();
      clearEditingState();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1046,
      columnNumber: 9
    }
  })), renderInputContainer()) : renderInputContainer();
};

exports.MessageInput = MessageInput;
//# sourceMappingURL=MessageInput.js.map