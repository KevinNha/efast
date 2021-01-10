var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileAttachmentGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Attachment = require("./Attachment");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Attachment/FileAttachmentGroup.tsx";

var FileAttachmentGroup = function FileAttachmentGroup(props) {
  var alignment = props.alignment,
      AttachmentActions = props.AttachmentActions,
      AttachmentFileIcon = props.AttachmentFileIcon,
      FileAttachment = props.FileAttachment,
      files = props.files,
      handleAction = props.handleAction,
      messageId = props.messageId;
  return _react["default"].createElement(_reactNative.View, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, files.length && files.map(function (file, index) {
    var groupStyle = files.length === 1 ? 'single' : index === 0 ? 'top' : index < files.length - 1 && index > 0 ? 'middle' : index === files.length - 1 ? 'bottom' : 'single';
    return _react["default"].createElement(_Attachment.Attachment, {
      actionHandler: handleAction,
      alignment: alignment,
      attachment: file,
      AttachmentActions: AttachmentActions,
      AttachmentFileIcon: AttachmentFileIcon,
      FileAttachment: FileAttachment,
      groupStyle: groupStyle,
      key: messageId + "-" + index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    });
  }));
};

exports.FileAttachmentGroup = FileAttachmentGroup;
//# sourceMappingURL=FileAttachmentGroup.js.map