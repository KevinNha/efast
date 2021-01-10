Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomId = void 0;

var generateRandomId = function generateRandomId() {
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};

exports.generateRandomId = generateRandomId;

var S4 = function S4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
};
//# sourceMappingURL=generateRandomId.js.map