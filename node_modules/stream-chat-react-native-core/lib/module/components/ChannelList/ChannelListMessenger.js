var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelListMessenger = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ChannelListFooterLoadingIndicator = require("./ChannelListFooterLoadingIndicator");

var _ChannelListHeaderErrorIndicator = require("./ChannelListHeaderErrorIndicator");

var _ChannelListHeaderNetworkDownIndicator = require("./ChannelListHeaderNetworkDownIndicator");

var _ChannelPreview = require("../ChannelPreview/ChannelPreview");

var _EmptyStateIndicator = require("../Indicators/EmptyStateIndicator");

var _LoadingErrorIndicator = require("../Indicators/LoadingErrorIndicator");

var _LoadingIndicator = require("../Indicators/LoadingIndicator");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/ChannelList/ChannelListMessenger.tsx";

var ChannelListMessenger = function ChannelListMessenger(props) {
  var _props$additionalFlat = props.additionalFlatListProps,
      additionalFlatListProps = _props$additionalFlat === void 0 ? {} : _props$additionalFlat,
      channels = props.channels,
      _props$EmptyStateIndi = props.EmptyStateIndicator,
      EmptyStateIndicator = _props$EmptyStateIndi === void 0 ? _EmptyStateIndicator.EmptyStateIndicator : _props$EmptyStateIndi,
      error = props.error,
      _props$FooterLoadingI = props.FooterLoadingIndicator,
      FooterLoadingIndicator = _props$FooterLoadingI === void 0 ? _ChannelListFooterLoadingIndicator.ChannelListFooterLoadingIndicator : _props$FooterLoadingI,
      forceUpdate = props.forceUpdate,
      _props$HeaderErrorInd = props.HeaderErrorIndicator,
      HeaderErrorIndicator = _props$HeaderErrorInd === void 0 ? _ChannelListHeaderErrorIndicator.ChannelListHeaderErrorIndicator : _props$HeaderErrorInd,
      _props$HeaderNetworkD = props.HeaderNetworkDownIndicator,
      HeaderNetworkDownIndicator = _props$HeaderNetworkD === void 0 ? _ChannelListHeaderNetworkDownIndicator.ChannelListHeaderNetworkDownIndicator : _props$HeaderNetworkD,
      loadingChannels = props.loadingChannels,
      _props$LoadingErrorIn = props.LoadingErrorIndicator,
      LoadingErrorIndicator = _props$LoadingErrorIn === void 0 ? _LoadingErrorIndicator.LoadingErrorIndicator : _props$LoadingErrorIn,
      _props$LoadingIndicat = props.LoadingIndicator,
      LoadingIndicator = _props$LoadingIndicat === void 0 ? _LoadingIndicator.LoadingIndicator : _props$LoadingIndicat,
      loadingNextPage = props.loadingNextPage,
      _props$loadMoreThresh = props.loadMoreThreshold,
      loadMoreThreshold = _props$loadMoreThresh === void 0 ? 2 : _props$loadMoreThresh,
      loadNextPage = props.loadNextPage,
      refreshing = props.refreshing,
      refreshList = props.refreshList,
      reloadList = props.reloadList,
      setFlatListRef = props.setFlatListRef;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      isOnline = _useChatContext.isOnline;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  (0, _react.useEffect)(function () {
    setLoading(!!loadingChannels);
  }, [loadingChannels]);

  var HeaderIndicator = function HeaderIndicator() {
    if (loadingChannels) return null;

    if (!isOnline) {
      return _react["default"].createElement(HeaderNetworkDownIndicator, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 14
        }
      });
    } else if (error) {
      return _react["default"].createElement(HeaderErrorIndicator, {
        onPress: refreshList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 14
        }
      });
    }

    return null;
  };

  var _renderItem = function renderItem(channel) {
    return _react["default"].createElement(_ChannelPreview.ChannelPreview, (0, _extends2["default"])({}, props, {
      channel: channel,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 5
      }
    }));
  };

  if (error && !refreshing && !loadingChannels && !(channels == null ? void 0 : channels.length)) {
    return _react["default"].createElement(LoadingErrorIndicator, {
      error: error,
      listType: "channel",
      loadNextPage: loadNextPage,
      retry: reloadList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 7
      }
    });
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(HeaderIndicator, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }), _react["default"].createElement(_reactNative.FlatList, (0, _extends2["default"])({
    contentContainerStyle: {
      flexGrow: 1
    },
    data: channels,
    extraData: forceUpdate,
    keyExtractor: function keyExtractor(item) {
      return item.cid;
    },
    ListEmptyComponent: loading ? _react["default"].createElement(LoadingIndicator, {
      listType: "channel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }) : _react["default"].createElement(EmptyStateIndicator, {
      listType: "channel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }),
    ListFooterComponent: loadingNextPage ? _react["default"].createElement(FooterLoadingIndicator, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 29
      }
    }) : undefined,
    onEndReached: loadNextPage,
    onEndReachedThreshold: loadMoreThreshold,
    onRefresh: refreshList,
    ref: setFlatListRef,
    refreshing: refreshing,
    renderItem: function renderItem(_ref) {
      var item = _ref.item;
      return _renderItem(item);
    },
    style: {
      flex: 1
    },
    testID: "channel-list-messenger"
  }, additionalFlatListProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  })));
};

exports.ChannelListMessenger = ChannelListMessenger;
//# sourceMappingURL=ChannelListMessenger.js.map