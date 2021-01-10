var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentActions = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Attachment/AttachmentActions.tsx";

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: ", ";\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 20px;\n  border-width: 1px;\n  padding-horizontal: 10px;\n  padding-vertical: 5px;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 5px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.message.actions.container.css;
});

var ActionButton = _styledComponents.styled.TouchableOpacity(_templateObject2(), function (_ref2) {
  var buttonStyle = _ref2.buttonStyle,
      theme = _ref2.theme;
  return buttonStyle === 'primary' ? theme.message.actions.button.primaryBackgroundColor : theme.message.actions.button.defaultBackgroundColor;
}, function (_ref3) {
  var buttonStyle = _ref3.buttonStyle,
      theme = _ref3.theme;
  return buttonStyle === 'primary' ? theme.message.actions.button.primaryBorderColor : theme.message.actions.button.defaultBorderColor;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.message.actions.button.css;
});

var ActionButtonText = _styledComponents.styled.Text(_templateObject3(), function (_ref5) {
  var buttonStyle = _ref5.buttonStyle,
      theme = _ref5.theme;
  return buttonStyle === 'primary' ? theme.message.actions.buttonText.primaryColor : theme.message.actions.buttonText.defaultColor;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.message.actions.buttonText.css;
});

var AttachmentActions = function AttachmentActions(props) {
  var actionHandler = props.actionHandler,
      actions = props.actions;
  return _react["default"].createElement(Container, {
    testID: "attachment-actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, actions == null ? void 0 : actions.map(function (action, index) {
    return _react["default"].createElement(ActionButton, {
      buttonStyle: action.style,
      key: index + "-" + action.value,
      onPress: function onPress() {
        if (action.name && action.value && actionHandler) {
          actionHandler(action.name, action.value);
        }
      },
      testID: "attachment-actions-button-" + action.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, _react["default"].createElement(ActionButtonText, {
      buttonStyle: action.style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }, action.text));
  }));
};

exports.AttachmentActions = AttachmentActions;
//# sourceMappingURL=AttachmentActions.js.map