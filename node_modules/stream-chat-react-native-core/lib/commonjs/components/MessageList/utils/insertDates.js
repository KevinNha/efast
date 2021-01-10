var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertDates = exports.isDateSeparator = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var isDateSeparator = function isDateSeparator(message) {
  return message.type === 'message.date';
};

exports.isDateSeparator = isDateSeparator;

var insertDates = function insertDates(messages) {
  var newMessages = [];

  if (messages.length === 0) {
    return newMessages;
  }

  for (var _iterator = _createForOfIteratorHelperLoose(messages.entries()), _step; !(_step = _iterator()).done;) {
    var _ref = _step.value;

    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2);

    var i = _ref2[0];
    var message = _ref2[1];

    if (message.type === 'message.read' || message.deleted_at) {
      newMessages.push(message);
      continue;
    }

    var messageDate = message.created_at.getDay();
    var prevMessageDate = i < messages.length - 1 ? messages[i + 1].created_at.getDay() : messageDate;

    if (i === 0) {
      newMessages.push({
        date: message.created_at,
        type: 'message.date'
      }, message);
    } else if (messageDate !== prevMessageDate) {
      newMessages.push(message, {
        date: messages[i + 1].created_at,
        type: 'message.date'
      });
    } else {
      newMessages.push(message);
    }
  }

  return newMessages;
};

exports.insertDates = insertDates;
//# sourceMappingURL=insertDates.js.map