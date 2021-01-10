var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _MessageContentContext = require("../../contexts/messageContentContext/MessageContentContext");

var _styledComponents = require("../../styles/styledComponents");

var _utils = require("../../utils/utils");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Attachment/Card.tsx";

function _templateObject7() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  height: 150px;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  background-color: ", ";\n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n  overflow: hidden;\n  width: 250px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var giphyLogo = require("../../assets/Poweredby_100px-White_VertText.png");

var Container = _styledComponents.styled.TouchableOpacity(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.light;
}, function (_ref2) {
  var alignment = _ref2.alignment;
  return alignment === 'right' ? 16 : 2;
}, function (_ref3) {
  var alignment = _ref3.alignment;
  return alignment === 'left' ? 16 : 2;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.message.card.container.css;
});

var CardCover = _styledComponents.styled.Image(_templateObject2(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.message.card.cover.css;
});

var CardFooter = _styledComponents.styled.View(_templateObject3(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.message.card.footer.css;
});

var FooterDescription = _styledComponents.styled.Text(_templateObject4(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.message.card.footer.description.css;
});

var FooterLink = _styledComponents.styled.Text(_templateObject5(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.message.card.footer.link.css;
});

var FooterLogo = _styledComponents.styled.Image(_templateObject6(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.message.card.footer.logo.css;
});

var FooterTitle = _styledComponents.styled.Text(_templateObject7(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.message.card.footer.title.css;
});

var trimUrl = function trimUrl(url) {
  return url && url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
};

var goToURL = function goToURL(url) {
  if (!url) return;

  _reactNative.Linking.canOpenURL(url).then(function (supported) {
    if (supported) {
      _reactNative.Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};

var Card = function Card(props) {
  var alignment = props.alignment,
      Cover = props.Cover,
      Footer = props.Footer,
      Header = props.Header,
      image_url = props.image_url,
      og_scrape_url = props.og_scrape_url,
      text = props.text,
      thumb_url = props.thumb_url,
      title = props.title,
      title_link = props.title_link,
      type = props.type;

  var _useMessageContentCon = (0, _MessageContentContext.useMessageContentContext)(),
      additionalTouchableProps = _useMessageContentCon.additionalTouchableProps,
      onLongPress = _useMessageContentCon.onLongPress;

  var uri = image_url || thumb_url;
  return _react["default"].createElement(Container, (0, _extends2["default"])({
    alignment: alignment,
    onLongPress: onLongPress,
    onPress: function onPress() {
      return goToURL(og_scrape_url || image_url || thumb_url);
    },
    testID: "card-attachment"
  }, additionalTouchableProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }), Header && _react["default"].createElement(Header, (0, _extends2["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 18
    }
  })), Cover && _react["default"].createElement(Cover, (0, _extends2["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  })), uri && !Cover && _react["default"].createElement(CardCover, {
    resizeMode: "cover",
    source: {
      uri: (0, _utils.makeImageCompatibleUrl)(uri)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }), Footer ? _react["default"].createElement(Footer, (0, _extends2["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  })) : _react["default"].createElement(CardFooter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: {
      backgroundColor: 'transparent'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, title && _react["default"].createElement(FooterTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 23
    }
  }, title), text && _react["default"].createElement(FooterDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 22
    }
  }, text), _react["default"].createElement(FooterLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, trimUrl(title_link || og_scrape_url))), type === 'giphy' && _react["default"].createElement(FooterLogo, {
    source: giphyLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 32
    }
  })));
};

exports.Card = Card;
//# sourceMappingURL=Card.js.map