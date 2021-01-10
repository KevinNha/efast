var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderReactions = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Reaction/utils/renderReactions.tsx";

var renderReactions = function renderReactions(reactions, supportedReactions) {
  var reactionsByType = {};
  reactions == null ? void 0 : reactions.map(function (reaction) {
    if (!reactionsByType[reaction.type]) {
      return reactionsByType[reaction.type] = [reaction];
    }

    return reactionsByType[reaction.type] = [].concat((0, _toConsumableArray2["default"])(reactionsByType[reaction.type]), [reaction]);
  });
  var emojiDataByType = {};
  var reactionTypes = supportedReactions.map(function (supportedReaction) {
    emojiDataByType[supportedReaction.id] = supportedReaction;
    return supportedReaction.id;
  });
  return Object.keys(reactionsByType).map(function (type) {
    return reactionTypes.indexOf(type) > -1 ? _react["default"].createElement(_reactNative.Text, {
      key: type,
      testID: type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, emojiDataByType[type].icon) : null;
  });
};

exports.renderReactions = renderReactions;
//# sourceMappingURL=renderReactions.js.map