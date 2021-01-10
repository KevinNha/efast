var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceCssShorthand = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

var _themeConstants = require("../../../styles/themeConstants");

var replaceCssShorthand = function replaceCssShorthand(style) {
  var path = [];

  var replaceCssShorthandInternal = function replaceCssShorthandInternal(styleInternal) {
    if ((0, _isPlainObject["default"])(styleInternal)) {
      var mapped = (0, _mapValues["default"])(styleInternal, function (styleItem, key) {
        path.push(key);
        return replaceCssShorthandInternal(styleItem);
      });
      path.pop();
      return mapped;
    }

    if ((0, _isPlainObject["default"])((0, _get["default"])(_themeConstants.defaultTheme, path.join('.')))) {
      path.pop();
      return {
        css: styleInternal
      };
    }

    path.pop();
    return styleInternal;
  };

  return replaceCssShorthandInternal(style);
};

exports.replaceCssShorthand = replaceCssShorthand;
//# sourceMappingURL=replaceCssShorthand.js.map