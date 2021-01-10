var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderText = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactNativeSimpleMarkdown = _interopRequireDefault(require("@stream-io/react-native-simple-markdown"));

var _anchorme = _interopRequireDefault(require("anchorme"));

var _truncate = _interopRequireDefault(require("lodash/truncate"));

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Message/MessageSimple/utils/renderText.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var defaultMarkdownStyles = {
  inlineCode: {
    backgroundColor: '#F3F3F3',
    borderColor: '#dddddd',
    color: 'red',
    fontSize: 13,
    padding: 3,
    paddingHorizontal: 5
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  },
  url: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
};

var renderText = function renderText(params) {
  var markdownRules = params.markdownRules,
      markdownStyles = params.markdownStyles,
      message = params.message;
  var _message$mentioned_us = message.mentioned_users,
      mentioned_users = _message$mentioned_us === void 0 ? [] : _message$mentioned_us,
      text = message.text;
  if (!text) return null;
  var newText = text.trim();
  var urls = (0, _anchorme["default"])(newText, {
    list: true
  });

  for (var _iterator = _createForOfIteratorHelperLoose(urls), _step; !(_step = _iterator()).done;) {
    var urlInfo = _step.value;
    var displayLink = (0, _truncate["default"])(urlInfo.encoded.replace(/^(www\.)/, ''), {
      length: 200,
      omission: '...'
    });
    var markdown = "[" + displayLink + "](" + urlInfo.protocol + urlInfo.encoded + ")";
    newText = newText.replace(urlInfo.raw, markdown);
  }

  if (mentioned_users.length) {
    for (var i = 0; i < mentioned_users.length; i++) {
      var username = mentioned_users[i].name || mentioned_users[i].id;

      var _markdown = "**@" + username + "**";

      var regEx = new RegExp("@" + username, 'g');
      newText = newText.replace(regEx, _markdown);
    }
  }

  newText = newText.replace(/[<&"'>]/g, '\\$&');

  var styles = _objectSpread(_objectSpread({}, defaultMarkdownStyles), markdownStyles);

  return _react["default"].createElement(_reactNativeSimpleMarkdown["default"], {
    rules: markdownRules,
    styles: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, newText);
};

exports.renderText = renderText;
//# sourceMappingURL=renderText.js.map