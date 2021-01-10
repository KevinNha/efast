var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadProgressIndicator = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _styledComponents = require("../../styles/styledComponents");

var _utils = require("../../utils/utils");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/MessageInput/UploadProgressIndicator.tsx";

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  bottom: 0;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 100%;\n  justify-content: center;\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0);\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  bottom: 0;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var iconReload = require("../../images/reload1.png");

var ActivityIndicatorContainer = _styledComponents.styled.View(_templateObject());

var Container = _styledComponents.styled.View(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.messageInput.uploadProgressIndicator.container.css;
});

var Overlay = _styledComponents.styled.View(_templateObject3(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.messageInput.uploadProgressIndicator.overlay.css;
});

var RetryButtonContainer = _styledComponents.styled.TouchableOpacity(_templateObject4());

var UploadProgressIndicator = function UploadProgressIndicator(props) {
  var action = props.action,
      active = props.active,
      children = props.children,
      type = props.type;
  return !active ? _react["default"].createElement(_reactNative.View, {
    testID: "inactive-upload-progress-indicator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, children) : _react["default"].createElement(_reactNative.View, {
    testID: "active-upload-progress-indicator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, children, _react["default"].createElement(Overlay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), _react["default"].createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, type === _utils.ProgressIndicatorTypes.IN_PROGRESS && _react["default"].createElement(ActivityIndicatorContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNative.ActivityIndicator, {
    color: "grey",
    testID: "upload-progress-indicator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })), type === _utils.ProgressIndicatorTypes.RETRY && _react["default"].createElement(RetryButtonContainer, {
    onPress: action,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNative.Image, {
    source: iconReload,
    style: {
      height: 18,
      width: 18
    },
    testID: "retry-upload-progress-indicator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }))));
};

exports.UploadProgressIndicator = UploadProgressIndicator;
//# sourceMappingURL=UploadProgressIndicator.js.map