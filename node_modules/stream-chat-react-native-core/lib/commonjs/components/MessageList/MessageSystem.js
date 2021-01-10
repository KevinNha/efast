var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageSystem = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageList/MessageSystem.tsx";

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  flex: 3;\n  margin-top: 10px;\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  background-color: ", ";\n  flex: 1;\n  height: 0.5px;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 10px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.messageList.messageSystem.container.css;
});

var DateText = _styledComponents.styled.Text(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageList.messageSystem.dateText.css;
});

var Line = _styledComponents.styled.View(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.light;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.messageList.messageSystem.line.css;
});

var Text = _styledComponents.styled.Text(_templateObject4(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.messageList.messageSystem.text.css;
});

var TextContainer = _styledComponents.styled.View(_templateObject5(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.messageList.messageSystem.textContainer.css;
});

var MessageSystem = function MessageSystem(props) {
  var _message$text;

  var formatDate = props.formatDate,
      message = props.message;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      tDateTimeParser = _useTranslationContex.tDateTimeParser;

  var createdAt = message.created_at;
  var parsedDate = tDateTimeParser(createdAt);
  var date = formatDate && createdAt ? formatDate(createdAt) : parsedDate && (0, _TranslationContext.isDayOrMoment)(parsedDate) ? parsedDate.calendar().toUpperCase() : parsedDate;
  return _react["default"].createElement(Container, {
    testID: "message-system",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, _react["default"].createElement(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }), _react["default"].createElement(TextContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, _react["default"].createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, ((_message$text = message.text) == null ? void 0 : _message$text.toUpperCase()) || ''), _react["default"].createElement(DateText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, date)), _react["default"].createElement(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }));
};

exports.MessageSystem = MessageSystem;
//# sourceMappingURL=MessageSystem.js.map