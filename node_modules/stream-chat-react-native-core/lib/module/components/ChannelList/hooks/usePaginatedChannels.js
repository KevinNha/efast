var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePaginatedChannels = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _utils = require("../utils");

var _ChatContext = require("../../../contexts/chatContext/ChatContext");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var wait = function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};

var usePaginatedChannels = function usePaginatedChannels(_ref) {
  var _ref$filters = _ref.filters,
      filters = _ref$filters === void 0 ? {} : _ref$filters,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$sort = _ref.sort,
      sort = _ref$sort === void 0 ? {} : _ref$sort;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      channels = _useState2[0],
      setChannels = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      hasNextPage = _useState6[0],
      setHasNextPage = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      loadingChannels = _useState8[0],
      setLoadingChannels = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      loadingNextPage = _useState10[0],
      setLoadingNextPage = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      offset = _useState12[0],
      setOffset = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      refreshing = _useState14[0],
      setRefreshing = _useState14[1];

  var lastRefresh = (0, _react.useRef)(Date.now());

  var queryChannels = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var _options$limit;

      var queryType,
          retryCount,
          newOptions,
          channelQueryResponse,
          newChannels,
          _args = arguments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              queryType = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
              retryCount = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;

              if (!(loadingChannels || loadingNextPage || refreshing)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              if (queryType === 'reload') {
                setLoadingChannels(true);
              } else if (queryType === 'refresh') {
                setRefreshing(true);
              } else if (!queryType) {
                setLoadingNextPage(true);
              }

              newOptions = _objectSpread({
                limit: (_options$limit = options == null ? void 0 : options.limit) != null ? _options$limit : _utils.MAX_QUERY_CHANNELS_LIMIT,
                offset: queryType === 'reload' || queryType === 'refresh' ? 0 : offset
              }, options);
              _context.prev = 6;
              _context.next = 9;
              return client.queryChannels(filters, sort, newOptions);

            case 9:
              channelQueryResponse = _context.sent;

              if (queryType === 'reload' || queryType === 'refresh') {
                newChannels = channelQueryResponse;
              } else {
                newChannels = [].concat((0, _toConsumableArray2["default"])(channels), (0, _toConsumableArray2["default"])(channelQueryResponse));
              }

              setChannels(newChannels);
              setHasNextPage(channelQueryResponse.length >= newOptions.limit);
              setOffset(newChannels.length);
              setError(false);
              _context.next = 28;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](6);
              _context.next = 21;
              return wait(2000);

            case 21:
              if (!(retryCount === 3)) {
                _context.next = 27;
                break;
              }

              setLoadingChannels(false);
              setLoadingNextPage(false);
              setRefreshing(false);
              console.warn(_context.t0);
              return _context.abrupt("return", setError(true));

            case 27:
              return _context.abrupt("return", queryChannels(queryType, retryCount + 1));

            case 28:
              setLoadingChannels(false);
              setLoadingNextPage(false);
              setRefreshing(false);

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 17]]);
    }));

    return function queryChannels() {
      return _ref2.apply(this, arguments);
    };
  }();

  var loadNextPage = hasNextPage ? queryChannels : undefined;

  var refreshList = function refreshList() {
    var now = Date.now();

    if (now - lastRefresh.current < 5000 && !error) {
      return;
    }

    lastRefresh.current = Date.now();
    return queryChannels('refresh');
  };

  var reloadList = function reloadList() {
    return queryChannels('reload');
  };

  (0, _react.useEffect)(function () {
    if (client) {
      reloadList();
    }
  }, [filters]);
  return {
    channels: channels,
    hasNextPage: hasNextPage,
    loadNextPage: loadNextPage,
    refreshList: refreshList,
    reloadList: reloadList,
    setChannels: setChannels,
    status: {
      error: error,
      loadingChannels: loadingChannels,
      loadingNextPage: loadingNextPage,
      refreshing: refreshing
    }
  };
};

exports.usePaginatedChannels = usePaginatedChannels;
//# sourceMappingURL=usePaginatedChannels.js.map