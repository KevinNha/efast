var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionList = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _renderReactions = require("./utils/renderReactions");

var _styledComponents = require("../../styles/styledComponents");

var _utils = require("../../utils/utils");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Reaction/ReactionList.tsx";

function _templateObject11() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-self: ", ";\n  height: 28px;\n  ", "\n  z-index: 10;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 33px;\n  width: 25px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 33px;\n  width: 14px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  flex: 1;\n  height: 33px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  flex-direction: row;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: white;\n  font-size: 12px;\n  ", "\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 33px;\n  width: 25px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 33px;\n  width: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  flex: 1;\n  height: 33px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  flex-direction: row;\n  top: -23px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  flex-direction: row;\n  height: 24px;\n  padding-horizontal: 5px;\n  z-index: 1;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var leftTail = require("../../images/reactionlist/left-tail.png");

var leftCenter = require("../../images/reactionlist/left-center.png");

var leftEnd = require("../../images/reactionlist/left-end.png");

var rightTail = require("../../images/reactionlist/right-tail.png");

var rightCenter = require("../../images/reactionlist/right-center.png");

var rightEnd = require("../../images/reactionlist/right-end.png");

var Container = _styledComponents.styled.View(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.message.reactionList.container.css;
});

var ImageWrapper = _styledComponents.styled.View(_templateObject2());

var LeftCenter = _styledComponents.styled.Image(_templateObject3());

var LeftEnd = _styledComponents.styled.Image(_templateObject4());

var LeftTail = _styledComponents.styled.Image(_templateObject5());

var ReactionCount = _styledComponents.styled.Text(_templateObject6(), function (_ref2) {
  var reactionCounts = _ref2.reactionCounts;
  return reactionCounts < 10 ? undefined : 'min-width: 20px;';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.message.reactionList.reactionCount.css;
});

var Reactions = _styledComponents.styled.View(_templateObject7());

var RightCenter = _styledComponents.styled.Image(_templateObject8());

var RightEnd = _styledComponents.styled.Image(_templateObject9());

var RightTail = _styledComponents.styled.Image(_templateObject10());

var Wrapper = _styledComponents.styled.View(_templateObject11(), function (_ref4) {
  var alignment = _ref4.alignment;
  return alignment === 'left' ? 'flex-start' : 'flex-end';
}, function (_ref5) {
  var alignment = _ref5.alignment;
  return (alignment === 'left' ? 'left' : 'right') + ": -10px";
});

var ReactionList = function ReactionList(props) {
  var alignment = props.alignment,
      getTotalReactionCount = props.getTotalReactionCount,
      latestReactions = props.latestReactions,
      _props$supportedReact = props.supportedReactions,
      supportedReactions = _props$supportedReact === void 0 ? _utils.emojiData : _props$supportedReact,
      visible = props.visible;
  if (!visible) return null;
  return _react["default"].createElement(Wrapper, {
    alignment: alignment,
    testID: "reaction-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }, _react["default"].createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }, _react["default"].createElement(Reactions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, (0, _renderReactions.renderReactions)(latestReactions, supportedReactions)), _react["default"].createElement(ReactionCount, {
    reactionCounts: getTotalReactionCount(supportedReactions),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, getTotalReactionCount(supportedReactions))), _react["default"].createElement(ImageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }, alignment === 'left' ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(LeftTail, {
    source: leftTail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }), _react["default"].createElement(LeftCenter, {
    resizeMode: "stretch",
    source: leftCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }), _react["default"].createElement(LeftEnd, {
    source: leftEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  })) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(RightEnd, {
    source: rightEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }), _react["default"].createElement(RightCenter, {
    resizeMode: "stretch",
    source: rightCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }), _react["default"].createElement(RightTail, {
    source: rightTail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }))));
};

exports.ReactionList = ReactionList;
//# sourceMappingURL=ReactionList.js.map