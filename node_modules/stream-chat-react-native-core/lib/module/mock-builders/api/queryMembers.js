Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryMembersApi = void 0;

var _utils = require("./utils");

var queryMembersApi = function queryMembersApi() {
  var members = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var result = {
    members: members
  };
  return (0, _utils.mockedApiResponse)(result, 'get');
};

exports.queryMembersApi = queryMembersApi;
//# sourceMappingURL=queryMembers.js.map