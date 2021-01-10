var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionPicker = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Avatar = require("../Avatar/Avatar");

var _styledComponents = require("../../styles/styledComponents");

var _utils = require("../../utils/utils");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Reaction/ReactionPicker.tsx";

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  font-size: 20px;\n  margin-vertical: 5px;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  margin-top: -5px;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  background-color: black;\n  border-radius: 30px;\n  flex-direction: row;\n  height: 60px;\n  padding-horizontal: 20px;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: ", ";\n  flex: 1;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.TouchableOpacity(_templateObject(), function (_ref) {
  var leftAlign = _ref.leftAlign;
  return leftAlign ? 'flex-start' : 'flex-end';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.message.reactionPicker.container.css;
});

var ContainerView = _styledComponents.styled.View(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.message.reactionPicker.containerView.css;
});

var Column = _styledComponents.styled.View(_templateObject3(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.message.reactionPicker.column.css;
});

var Emoji = _styledComponents.styled.Text(_templateObject4(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.message.reactionPicker.emoji.css;
});

var ReactionCount = _styledComponents.styled.Text(_templateObject5(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.message.reactionPicker.text.css;
});

var getLatestUser = function getLatestUser(type, reactions) {
  var _filtered$;

  var filtered = reactions == null ? void 0 : reactions.filter(function (item) {
    return item.type === type;
  });

  if (filtered == null ? void 0 : (_filtered$ = filtered[0]) == null ? void 0 : _filtered$.user) {
    return filtered[0].user;
  }

  return;
};

var ReactionPicker = function ReactionPicker(props) {
  var handleDismiss = props.handleDismiss,
      handleReaction = props.handleReaction,
      _props$hideReactionCo = props.hideReactionCount,
      hideReactionCount = _props$hideReactionCo === void 0 ? false : _props$hideReactionCo,
      _props$hideReactionOw = props.hideReactionOwners,
      hideReactionOwners = _props$hideReactionOw === void 0 ? false : _props$hideReactionOw,
      latestReactions = props.latestReactions,
      reactionCounts = props.reactionCounts,
      reactionPickerVisible = props.reactionPickerVisible,
      rpLeft = props.rpLeft,
      rpRight = props.rpRight,
      _props$rpTop = props.rpTop,
      rpTop = _props$rpTop === void 0 ? 40 : _props$rpTop,
      _props$supportedReact = props.supportedReactions,
      supportedReactions = _props$supportedReact === void 0 ? _utils.emojiData : _props$supportedReact;
  if (!reactionPickerVisible) return null;
  return _react["default"].createElement(_reactNative.Modal, {
    animationType: "fade",
    onRequestClose: handleDismiss,
    testID: "reaction-picker",
    transparent: true,
    visible: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, _react["default"].createElement(Container, {
    activeOpacity: 1,
    leftAlign: Boolean(rpLeft),
    onPress: handleDismiss,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, _react["default"].createElement(ContainerView, {
    style: {
      marginLeft: rpLeft,
      marginRight: rpRight,
      marginTop: rpTop
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, supportedReactions.map(function (_ref7) {
    var icon = _ref7.icon,
        id = _ref7.id;
    var count = (reactionCounts == null ? void 0 : reactionCounts[id]) || 0;
    var latestUser = getLatestUser(id, latestReactions);
    return _react["default"].createElement(Column, {
      key: id,
      testID: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 15
      }
    }, latestUser && !hideReactionOwners ? _react["default"].createElement(_Avatar.Avatar, {
      image: latestUser.image,
      name: latestUser.name || latestUser.id,
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 19
      }
    }) : !hideReactionOwners && _react["default"].createElement(_reactNative.View, {
      style: {
        height: 18,
        width: 18
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 21
      }
    }), _react["default"].createElement(Emoji, {
      onPress: function onPress() {
        return handleReaction(id);
      },
      testID: id + "-reaction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, icon), !hideReactionCount && _react["default"].createElement(ReactionCount, {
      testID: id + "-" + (count || 'count'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 19
      }
    }, count > 0 ? count : ''));
  }))));
};

exports.ReactionPicker = ReactionPicker;
//# sourceMappingURL=ReactionPicker.js.map