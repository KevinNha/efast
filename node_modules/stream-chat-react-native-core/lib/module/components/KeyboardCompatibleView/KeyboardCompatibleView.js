var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyboardCompatibleView = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _KeyboardContext = require("../../contexts/keyboardContext/KeyboardContext");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/KeyboardCompatibleView/KeyboardCompatibleView.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var KeyboardCompatibleView = function (_React$Component) {
  (0, _inherits2["default"])(KeyboardCompatibleView, _React$Component);

  var _super = _createSuper(KeyboardCompatibleView);

  function KeyboardCompatibleView(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, KeyboardCompatibleView);
    _this = _super.call(this, props);
    _this._frame = null;
    _this._keyboardEvent = null;
    _this._subscriptions = [];
    _this._initialFrameHeight = 0;

    _this._onKeyboardChange = function (event) {
      _this._keyboardEvent = event;

      _this._updateBottomIfNecessary();
    };

    _this._onLayout = function (event) {
      _this._frame = event.nativeEvent.layout;

      if (!_this._initialFrameHeight) {
        _this._initialFrameHeight = _this._frame.height;
      }

      _this._updateBottomIfNecessary();
    };

    _this._updateBottomIfNecessary = function () {
      if (_this._keyboardEvent === null) {
        _this.setState({
          bottom: 0
        });

        return;
      }

      var _this$_keyboardEvent = _this._keyboardEvent,
          duration = _this$_keyboardEvent.duration,
          easing = _this$_keyboardEvent.easing,
          endCoordinates = _this$_keyboardEvent.endCoordinates;

      var height = _this._relativeKeyboardHeight(endCoordinates);

      if (_this.state.bottom === height) {
        return;
      }

      if (duration && easing) {
        _reactNative.LayoutAnimation.configureNext({
          duration: duration > 10 ? duration : 10,
          update: {
            duration: duration > 10 ? duration : 10,
            type: _reactNative.LayoutAnimation.Types[easing] || 'keyboard'
          }
        });
      }

      _this.setState({
        bottom: height
      });
    };

    _this._handleAppStateChange = function (nextAppState) {
      if (_this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
        _this.setKeyboardListeners();
      }

      if (nextAppState.match(/inactive|background/)) {
        _this.unsetKeyboardListeners();
      }

      _this.setState({
        appState: nextAppState
      });
    };

    _this.setKeyboardListeners = function () {
      if (_reactNative.Platform.OS === 'ios') {
        _this._subscriptions = [_reactNative.Keyboard.addListener('keyboardWillChangeFrame', _this._onKeyboardChange)];
      } else {
        _this._subscriptions = [_reactNative.Keyboard.addListener('keyboardDidHide', _this._onKeyboardChange), _reactNative.Keyboard.addListener('keyboardDidShow', _this._onKeyboardChange)];
      }

      _this._subscriptions.push(_reactNative.Keyboard.addListener('keyboardDidHide', function () {
        _this.setState({
          isKeyboardOpen: false
        });
      }), _reactNative.Keyboard.addListener('keyboardDidShow', function () {
        _this.setState({
          isKeyboardOpen: true
        });
      }));
    };

    _this.unsetKeyboardListeners = function () {
      _this._subscriptions = _this._subscriptions.filter(function (subscription) {
        subscription.remove();
        return false;
      });
    };

    _this.dismissKeyboard = function () {
      if (!_this.state.isKeyboardOpen) {
        return;
      }

      return new Promise(function (resolve) {
        var subscription = _reactNative.Keyboard.addListener('keyboardDidHide', function () {
          resolve();
          subscription.remove();
        });

        _reactNative.Keyboard.dismiss();
      });
    };

    _this.state = {
      appState: _reactNative.AppState.currentState,
      bottom: 0,
      isKeyboardOpen: false
    };
    _this.viewRef = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(KeyboardCompatibleView, [{
    key: "_relativeKeyboardHeight",
    value: function _relativeKeyboardHeight(keyboardFrame) {
      var frame = this._frame;

      if (!frame || !keyboardFrame) {
        return 0;
      }

      var keyboardY = keyboardFrame.screenY - this.props.keyboardVerticalOffset;
      return Math.max(frame.y + frame.height - keyboardY, 0);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _reactNative.AppState.addEventListener('change', this._handleAppStateChange);

      this.setKeyboardListeners();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _reactNative.AppState.removeEventListener('change', this._handleAppStateChange);

      this.unsetKeyboardListeners();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          behavior = _this$props.behavior,
          children = _this$props.children,
          contentContainerStyle = _this$props.contentContainerStyle,
          enabled = _this$props.enabled,
          style = _this$props.style,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["behavior", "children", "contentContainerStyle", "enabled", "style"]);
      var bottomHeight = enabled ? this.state.bottom : 0;

      switch (behavior) {
        case 'height':
          var heightStyle;

          if (this._frame !== null && this.state.bottom > 0) {
            heightStyle = {
              flex: 0,
              height: this._initialFrameHeight - bottomHeight
            };
          }

          return _react["default"].createElement(_KeyboardContext.KeyboardProvider, {
            value: {
              dismissKeyboard: this.dismissKeyboard
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 11
            }
          }, _react["default"].createElement(_reactNative.View, (0, _extends2["default"])({
            onLayout: this._onLayout,
            ref: this.viewRef,
            style: _reactNative.StyleSheet.compose(style, heightStyle)
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 13
            }
          }), children));

        case 'position':
          return _react["default"].createElement(_KeyboardContext.KeyboardProvider, {
            value: {
              dismissKeyboard: this.dismissKeyboard
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 11
            }
          }, _react["default"].createElement(_reactNative.View, (0, _extends2["default"])({
            onLayout: this._onLayout,
            ref: this.viewRef,
            style: style
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 13
            }
          }), _react["default"].createElement(_reactNative.View, {
            style: _reactNative.StyleSheet.compose(contentContainerStyle, {
              bottom: bottomHeight
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }
          }, children)));

        case 'padding':
          return _react["default"].createElement(_KeyboardContext.KeyboardProvider, {
            value: {
              dismissKeyboard: this.dismissKeyboard
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 11
            }
          }, _react["default"].createElement(_reactNative.View, (0, _extends2["default"])({
            onLayout: this._onLayout,
            ref: this.viewRef,
            style: _reactNative.StyleSheet.compose(style, {
              paddingBottom: bottomHeight
            })
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 13
            }
          }), children));

        default:
          return _react["default"].createElement(_KeyboardContext.KeyboardProvider, {
            value: {
              dismissKeyboard: this.dismissKeyboard
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 11
            }
          }, _react["default"].createElement(_reactNative.View, (0, _extends2["default"])({
            onLayout: this._onLayout,
            ref: this.viewRef,
            style: style
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 13
            }
          }), children));
      }
    }
  }]);
  return KeyboardCompatibleView;
}(_react["default"].Component);

exports.KeyboardCompatibleView = KeyboardCompatibleView;
KeyboardCompatibleView.defaultProps = {
  behavior: _reactNative.Platform.OS === 'ios' ? 'padding' : 'position',
  enabled: true,
  keyboardVerticalOffset: _reactNative.Platform.OS === 'ios' ? 86.5 : -300
};
//# sourceMappingURL=KeyboardCompatibleView.js.map