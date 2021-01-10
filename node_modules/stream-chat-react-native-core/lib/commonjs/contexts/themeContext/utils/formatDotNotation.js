var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDotNotation = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _set = _interopRequireDefault(require("lodash/set"));

var formatDotNotation = function formatDotNotation(_ref) {
  var formattedStyle = _ref.formattedStyle,
      modifiedTheme = _ref.modifiedTheme;

  if ((0, _isPlainObject["default"])(formattedStyle)) {
    var themeDiff = {};

    for (var k in formattedStyle) {
      if ((0, _get["default"])(modifiedTheme, k)) {
        (0, _merge["default"])(themeDiff, (0, _set["default"])({}, k, formattedStyle[k]));
      } else {
        throw Error("Unknown theme key " + k);
      }
    }

    return themeDiff;
  }

  return modifiedTheme;
};

exports.formatDotNotation = formatDotNotation;
//# sourceMappingURL=formatDotNotation.js.map