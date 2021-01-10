var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMessageDetailsForState = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _generateRandomId = require("../../../utils/generateRandomId");

var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var useMessageDetailsForState = function useMessageDetailsForState(message, initialValue) {
  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      fileUploads = _useState2[0],
      setFileUploads = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      imageUploads = _useState4[0],
      setImageUploads = _useState4[1];

  var _useState5 = (0, _react.useState)(!(0, _MessagesContext.isEditingBoolean)(message) && Array.isArray(message == null ? void 0 : message.mentioned_users) && message.mentioned_users.map(function (user) {
    return user.id;
  }) || []),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      mentionedUsers = _useState6[0],
      setMentionedUsers = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      numberOfUploads = _useState8[0],
      setNumberOfUploads = _useState8[1];

  var _useState9 = (0, _react.useState)(initialValue || ''),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      text = _useState10[0],
      setText = _useState10[1];

  (0, _react.useEffect)(function () {
    if (message && !(0, _MessagesContext.isEditingBoolean)(message)) {
      setText((message == null ? void 0 : message.text) || '');
      var newFileUploads = [];
      var newImageUploads = [];
      var attachments = Array.isArray(message.attachments) ? message.attachments : [];

      for (var _iterator = _createForOfIteratorHelperLoose(attachments), _step; !(_step = _iterator()).done;) {
        var attach = _step.value;

        if (attach.type === 'file') {
          var id = (0, _generateRandomId.generateRandomId)();
          newFileUploads.push({
            file: {
              name: attach.title || '',
              size: attach.file_size,
              type: attach.mime_type
            },
            id: id,
            state: 'finished',
            url: attach.asset_url
          });
        } else if (attach.type === 'image') {
          var _id = (0, _generateRandomId.generateRandomId)();

          newImageUploads.push({
            file: {
              name: attach.fallback
            },
            id: _id,
            state: 'finished',
            url: attach.image_url
          });
        }
      }

      if (newFileUploads.length) {
        setFileUploads(newFileUploads);
      }

      if (newImageUploads.length) {
        setImageUploads(newImageUploads);
      }
    }
  }, [message]);
  return {
    fileUploads: fileUploads,
    imageUploads: imageUploads,
    mentionedUsers: mentionedUsers,
    numberOfUploads: numberOfUploads,
    setFileUploads: setFileUploads,
    setImageUploads: setImageUploads,
    setMentionedUsers: setMentionedUsers,
    setNumberOfUploads: setNumberOfUploads,
    setText: setText,
    text: text
  };
};

exports.useMessageDetailsForState = useMessageDetailsForState;
//# sourceMappingURL=useMessageDetailsForState.js.map