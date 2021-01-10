var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateStaticMessage = exports.generateMessage = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _uuid = require("uuid");

var _user = require("./user");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var generateMessage = function generateMessage() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var timestamp = options.timestamp || new Date(new Date().getTime() - Math.floor(Math.random() * 100000));
  return _objectSpread({
    attachments: [],
    created_at: timestamp.toString(),
    html: '<p>regular</p>',
    id: (0, _uuid.v4)(),
    text: (0, _uuid.v4)(),
    type: 'regular',
    updated_at: timestamp.toString(),
    user: (0, _user.generateUser)()
  }, options);
};

exports.generateMessage = generateMessage;
var StreamReactNativeNamespace = '9b244ee4-7d69-4d7b-ae23-cf89e9f7b035';

var generateStaticMessage = function generateStaticMessage(seed, options, date) {
  return generateMessage(_objectSpread({
    created_at: date || '2020-04-27T13:39:49.331742Z',
    id: (0, _uuid.v5)(seed, StreamReactNativeNamespace),
    text: seed,
    updated_at: date || '2020-04-27T13:39:49.331742Z'
  }, options));
};

exports.generateStaticMessage = generateStaticMessage;
//# sourceMappingURL=message.js.map