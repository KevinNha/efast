Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = void 0;

var capitalize = function capitalize(text) {
  if (typeof text !== 'string') return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

exports.capitalize = capitalize;
//# sourceMappingURL=capitalize.js.map