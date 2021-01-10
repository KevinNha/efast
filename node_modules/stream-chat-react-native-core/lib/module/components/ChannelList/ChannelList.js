var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ChannelListMessenger = require("./ChannelListMessenger");

var _useAddedToChannelNotification = require("./hooks/listeners/useAddedToChannelNotification");

var _useChannelDeleted = require("./hooks/listeners/useChannelDeleted");

var _useChannelHidden = require("./hooks/listeners/useChannelHidden");

var _useChannelTruncated = require("./hooks/listeners/useChannelTruncated");

var _useChannelUpdated = require("./hooks/listeners/useChannelUpdated");

var _useConnectionRecovered = require("./hooks/listeners/useConnectionRecovered");

var _useNewMessage = require("./hooks/listeners/useNewMessage");

var _useNewMessageNotification = require("./hooks/listeners/useNewMessageNotification");

var _usePaginatedChannels2 = require("./hooks/usePaginatedChannels");

var _useRemovedFromChannelNotification = require("./hooks/listeners/useRemovedFromChannelNotification");

var _useUserPresence = require("./hooks/listeners/useUserPresence");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/ChannelList/ChannelList.tsx";
var DEFAULT_FILTERS = {};
var DEFAULT_OPTIONS = {};
var DEFAULT_SORT = {};

var ChannelList = function ChannelList(props) {
  var _props$filters = props.filters,
      filters = _props$filters === void 0 ? DEFAULT_FILTERS : _props$filters,
      _props$List = props.List,
      List = _props$List === void 0 ? _ChannelListMessenger.ChannelListMessenger : _props$List,
      _props$lockChannelOrd = props.lockChannelOrder,
      lockChannelOrder = _props$lockChannelOrd === void 0 ? false : _props$lockChannelOrd,
      onAddedToChannel = props.onAddedToChannel,
      onChannelDeleted = props.onChannelDeleted,
      onChannelHidden = props.onChannelHidden,
      onChannelTruncated = props.onChannelTruncated,
      onChannelUpdated = props.onChannelUpdated,
      onMessageNew = props.onMessageNew,
      onRemovedFromChannel = props.onRemovedFromChannel,
      onSelect = props.onSelect,
      _props$options = props.options,
      options = _props$options === void 0 ? DEFAULT_OPTIONS : _props$options,
      _setFlatListRef = props.setFlatListRef,
      _props$sort = props.sort,
      sort = _props$sort === void 0 ? DEFAULT_SORT : _props$sort;
  var listRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      forceUpdate = _useState2[0],
      setForceUpdate = _useState2[1];

  var _usePaginatedChannels = (0, _usePaginatedChannels2.usePaginatedChannels)({
    filters: filters,
    options: options,
    sort: sort
  }),
      channels = _usePaginatedChannels.channels,
      hasNextPage = _usePaginatedChannels.hasNextPage,
      loadNextPage = _usePaginatedChannels.loadNextPage,
      refreshList = _usePaginatedChannels.refreshList,
      reloadList = _usePaginatedChannels.reloadList,
      setChannels = _usePaginatedChannels.setChannels,
      status = _usePaginatedChannels.status;

  (0, _react.useEffect)(function () {
    refreshList();
  }, [forceUpdate]);
  (0, _useAddedToChannelNotification.useAddedToChannelNotification)({
    onAddedToChannel: onAddedToChannel,
    setChannels: setChannels
  });
  (0, _useChannelDeleted.useChannelDeleted)({
    onChannelDeleted: onChannelDeleted,
    setChannels: setChannels
  });
  (0, _useChannelHidden.useChannelHidden)({
    onChannelHidden: onChannelHidden,
    setChannels: setChannels
  });
  (0, _useChannelTruncated.useChannelTruncated)({
    onChannelTruncated: onChannelTruncated,
    setChannels: setChannels,
    setForceUpdate: setForceUpdate
  });
  (0, _useChannelUpdated.useChannelUpdated)({
    onChannelUpdated: onChannelUpdated,
    setChannels: setChannels
  });
  (0, _useConnectionRecovered.useConnectionRecovered)({
    setForceUpdate: setForceUpdate
  });
  (0, _useNewMessage.useNewMessage)({
    lockChannelOrder: lockChannelOrder,
    setChannels: setChannels
  });
  (0, _useNewMessageNotification.useNewMessageNotification)({
    onMessageNew: onMessageNew,
    setChannels: setChannels
  });
  (0, _useRemovedFromChannelNotification.useRemovedFromChannelNotification)({
    onRemovedFromChannel: onRemovedFromChannel,
    setChannels: setChannels
  });
  (0, _useUserPresence.useUserPresence)({
    setChannels: setChannels
  });
  return _react["default"].createElement(List, (0, _extends2["default"])({}, props, {
    channels: channels,
    error: status.error,
    forceUpdate: forceUpdate,
    hasNextPage: hasNextPage,
    loadingChannels: status.loadingChannels,
    loadingNextPage: status.loadingNextPage,
    loadNextPage: loadNextPage,
    refreshing: status.refreshing,
    refreshList: refreshList,
    reloadList: reloadList,
    setActiveChannel: onSelect,
    setFlatListRef: function setFlatListRef(ref) {
      listRef.current = ref;
      _setFlatListRef && _setFlatListRef(ref);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 5
    }
  }));
};

exports.ChannelList = ChannelList;
//# sourceMappingURL=ChannelList.js.map