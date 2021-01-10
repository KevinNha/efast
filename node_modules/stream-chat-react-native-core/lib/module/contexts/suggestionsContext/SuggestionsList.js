var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuggestionsList = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _SuggestionsContext = require("./SuggestionsContext");

var _CommandsItem = require("../../components/AutoCompleteInput/CommandsItem");

var _MentionsItem = require("../../components/AutoCompleteInput/MentionsItem");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/contexts/suggestionsContext/SuggestionsList.tsx";

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  position: absolute;\n  width: 100%;\n  z-index: 90;\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  font-weight: bold;\n  height: ", "px;\n  padding: 10px;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: ", "px;\n  justify-content: center;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 0px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  background-color: white;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  bottom: 10px;\n  height: ", "px;\n  position: absolute;\n  shadow-color: #000;\n  shadow-offset: 0px -3px;\n  shadow-opacity: 0.05;\n  z-index: 100;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var length = _ref.length,
      theme = _ref.theme;
  return Math.min(length * theme.messageInput.suggestions.container.itemHeight, theme.messageInput.suggestions.container.maxHeight);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageInput.suggestions.container.css;
});

var Separator = _styledComponents.styled.View(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.messageInput.suggestions.separator.css;
});

var SuggestionsItem = _styledComponents.styled.TouchableOpacity(_templateObject3(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.messageInput.suggestions.container.itemHeight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.messageInput.suggestions.item.css;
});

var Title = _styledComponents.styled.Text(_templateObject4(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.messageInput.suggestions.container.itemHeight;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.messageInput.suggestions.title.css;
});

var Wrapper = _styledComponents.styled.TouchableOpacity(_templateObject5(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.messageInput.suggestions.wrapper.css;
});

var SuggestionsHeader = function SuggestionsHeader(_ref9) {
  var title = _ref9.title;
  return _react["default"].createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 3
    }
  }, title);
};

var isString = function isString(component) {
  return typeof component === 'string';
};

var SuggestionsList = function SuggestionsList(props) {
  var active = props.active,
      backdropHeight = props.backdropHeight,
      Component = props.componentType,
      handleDismiss = props.handleDismiss,
      marginLeft = props.marginLeft,
      _props$suggestions = props.suggestions,
      data = _props$suggestions.data,
      onSelect = _props$suggestions.onSelect,
      suggestionsTitle = props.suggestionsTitle,
      width = props.width;

  var renderItem = function renderItem(_ref10) {
    var item = _ref10.item;

    if (isString(Component)) {
      switch (Component) {
        case 'MentionsItem':
          if ((0, _SuggestionsContext.isSuggestionUser)(item)) {
            return _react["default"].createElement(SuggestionsItem, {
              onPress: function onPress() {
                return onSelect(item);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 15
              }
            }, _react["default"].createElement(_MentionsItem.MentionsItem, {
              item: item,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }
            }));
          }

          return null;

        case 'CommandsItem':
          if (!(0, _SuggestionsContext.isSuggestionUser)(item)) {
            return _react["default"].createElement(SuggestionsItem, {
              onPress: function onPress() {
                return onSelect(item);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 15
              }
            }, _react["default"].createElement(_CommandsItem.CommandsItem, {
              item: item,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }
            }));
          }

          return null;

        default:
          return null;
      }
    }

    return _react["default"].createElement(SuggestionsItem, {
      onPress: function onPress() {
        return onSelect(item);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 7
      }
    }, _react["default"].cloneElement(Component, {
      item: item
    }));
  };

  if (!active || data.length === 0) return null;
  return _react["default"].createElement(Wrapper, {
    onPress: handleDismiss,
    style: {
      height: backdropHeight
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, _react["default"].createElement(Container, {
    length: data.length + 1,
    style: {
      marginLeft: marginLeft,
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.FlatList, {
    data: data,
    ItemSeparatorComponent: Separator,
    keyboardShouldPersistTaps: "always",
    keyExtractor: function keyExtractor(item, index) {
      return "" + (item.name || ((0, _SuggestionsContext.isSuggestionUser)(item) ? item.id : '')) + index;
    },
    ListHeaderComponent: _react["default"].createElement(SuggestionsHeader, {
      title: suggestionsTitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 32
      }
    }),
    renderItem: renderItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  })));
};

exports.SuggestionsList = SuggestionsList;
//# sourceMappingURL=SuggestionsList.js.map