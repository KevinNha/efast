var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingErrorIndicator = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Indicators/LoadingErrorIndicator.tsx";

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  font-size: 30px;\n  font-weight: 600;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 20px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  height: 100%;\n  justify-content: center;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.TouchableOpacity(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.loadingErrorIndicator.container.css;
});

var ErrorText = _styledComponents.styled.Text(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.loadingErrorIndicator.errorText.css;
});

var RetryText = _styledComponents.styled.Text(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.loadingErrorIndicator.retryText.css;
});

var LoadingErrorWrapper = function LoadingErrorWrapper(props) {
  var children = props.children,
      onPress = props.onPress,
      text = props.text;
  return _react["default"].createElement(Container, {
    onPress: onPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, _react["default"].createElement(ErrorText, {
    testID: "loading-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, text), children);
};

var LoadingErrorIndicator = function LoadingErrorIndicator(props) {
  var listType = props.listType,
      _props$retry = props.retry,
      retry = _props$retry === void 0 ? function () {
    return null;
  } : _props$retry;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  switch (listType) {
    case 'channel':
      return _react["default"].createElement(LoadingErrorWrapper, {
        onPress: retry,
        text: t('Error loading channel list ...'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, _react["default"].createElement(RetryText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }, "\u27F3"));

    case 'message':
      return _react["default"].createElement(LoadingErrorWrapper, {
        onPress: retry,
        text: t('Error loading messages for this channel ...'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }
      });

    default:
      return _react["default"].createElement(LoadingErrorWrapper, {
        text: t('Error loading'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 14
        }
      });
  }
};

exports.LoadingErrorIndicator = LoadingErrorIndicator;
//# sourceMappingURL=LoadingErrorIndicator.js.map