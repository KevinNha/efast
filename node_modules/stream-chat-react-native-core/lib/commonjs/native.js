Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerNativeHandlers = exports.pickDocument = exports.pickImage = exports.NetInfo = void 0;

var fail = function fail() {
  throw Error('Native handler was not registered, you should import stream-chat-expo or stream-chat-react-native');
};

var NetInfo = {
  addEventListener: fail,
  fetch: fail
};
exports.NetInfo = NetInfo;
var pickImage = fail;
exports.pickImage = pickImage;
var pickDocument = fail;
exports.pickDocument = pickDocument;

var registerNativeHandlers = function registerNativeHandlers(handlers) {
  if (handlers.NetInfo) {
    exports.NetInfo = NetInfo = handlers.NetInfo;
  }

  if (handlers.pickImage) {
    exports.pickImage = pickImage = handlers.pickImage;
  }

  if (handlers.pickDocument) {
    exports.pickDocument = pickDocument = handlers.pickDocument;
  }
};

exports.registerNativeHandlers = registerNativeHandlers;
//# sourceMappingURL=native.js.map