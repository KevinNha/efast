var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attachment = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _AttachmentActions = require("./AttachmentActions");

var _Card = require("./Card");

var _FileAttachment = require("./FileAttachment");

var _FileIcon = require("./FileIcon");

var _Gallery = require("./Gallery");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Attachment/Attachment.tsx";

var Attachment = function Attachment(props) {
  var _attachment$actions;

  var actionHandler = props.actionHandler,
      _props$alignment = props.alignment,
      alignment = _props$alignment === void 0 ? 'right' : _props$alignment,
      attachment = props.attachment,
      _props$AttachmentActi = props.AttachmentActions,
      AttachmentActions = _props$AttachmentActi === void 0 ? _AttachmentActions.AttachmentActions : _props$AttachmentActi,
      _props$AttachmentFile = props.AttachmentFileIcon,
      AttachmentFileIcon = _props$AttachmentFile === void 0 ? _FileIcon.FileIcon : _props$AttachmentFile,
      _props$Card = props.Card,
      Card = _props$Card === void 0 ? _Card.Card : _props$Card,
      CardCover = props.CardCover,
      CardFooter = props.CardFooter,
      CardHeader = props.CardHeader,
      _props$FileAttachment = props.FileAttachment,
      FileAttachment = _props$FileAttachment === void 0 ? _FileAttachment.FileAttachment : _props$FileAttachment,
      _props$Gallery = props.Gallery,
      Gallery = _props$Gallery === void 0 ? _Gallery.Gallery : _props$Gallery,
      GiphyProps = props.Giphy,
      groupStyle = props.groupStyle,
      UrlPreviewProps = props.UrlPreview;

  if (!attachment) {
    return null;
  }

  var Giphy = GiphyProps || Card;
  var UrlPreview = UrlPreviewProps || Card;
  var cardProps = {
    Cover: CardCover ? CardCover : undefined,
    Footer: CardFooter ? CardFooter : undefined,
    Header: CardHeader ? CardHeader : undefined
  };
  var hasAttachmentActions = !!((_attachment$actions = attachment.actions) == null ? void 0 : _attachment$actions.length);

  if (attachment.type === 'giphy' || attachment.type === 'imgur') {
    if (hasAttachmentActions) {
      return _react["default"].createElement(_reactNative.View, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 9
        }
      }, _react["default"].createElement(Giphy, (0, _extends2["default"])({
        alignment: alignment
      }, attachment, cardProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }
      })), _react["default"].createElement(AttachmentActions, (0, _extends2["default"])({
        actionHandler: actionHandler,
        key: "key-actions-" + attachment.id
      }, attachment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }
      })));
    } else {
      return _react["default"].createElement(Giphy, (0, _extends2["default"])({
        alignment: alignment
      }, attachment, cardProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 14
        }
      }));
    }
  }

  if ((attachment.title_link || attachment.og_scrape_url) && (attachment.image_url || attachment.thumb_url)) {
    return _react["default"].createElement(UrlPreview, (0, _extends2["default"])({
      alignment: alignment
    }, attachment, cardProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 7
      }
    }));
  }

  if (attachment.type === 'image') {
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Gallery, {
      alignment: alignment,
      images: [attachment],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }
    }), hasAttachmentActions && _react["default"].createElement(AttachmentActions, (0, _extends2["default"])({
      actionHandler: actionHandler,
      key: "key-actions-" + attachment.id
    }, attachment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 11
      }
    })));
  }

  if (attachment.type === 'file' || attachment.type === 'audio') {
    return _react["default"].createElement(FileAttachment, {
      actionHandler: actionHandler,
      alignment: alignment,
      attachment: attachment,
      AttachmentActions: AttachmentActions,
      AttachmentFileIcon: AttachmentFileIcon,
      groupStyle: groupStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 7
      }
    });
  }

  if (attachment.type === 'video' && attachment.asset_url && attachment.image_url) {
    return _react["default"].createElement(Card, (0, _extends2["default"])({
      alignment: alignment
    }, attachment, cardProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 7
      }
    }));
  }

  if (hasAttachmentActions) {
    return _react["default"].createElement(_reactNative.View, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 7
      }
    }, _react["default"].createElement(Card, (0, _extends2["default"])({
      alignment: alignment
    }, attachment, cardProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }
    })), _react["default"].createElement(AttachmentActions, (0, _extends2["default"])({
      actionHandler: actionHandler,
      key: "key-actions-" + attachment.id
    }, attachment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }
    })));
  } else {
    return _react["default"].createElement(Card, (0, _extends2["default"])({
      alignment: alignment
    }, attachment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 12
      }
    }));
  }
};

exports.Attachment = Attachment;
//# sourceMappingURL=Attachment.js.map