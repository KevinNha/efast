var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageNotification = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageList/MessageNotification.tsx";

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 13px;\n  height: 27px;\n  justify-content: center;\n  transform: translateY(9px);\n  width: 112px;\n  z-index: 10;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.TouchableOpacity(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageList.messageNotification.container.css;
});

var MessageNotificationText = _styledComponents.styled.Text(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.messageList.messageNotification.text.css;
});

var MessageNotification = function MessageNotification(props) {
  var onPress = props.onPress,
      _props$showNotificati = props.showNotification,
      showNotification = _props$showNotificati === void 0 ? true : _props$showNotificati;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  var opacity = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  (0, _react.useEffect)(function () {
    _reactNative.Animated.timing(opacity, {
      duration: 500,
      toValue: showNotification ? 1 : 0,
      useNativeDriver: true
    }).start();
  }, [showNotification]);
  return showNotification ? _react["default"].createElement(_reactNative.Animated.View, {
    style: {
      bottom: 0,
      opacity: opacity,
      position: 'absolute'
    },
    testID: "message-notification",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, _react["default"].createElement(Container, {
    onPress: onPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, _react["default"].createElement(MessageNotificationText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, t('New Messages')))) : null;
};

exports.MessageNotification = MessageNotification;
//# sourceMappingURL=MessageNotification.js.map