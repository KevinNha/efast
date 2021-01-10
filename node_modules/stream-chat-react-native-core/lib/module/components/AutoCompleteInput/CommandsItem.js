var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandsItem = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/AutoCompleteInput/CommandsItem.tsx";

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  flex-direction: row;\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  font-weight: bold;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  padding: 10px;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CommandArgs = _styledComponents.styled.Text(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.messageInput.suggestions.command.args.css;
});

var CommandDescription = _styledComponents.styled.Text(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageInput.suggestions.command.description.css;
});

var Container = _styledComponents.styled.View(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.messageInput.suggestions.command.container.css;
});

var Title = _styledComponents.styled.Text(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.messageInput.suggestions.command.title.css;
});

var Top = _styledComponents.styled.View(_templateObject5(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.messageInput.suggestions.command.top.css;
});

var CommandsItem = function CommandsItem(_ref6) {
  var _ref6$item = _ref6.item,
      args = _ref6$item.args,
      description = _ref6$item.description,
      name = _ref6$item.name;
  return _react["default"].createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 3
    }
  }, _react["default"].createElement(Top, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, _react["default"].createElement(Title, {
    testID: "commands-item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "/", name, " "), _react["default"].createElement(CommandArgs, {
    testID: "commands-item-args",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, args)), _react["default"].createElement(CommandDescription, {
    testID: "commands-item-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, description));
};

exports.CommandsItem = CommandsItem;
//# sourceMappingURL=CommandsItem.js.map