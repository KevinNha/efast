var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageStatus = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _Avatar = require("../../Avatar/Avatar");

var _ChatContext = require("../../../contexts/chatContext/ChatContext");

var _styledComponents = require("../../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Message/MessageSimple/MessageStatus.tsx";

function _templateObject8() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  flex-direction: row;\n  justify-content: center;\n  width: 20px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 10px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 10px;\n  width: 10px;\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  flex-direction: row;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  height: 20px;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 16px;\n  height: 16px;\n  justify-content: center;\n  padding: 6px;\n  width: 16px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 6px;\n  width: 8px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var iconDeliveredUnseen = require("../../../images/icons/delivered_unseen.png");

var loadingGif = require("../../../images/loading.gif");

var CheckMark = _styledComponents.styled.Image(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.message.status.checkMark.css;
});

var DeliveredCircle = _styledComponents.styled.View(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.message.status.deliveredCircle.css;
});

var DeliveredContainer = _styledComponents.styled.View(_templateObject3(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.message.status.deliveredContainer.css;
});

var ReadByContainer = _styledComponents.styled.View(_templateObject4(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.message.status.readByContainer.css;
});

var SendingContainer = _styledComponents.styled.View(_templateObject5(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.message.status.sendingContainer.css;
});

var SendingImage = _styledComponents.styled.Image(_templateObject6(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.message.status.sendingImage.css;
});

var Spacer = _styledComponents.styled.View(_templateObject7());

var StatusContainer = _styledComponents.styled.View(_templateObject8());

var MessageStatus = function MessageStatus(props) {
  var _client$user;

  var lastReceivedId = props.lastReceivedId,
      message = props.message,
      _props$readBy = props.readBy,
      readBy = _props$readBy === void 0 ? [] : _props$readBy,
      threadList = props.threadList;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var justReadByMe = readBy.length === 1 && readBy[0].id === ((_client$user = client.user) == null ? void 0 : _client$user.id);

  if (message.status === 'sending') {
    return _react["default"].createElement(StatusContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }
    }, _react["default"].createElement(SendingContainer, {
      testID: "sending-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, _react["default"].createElement(SendingImage, {
      source: loadingGif,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    })));
  }

  if (readBy.length !== 0 && !threadList && !justReadByMe) {
    var lastReadUser = readBy.filter(function (item) {
      var _client$user2;

      return item.id !== ((_client$user2 = client.user) == null ? void 0 : _client$user2.id);
    })[0];
    return _react["default"].createElement(StatusContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }
    }, _react["default"].createElement(ReadByContainer, {
      testID: "read-by-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }, _react["default"].createElement(_Avatar.Avatar, {
      image: lastReadUser.image,
      name: lastReadUser.name || lastReadUser.id,
      size: 16,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }
    })));
  }

  if (message.status === 'received' && message.type !== 'ephemeral' && message.id === lastReceivedId && !threadList) {
    return _react["default"].createElement(StatusContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 7
      }
    }, _react["default"].createElement(DeliveredContainer, {
      testID: "delivered-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }
    }, _react["default"].createElement(DeliveredCircle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    }, _react["default"].createElement(CheckMark, {
      source: iconDeliveredUnseen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }))));
  }

  return _react["default"].createElement(StatusContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, _react["default"].createElement(Spacer, {
    testID: "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }));
};

exports.MessageStatus = MessageStatus;
//# sourceMappingURL=MessageStatus.js.map