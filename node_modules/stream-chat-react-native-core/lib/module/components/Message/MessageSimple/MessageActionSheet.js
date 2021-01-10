var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageActionSheet = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactNativeActionsheet = require("react-native-actionsheet");

var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../../styles/styledComponents");

var _utils = require("../../../utils/utils");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Message/MessageSimple/MessageActionSheet.tsx";

function _templateObject6() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: #757575;\n  font-size: 14px;\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  flex: 1;\n  justify-content: center;\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: red;\n  font-size: 18px;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  height: 50px;\n  justify-content: center;\n  width: 100%;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: #388cea;\n  font-size: 18px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: #fff;\n  height: 50px;\n  justify-content: center;\n  width: 100%;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ActionSheetButtonContainer = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.message.actionSheet.buttonContainer.css;
});

var ActionSheetButtonText = _styledComponents.styled.Text(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.message.actionSheet.buttonText.css;
});

var ActionSheetCancelButtonContainer = _styledComponents.styled.View(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.message.actionSheet.cancelButtonContainer.css;
});

var ActionSheetCancelButtonText = _styledComponents.styled.Text(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.message.actionSheet.cancelButtonText.css;
});

var ActionSheetTitleContainer = _styledComponents.styled.View(_templateObject5(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.message.actionSheet.titleContainer.css;
});

var ActionSheetTitleText = _styledComponents.styled.Text(_templateObject6(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.message.actionSheet.titleText.css;
});

var MessageActionSheet = _react["default"].forwardRef(function (props, actionSheetRef) {
  var actionSheetStyles = props.actionSheetStyles,
      canDeleteMessage = props.canDeleteMessage,
      canEditMessage = props.canEditMessage,
      handleDelete = props.handleDelete,
      handleEdit = props.handleEdit,
      _props$messageActions = props.messageActions,
      messageActions = _props$messageActions === void 0 ? Object.keys(_utils.MESSAGE_ACTIONS) : _props$messageActions,
      openReactionPicker = props.openReactionPicker,
      openThread = props.openThread,
      reactionsEnabled = props.reactionsEnabled,
      repliesEnabled = props.repliesEnabled,
      setActionSheetVisible = props.setActionSheetVisible,
      threadList = props.threadList;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  var _useState = (0, _react.useState)([{
    id: 'cancel',
    title: 'Cancel'
  }]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  (0, _react.useEffect)(function () {
    var newOptions = [];

    if (Array.isArray(messageActions)) {
      if (reactionsEnabled && messageActions.indexOf(_utils.MESSAGE_ACTIONS.reactions) > -1) {
        newOptions.splice(1, 0, {
          id: _utils.MESSAGE_ACTIONS.reactions,
          title: t('Add Reaction')
        });
      }

      if (repliesEnabled && messageActions.indexOf(_utils.MESSAGE_ACTIONS.reply) > -1 && !threadList) {
        newOptions.splice(1, 0, {
          id: _utils.MESSAGE_ACTIONS.reply,
          title: t('Reply')
        });
      }

      if (messageActions.indexOf(_utils.MESSAGE_ACTIONS.edit) > -1 && (canEditMessage == null ? void 0 : canEditMessage())) {
        newOptions.splice(1, 0, {
          id: _utils.MESSAGE_ACTIONS.edit,
          title: t('Edit Message')
        });
      }

      if (messageActions.indexOf(_utils.MESSAGE_ACTIONS["delete"]) > -1 && (canDeleteMessage == null ? void 0 : canDeleteMessage())) {
        newOptions.splice(1, 0, {
          id: _utils.MESSAGE_ACTIONS["delete"],
          title: t('Delete Message')
        });
      }
    }

    setOptions(function (prevOptions) {
      return [].concat((0, _toConsumableArray2["default"])(prevOptions), newOptions);
    });
  }, []);

  var onActionPress = function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(action) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = action;
              _context.next = _context.t0 === _utils.MESSAGE_ACTIONS.edit ? 3 : _context.t0 === _utils.MESSAGE_ACTIONS["delete"] ? 5 : _context.t0 === _utils.MESSAGE_ACTIONS.reply ? 8 : _context.t0 === _utils.MESSAGE_ACTIONS.reactions ? 10 : 12;
              break;

            case 3:
              handleEdit();
              return _context.abrupt("break", 13);

            case 5:
              _context.next = 7;
              return handleDelete();

            case 7:
              return _context.abrupt("break", 13);

            case 8:
              openThread();
              return _context.abrupt("break", 13);

            case 10:
              openReactionPicker();
              return _context.abrupt("break", 13);

            case 12:
              return _context.abrupt("break", 13);

            case 13:
              setActionSheetVisible(false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onActionPress(_x) {
      return _ref7.apply(this, arguments);
    };
  }();

  return _react["default"].createElement(_reactNativeActionsheet.ActionSheetCustom, {
    cancelButtonIndex: 0,
    destructiveButtonIndex: 0,
    onPress: function onPress(index) {
      return onActionPress(options[index].id);
    },
    options: options.map(function (option, i) {
      if (i === 0) {
        return _react["default"].createElement(ActionSheetCancelButtonContainer, {
          testID: "cancel-button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 15
          }
        }, _react["default"].createElement(ActionSheetCancelButtonText, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 17
          }
        }, t('Cancel')));
      }

      return _react["default"].createElement(ActionSheetButtonContainer, {
        key: option.title,
        testID: "action-sheet-item-" + option.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 13
        }
      }, _react["default"].createElement(ActionSheetButtonText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 15
        }
      }, option.title));
    }),
    ref: actionSheetRef,
    styles: actionSheetStyles,
    title: _react["default"].createElement(ActionSheetTitleContainer, {
      testID: "action-sheet-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 11
      }
    }, _react["default"].createElement(ActionSheetTitleText, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 13
      }
    }, t('Choose an action'))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }
  });
});

exports.MessageActionSheet = MessageActionSheet;
MessageActionSheet.displayName = 'messageActionSheet';
//# sourceMappingURL=MessageActionSheet.js.map