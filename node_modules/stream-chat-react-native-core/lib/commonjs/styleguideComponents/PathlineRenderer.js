var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PathlineRenderer = exports.styles = void 0;

var _react = _interopRequireDefault(require("react"));

var _clipboardCopy = _interopRequireDefault(require("clipboard-copy"));

var _md = require("react-icons/md");

var _Link = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Link"));

var _ToolbarButton = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/ToolbarButton"));

var _Styled = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Styled"));

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/styleguideComponents/PathlineRenderer.tsx";

var styles = function styles(_ref) {
  var color = _ref.color,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      space = _ref.space;
  return {
    copyButton: {
      marginLeft: space[0]
    },
    pathline: {
      color: color.light,
      fontFamily: fontFamily.monospace,
      fontSize: fontSize.small,
      wordBreak: 'break-all'
    }
  };
};

exports.styles = styles;

var PathlineRenderer = function PathlineRenderer(_ref2) {
  var children = _ref2.children,
      classes = _ref2.classes;
  return _react["default"].createElement("div", {
    className: classes.pathline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, _react["default"].createElement(_Link["default"], {
    href: 'https://github.com/GetStream/stream-chat-react-native/blob/master/' + children,
    rel: "noopener",
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, children), _react["default"].createElement(_ToolbarButton["default"], {
    className: classes.copyButton,
    onClick: function onClick() {
      return children && (0, _clipboardCopy["default"])(children.toString());
    },
    small: true,
    title: "Copy to clipboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, _react["default"].createElement(_md.MdContentCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  })));
};

exports.PathlineRenderer = PathlineRenderer;

var _default = (0, _Styled["default"])(styles)(PathlineRenderer);

exports["default"] = _default;
//# sourceMappingURL=PathlineRenderer.js.map