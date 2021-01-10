var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.erroredDeleteApi = exports.erroredPutApi = exports.erroredPostApi = exports.erroredGetApi = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultErrorObject = {
  duration: 0.01,
  exception_fields: {},
  message: 'API resulted in error'
};

var erroredGetApi = function erroredGetApi() {
  var customError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var error = _objectSpread(_objectSpread({}, defaultErrorObject), customError);

  return (0, _utils.mockedApiResponse)(error, 'get', 500);
};

exports.erroredGetApi = erroredGetApi;

var erroredPostApi = function erroredPostApi() {
  var customError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var error = _objectSpread(_objectSpread({}, defaultErrorObject), customError);

  return (0, _utils.mockedApiResponse)(error, 'post', 500);
};

exports.erroredPostApi = erroredPostApi;

var erroredPutApi = function erroredPutApi() {
  var customError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var error = _objectSpread(_objectSpread({}, defaultErrorObject), customError);

  return (0, _utils.mockedApiResponse)(error, 'put', 500);
};

exports.erroredPutApi = erroredPutApi;

var erroredDeleteApi = function erroredDeleteApi() {
  var customError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var error = _objectSpread(_objectSpread({}, defaultErrorObject), customError);

  return (0, _utils.mockedApiResponse)(error, 'delete', 500);
};

exports.erroredDeleteApi = erroredDeleteApi;
//# sourceMappingURL=error.js.map