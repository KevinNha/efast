var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoCompleteInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _SuggestionsContext = require("../../contexts/suggestionsContext/SuggestionsContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../styles/styledComponents");

var _utils = require("../../utils/utils");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/AutoCompleteInput/AutoCompleteInput.tsx";

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  flex: 1;\n  margin: -5px;\n  max-height: 60px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var InputBox = (0, _styledComponents.styled)(_reactNative.TextInput)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.messageInput.inputBox.css;
});

var computeCaretPosition = function computeCaretPosition(token, startOfTokenPosition) {
  return startOfTokenPosition + token.length;
};

var isCommand = function isCommand(text) {
  return text[0] === '/' && text.split(' ').length <= 1;
};

var AutoCompleteInput = function AutoCompleteInput(props) {
  var additionalTextInputProps = props.additionalTextInputProps,
      onChange = props.onChange,
      setInputBoxRef = props.setInputBoxRef,
      triggerSettings = props.triggerSettings,
      value = props.value;

  var _useSuggestionsContex = (0, _SuggestionsContext.useSuggestionsContext)(),
      closeSuggestions = _useSuggestionsContex.closeSuggestions,
      openSuggestions = _useSuggestionsContex.openSuggestions,
      updateSuggestionsContext = _useSuggestionsContex.updateSuggestions;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  var isTrackingStarted = (0, _react.useRef)(false);
  var selectionEnd = (0, _react.useRef)(0);

  var handleChange = function handleChange(text) {
    var fromUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!fromUpdate) {
      onChange(text);
    } else {
      handleSuggestions(text);
    }
  };

  (0, _react.useEffect)(function () {
    handleChange(value, true);
  }, [value]);

  var startTracking = function startTracking(trigger) {
    isTrackingStarted.current = true;
    var _triggerSettings$trig = triggerSettings[trigger],
        Component = _triggerSettings$trig.component,
        title = _triggerSettings$trig.title;
    openSuggestions(title, typeof Component === 'string' ? Component : _react["default"].createElement(Component, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 51
      }
    }));
  };

  var stopTracking = function stopTracking() {
    isTrackingStarted.current = false;
    closeSuggestions();
  };

  var updateSuggestions = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(_ref2) {
      var query, trigger;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _ref2.query, trigger = _ref2.trigger;

              if (!(0, _utils.isMentionTrigger)(trigger)) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return triggerSettings[trigger].dataProvider(query, value, function (data, queryCallback) {
                if (query === queryCallback) {
                  updateSuggestionsContext({
                    data: data,
                    onSelect: function onSelect(item) {
                      return onSelectSuggestion({
                        item: item,
                        trigger: trigger
                      });
                    }
                  });
                }
              });

            case 4:
              _context.next = 8;
              break;

            case 6:
              _context.next = 8;
              return triggerSettings[trigger].dataProvider(query, value, function (data, queryCallback) {
                if (query !== queryCallback) {
                  return;
                }

                updateSuggestionsContext({
                  data: data,
                  onSelect: function onSelect(item) {
                    return onSelectSuggestion({
                      item: item,
                      trigger: trigger
                    });
                  }
                });
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateSuggestions(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleSelectionChange = function handleSelectionChange(_ref4) {
    var end = _ref4.nativeEvent.selection.end;
    selectionEnd.current = end;
  };

  var onSelectSuggestion = function onSelectSuggestion(_ref5) {
    var item = _ref5.item,
        trigger = _ref5.trigger;

    if (!trigger) {
      return;
    }

    var newTokenString = '';

    if ((0, _utils.isMentionTrigger)(trigger)) {
      if ((0, _SuggestionsContext.isSuggestionUser)(item)) {
        newTokenString = triggerSettings[trigger].output(item).text + " ";
      }
    } else {
      if (!(0, _SuggestionsContext.isSuggestionUser)(item)) {
        newTokenString = triggerSettings[trigger].output(item).text + " ";
      }
    }

    var textToModify = value.slice(0, selectionEnd.current);
    var startOfTokenPosition = textToModify.search(new RegExp("\\" + trigger + ("[^\\" + trigger + '\\s' + "]") + "*$"));
    var newCaretPosition = computeCaretPosition(newTokenString, startOfTokenPosition);
    var modifiedText = "" + textToModify.substring(0, startOfTokenPosition) + newTokenString;
    stopTracking();
    onChange(value.replace(textToModify, modifiedText));
    selectionEnd.current = newCaretPosition || 0;

    if ((0, _utils.isMentionTrigger)(trigger) && (0, _SuggestionsContext.isSuggestionUser)(item)) {
      triggerSettings[trigger].callback(item);
    }
  };

  var handleCommand = function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(text) {
      var actualToken;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (isCommand(text)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", false);

            case 2:
              if (!isTrackingStarted.current) {
                startTracking('/');
              }

              actualToken = text.trim().slice(1);
              _context2.next = 6;
              return updateSuggestions({
                query: actualToken,
                trigger: '/'
              });

            case 6:
              return _context2.abrupt("return", true);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleCommand(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleMentions = function handleMentions(_ref7) {
    var selectionEndProp = _ref7.selectionEnd,
        text = _ref7.text;
    var tokenMatch = text.slice(0, selectionEndProp).match(/(?!^|\W)?[:@][^\s]*\s?[^\s]*$/g);
    var lastToken = tokenMatch && tokenMatch[tokenMatch.length - 1].trim();
    var handleMentionsTrigger = lastToken && Object.keys(triggerSettings).find(function (trigger) {
      return trigger === lastToken[0];
    }) || null;

    if (!lastToken || lastToken.length <= 0) {
      stopTracking();
      return;
    }

    var actualToken = lastToken.slice(1);

    if (!handleMentionsTrigger) {
      return;
    }

    if (!isTrackingStarted.current) {
      startTracking('@');
    }

    updateSuggestions({
      query: actualToken,
      trigger: '@'
    });
  };

  var handleSuggestions = function handleSuggestions(text) {
    setTimeout((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(text.slice(selectionEnd.current - 1, selectionEnd.current) === ' ' && !isTrackingStarted.current)) {
                _context3.next = 4;
                break;
              }

              stopTracking();
              _context3.next = 8;
              break;

            case 4:
              _context3.next = 6;
              return handleCommand(text);

            case 6:
              if (_context3.sent) {
                _context3.next = 8;
                break;
              }

              handleMentions({
                selectionEnd: selectionEnd.current,
                text: text
              });

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })), 100);
  };

  return _react["default"].createElement(InputBox, (0, _extends2["default"])({
    multiline: true,
    onChangeText: function onChangeText(text) {
      handleChange(text);
    },
    onSelectionChange: handleSelectionChange,
    placeholder: t('Write your message'),
    ref: setInputBoxRef,
    testID: "auto-complete-text-input",
    value: value
  }, additionalTextInputProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 5
    }
  }));
};

exports.AutoCompleteInput = AutoCompleteInput;
//# sourceMappingURL=AutoCompleteInput.js.map