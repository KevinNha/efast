var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIndicator = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _Spinner = require("../Spinner/Spinner");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Indicators/LoadingIndicator.tsx";

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

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.loadingIndicator.container.css;
});

var LoadingText = _styledComponents.styled.Text(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.loadingIndicator.loadingText.css;
});

var LoadingIndicatorWrapper = function LoadingIndicatorWrapper(_ref3) {
  var text = _ref3.text;
  return _react["default"].createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, _react["default"].createElement(_Spinner.Spinner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), _react["default"].createElement(LoadingText, {
    testID: "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, text));
};

var LoadingIndicator = function LoadingIndicator(props) {
  var listType = props.listType,
      loadingText = props.loadingText;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  if (loadingText) {
    return _react["default"].createElement(LoadingIndicatorWrapper, {
      text: loadingText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 12
      }
    });
  }

  switch (listType) {
    case 'channel':
      return _react["default"].createElement(LoadingIndicatorWrapper, {
        text: t('Loading channels ...'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 14
        }
      });

    case 'message':
      return _react["default"].createElement(LoadingIndicatorWrapper, {
        text: t('Loading messages ...'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 14
        }
      });

    default:
      return _react["default"].createElement(LoadingIndicatorWrapper, {
        text: t('Loading ...'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 14
        }
      });
  }
};

exports.LoadingIndicator = LoadingIndicator;
//# sourceMappingURL=LoadingIndicator.js.map