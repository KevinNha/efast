var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ = require("..");

var NetInfo = {
  addEventListener: function addEventListener() {},
  fetch: function () {
    var _fetch = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return undefined;

            case 2:
              return _context.abrupt("return", true);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function fetch() {
      return _fetch.apply(this, arguments);
    }

    return fetch;
  }()
};
(0, _.registerNativeHandlers)({
  NetInfo: NetInfo
});
//# sourceMappingURL=register-react-native-web.js.map