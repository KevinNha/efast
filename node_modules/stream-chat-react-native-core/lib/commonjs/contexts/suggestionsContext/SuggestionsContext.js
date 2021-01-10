var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSuggestionsContext = exports.useSuggestionsContext = exports.SuggestionsProvider = exports.SuggestionsContext = exports.isSuggestionUser = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _SuggestionsList = require("./SuggestionsList");

var _getDisplayName = require("../utils/getDisplayName");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/contexts/suggestionsContext/SuggestionsContext.tsx";

var isSuggestionUser = function isSuggestionUser(suggestion) {
  return 'id' in suggestion;
};

exports.isSuggestionUser = isSuggestionUser;

var SuggestionsContext = _react["default"].createContext({});

exports.SuggestionsContext = SuggestionsContext;

var SuggestionsProvider = function SuggestionsProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      componentType = _useState2[0],
      setComponentType = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      suggestions = _useState4[0],
      setSuggestions = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      suggestionsBackdropHeight = _useState6[0],
      setSuggestionsBackdropHeight = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      suggestionsLeftMargin = _useState8[0],
      setSuggestionsLeftMargin = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      suggestionsTitle = _useState10[0],
      setSuggestionsTitle = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      suggestionsViewActive = _useState12[0],
      setSuggestionsViewActive = _useState12[1];

  var _useState13 = (0, _react.useState)(0),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      suggestionsWidth = _useState14[0],
      setSuggestionsWidth = _useState14[1];

  var messageInputBox = (0, _react.useRef)(null);
  var rootView = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var onKeyboardHidden = function onKeyboardHidden() {
      setSuggestionsViewActive(false);
    };

    var subscription = _reactNative.Keyboard.addListener('keyboardDidHide', onKeyboardHidden);

    return function () {
      subscription.remove();
    };
  }, []);

  var openSuggestions = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(title, component) {
      var inputBoxPosition;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getInputBoxPosition();

            case 2:
              inputBoxPosition = _context.sent;
              setComponentType(component);
              setSuggestionsBackdropHeight(inputBoxPosition.y);
              setSuggestionsLeftMargin(inputBoxPosition.x);
              setSuggestionsTitle(title);
              setSuggestionsViewActive(true);
              setSuggestionsWidth(inputBoxPosition.width);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function openSuggestions(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var updateSuggestions = function updateSuggestions(newSuggestions) {
    setSuggestions(newSuggestions);
    setSuggestionsViewActive(!!componentType);
  };

  var closeSuggestions = function closeSuggestions() {
    setComponentType('');
    setSuggestionsTitle('');
    setSuggestionsViewActive(false);
  };

  var setInputBoxContainerRef = function setInputBoxContainerRef(ref) {
    messageInputBox.current = ref;
  };

  var getInputBoxPosition = function getInputBoxPosition() {
    return new Promise(function (resolve) {
      var _messageInputBox$curr;

      var nodeHandleRoot = (0, _reactNative.findNodeHandle)(rootView.current) || 0;
      messageInputBox == null ? void 0 : (_messageInputBox$curr = messageInputBox.current) == null ? void 0 : _messageInputBox$curr.measureLayout(nodeHandleRoot, function (x, y, width, height) {
        resolve({
          height: height,
          width: width,
          x: x,
          y: y
        });
      }, function () {
        return resolve({
          height: 0,
          width: 0,
          x: 0,
          y: 0
        });
      });
    });
  };

  var suggestionsContext = {
    closeSuggestions: (value == null ? void 0 : value.closeSuggestions) || closeSuggestions,
    openSuggestions: (value == null ? void 0 : value.openSuggestions) || openSuggestions,
    setInputBoxContainerRef: (value == null ? void 0 : value.setInputBoxContainerRef) || setInputBoxContainerRef,
    updateSuggestions: (value == null ? void 0 : value.updateSuggestions) || updateSuggestions
  };
  return _react["default"].createElement(SuggestionsContext.Provider, {
    value: suggestionsContext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    }
  }, suggestions && _react["default"].createElement(_SuggestionsList.SuggestionsList, {
    active: suggestionsViewActive,
    backdropHeight: suggestionsBackdropHeight,
    componentType: componentType,
    handleDismiss: function handleDismiss() {
      return setSuggestionsViewActive(false);
    },
    marginLeft: suggestionsLeftMargin,
    suggestions: suggestions,
    suggestionsTitle: suggestionsTitle,
    width: suggestionsWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }), _react["default"].createElement(_reactNative.View, {
    collapsable: false,
    ref: rootView,
    style: {
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }, children));
};

exports.SuggestionsProvider = SuggestionsProvider;

var useSuggestionsContext = function useSuggestionsContext() {
  return (0, _react.useContext)(SuggestionsContext);
};

exports.useSuggestionsContext = useSuggestionsContext;

var withSuggestionsContext = function withSuggestionsContext(Component) {
  var WithSuggestionsContextComponent = function WithSuggestionsContextComponent(props) {
    var suggestionsContext = useSuggestionsContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, suggestionsContext, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 12
      }
    }));
  };

  WithSuggestionsContextComponent.displayName = "WithSuggestionsContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithSuggestionsContextComponent;
};

exports.withSuggestionsContext = withSuggestionsContext;
//# sourceMappingURL=SuggestionsContext.js.map