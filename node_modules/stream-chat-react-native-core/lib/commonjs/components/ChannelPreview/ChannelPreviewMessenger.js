var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreviewMessenger = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _truncate = _interopRequireDefault(require("lodash/truncate"));

var _useChannelPreviewDisplayName = require("./hooks/useChannelPreviewDisplayName");

var _useChannelPreviewDisplayAvatar = require("./hooks/useChannelPreviewDisplayAvatar");

var _Avatar = require("../Avatar/Avatar");

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/ChannelPreview/ChannelPreviewMessenger.tsx";

function _templateObject6() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  font-size: 14px;\n  font-weight: bold;\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: ", ";\n  font-size: 13px;\n  font-weight: ", ";\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  flex-direction: row;\n  justify-content: space-between;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  flex: 1;\n  padding-left: 10px;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  color: #767676;\n  font-size: 11px;\n  text-align: right;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  border-bottom-color: #ebebeb;\n  border-bottom-width: 1px;\n  flex-direction: row;\n  padding: 10px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styledComponents.styled.TouchableOpacity(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.channelPreview.container.css;
});

var Date = _styledComponents.styled.Text(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.channelPreview.date.css;
});

var Details = _styledComponents.styled.View(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.channelPreview.details.css;
});

var DetailsTop = _styledComponents.styled.View(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.channelPreview.detailsTop.css;
});

var StyledMessage = _styledComponents.styled.Text(_templateObject5(), function (_ref5) {
  var theme = _ref5.theme,
      unread = _ref5.unread;
  return unread ? theme.channelPreview.message.unreadColor : theme.channelPreview.message.color;
}, function (_ref6) {
  var theme = _ref6.theme,
      unread = _ref6.unread;
  return unread ? theme.channelPreview.message.unreadFontWeight : theme.channelPreview.message.fontWeight;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.channelPreview.message.css;
});

var Title = _styledComponents.styled.Text(_templateObject6(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.channelPreview.title.css;
});

var ChannelPreviewMessenger = function ChannelPreviewMessenger(props) {
  var _latestMessagePreview, _latestMessagePreview2;

  var channel = props.channel,
      formatLatestMessageDate = props.formatLatestMessageDate,
      _props$latestMessageL = props.latestMessageLength,
      latestMessageLength = _props$latestMessageL === void 0 ? 30 : _props$latestMessageL,
      latestMessagePreview = props.latestMessagePreview,
      setActiveChannel = props.setActiveChannel,
      unread = props.unread;
  var displayAvatar = (0, _useChannelPreviewDisplayAvatar.useChannelPreviewDisplayAvatar)(channel);
  var displayName = (0, _useChannelPreviewDisplayName.useChannelPreviewDisplayName)(channel);
  var latestMessageDate = latestMessagePreview == null ? void 0 : (_latestMessagePreview = latestMessagePreview.messageObject) == null ? void 0 : (_latestMessagePreview2 = _latestMessagePreview.created_at) == null ? void 0 : _latestMessagePreview2.asMutable();
  return _react["default"].createElement(Container, {
    onPress: function onPress() {
      return setActiveChannel == null ? void 0 : setActiveChannel(channel);
    },
    testID: "channel-preview-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, _react["default"].createElement(_Avatar.Avatar, {
    image: displayAvatar.image,
    name: displayAvatar.name,
    size: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }), _react["default"].createElement(Details, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, _react["default"].createElement(DetailsTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, _react["default"].createElement(Title, {
    ellipsizeMode: "tail",
    numberOfLines: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, displayName), _react["default"].createElement(Date, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, formatLatestMessageDate && latestMessageDate ? formatLatestMessageDate(latestMessageDate) : latestMessagePreview == null ? void 0 : latestMessagePreview.created_at)), _react["default"].createElement(StyledMessage, {
    unread: unread,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, (latestMessagePreview == null ? void 0 : latestMessagePreview.text) && (0, _truncate["default"])(latestMessagePreview.text.replace(/\n/g, ' '), {
    length: latestMessageLength
  }))));
};

exports.ChannelPreviewMessenger = ChannelPreviewMessenger;
//# sourceMappingURL=ChannelPreviewMessenger.js.map