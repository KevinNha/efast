var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateSeparator = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageList/DateSeparator.tsx";

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  background-color: ", ";\n  flex: 1;\n  height: 0.5px;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  font-size: 10px;\n  margin-horizontal: 5px;\n  opacity: 0.8;\n  text-align: center;\n  text-transform: uppercase;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  font-size: 10px;\n  font-weight: 700;\n  opacity: 0.8;\n  text-transform: uppercase;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  margin-vertical: 20px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.messageList.dateSeparator.container.css;
});

var Date = _styledComponents.styled.Text(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageList.dateSeparator.date.css;
});

var DateText = _styledComponents.styled.Text(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.messageList.dateSeparator.dateText.css;
});

var Line = _styledComponents.styled.View(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.light;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.messageList.dateSeparator.line.css;
});

var DateSeparator = function DateSeparator(props) {
  var formatDate = props.formatDate,
      message = props.message;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      tDateTimeParser = _useTranslationContex.tDateTimeParser;

  var date = formatDate ? formatDate(message.date) : tDateTimeParser(message.date);
  return _react["default"].createElement(Container, {
    testID: "date-separator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, _react["default"].createElement(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }), _react["default"].createElement(DateText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, formatDate ? date : _react["default"].createElement(Date, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, (0, _TranslationContext.isDayOrMoment)(date) ? date.calendar() : date)), _react["default"].createElement(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }));
};

exports.DateSeparator = DateSeparator;
//# sourceMappingURL=DateSeparator.js.map