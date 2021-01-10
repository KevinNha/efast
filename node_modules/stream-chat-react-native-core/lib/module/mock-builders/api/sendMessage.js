Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessageApi = void 0;

var _utils = require("./utils");

var sendMessageApi = function sendMessageApi() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var result = {
    message: message
  };
  return (0, _utils.mockedApiResponse)(result, 'post');
};

exports.sendMessageApi = sendMessageApi;
//# sourceMappingURL=sendMessage.js.map