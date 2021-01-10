var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionPickerWrapper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ReactionPicker = require("./ReactionPicker");

var _utils = require("../../utils/utils");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Reaction/ReactionPickerWrapper.tsx";

var ReactionPickerWrapper = function ReactionPickerWrapper(props) {
  var alignment = props.alignment,
      children = props.children,
      customMessageContent = props.customMessageContent,
      dismissReactionPicker = props.dismissReactionPicker,
      _props$emojiData = props.emojiData,
      emojiData = _props$emojiData === void 0 ? _utils.emojiData : _props$emojiData,
      handleReaction = props.handleReaction,
      _props$hideReactionCo = props.hideReactionCount,
      hideReactionCount = _props$hideReactionCo === void 0 ? false : _props$hideReactionCo,
      _props$hideReactionOw = props.hideReactionOwners,
      hideReactionOwners = _props$hideReactionOw === void 0 ? false : _props$hideReactionOw,
      message = props.message,
      _props$offset = props.offset,
      offset = _props$offset === void 0 ? {
    left: 30,
    right: 10,
    top: 40
  } : _props$offset,
      openReactionPicker = props.openReactionPicker,
      _props$ReactionPicker = props.ReactionPicker,
      ReactionPicker = _props$ReactionPicker === void 0 ? _ReactionPicker.ReactionPicker : _props$ReactionPicker,
      reactionPickerVisible = props.reactionPickerVisible,
      _props$supportedReact = props.supportedReactions,
      supportedReactions = _props$supportedReact === void 0 ? _utils.emojiData : _props$supportedReact;
  var messageContainer = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      rpLeft = _useState2[0],
      setRPLeft = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      rpRight = _useState4[0],
      setRPRight = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      rpTop = _useState6[0],
      setRPTop = _useState6[1];

  (0, _react.useEffect)(function () {
    if (reactionPickerVisible) {
      setReactionPickerPosition();
    }
  }, [reactionPickerVisible]);

  var setReactionPickerPosition = function setReactionPickerPosition() {
    setTimeout(function () {
      if (messageContainer.current) {
        messageContainer.current.measureInWindow(function (x, y, width) {
          setRPLeft(alignment === 'left' ? x - 10 + offset.left : undefined);
          setRPRight(alignment === 'right' ? Math.round(_reactNative.Dimensions.get('window').width) - (x + width + offset.right) : undefined);
          setRPTop(y - 60 + offset.top);
        });
      }
    }, customMessageContent ? 10 : 0);
  };

  return _react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: openReactionPicker,
    ref: messageContainer,
    testID: "reaction-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, children, _react["default"].createElement(ReactionPicker, (0, _extends2["default"])({}, props, {
    handleDismiss: dismissReactionPicker,
    handleReaction: handleReaction,
    hideReactionCount: hideReactionCount,
    hideReactionOwners: hideReactionOwners,
    latestReactions: message.latest_reactions,
    reactionCounts: message.reaction_counts,
    reactionPickerVisible: reactionPickerVisible,
    rpLeft: rpLeft,
    rpRight: rpRight,
    rpTop: rpTop,
    supportedReactions: supportedReactions || emojiData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  })));
};

exports.ReactionPickerWrapper = ReactionPickerWrapper;
//# sourceMappingURL=ReactionPickerWrapper.js.map