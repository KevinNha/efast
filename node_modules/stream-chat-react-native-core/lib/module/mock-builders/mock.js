var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomInt = exports.getTestClientWithUser = exports.getTestClient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _streamChat = require("stream-chat");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var apiKey = 'API_KEY';
var token = 'dummy_token';

var setUser = function setUser(client, user) {
  return new Promise(function (resolve) {
    client.connectionId = 'dumm_connection_id';
    client.user = user;
    client.user.mutes = [];
    client._user = _objectSpread({}, user);
    client.userID = user.id;
    client.userToken = token;
    resolve();
  });
};

function mockClient(client) {
  jest.spyOn(client, '_setToken').mockImplementation();
  jest.spyOn(client, '_setupConnection').mockImplementation();
  client.tokenManager = {
    getToken: jest.fn(function () {
      return token;
    }),
    tokenReady: jest.fn(function () {
      return true;
    })
  };
  client.setUser = setUser.bind(null, client);
  return client;
}

var getTestClient = function getTestClient() {
  return mockClient(new _streamChat.StreamChat(apiKey));
};

exports.getTestClient = getTestClient;

var getTestClientWithUser = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(user) {
    var client;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = mockClient(new _streamChat.StreamChat(apiKey));
            _context.next = 3;
            return setUser(client, user);

          case 3:
            client.wsPromise = Promise.resolve();
            return _context.abrupt("return", client);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTestClientWithUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTestClientWithUser = getTestClientWithUser;

var getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

exports.getRandomInt = getRandomInt;
//# sourceMappingURL=mock.js.map