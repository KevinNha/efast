var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = exports.Colors = exports.BASE_FONT_SIZE = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var BASE_FONT_SIZE = 16;
exports.BASE_FONT_SIZE = BASE_FONT_SIZE;
var Colors = {
  danger: '#EDD8DD',
  light: '#EBEBEB',
  primary: '#006cff',
  secondary: '#111',
  textDark: 'rgba(0,0,0,1)',
  textGrey: 'rgba(0,0,0,0.5)',
  textLight: 'white',
  transparent: 'transparent'
};
exports.Colors = Colors;
var defaultTheme = {
  avatar: {
    container: {},
    fallback: {},
    image: {},
    text: {}
  },
  channelListFooterLoadingIndicator: {
    container: {}
  },
  channelListHeaderErrorIndicator: {
    container: {},
    errorText: {}
  },
  channelListHeaderNetworkDownIndicator: {
    container: {},
    errorText: {}
  },
  channelPreview: {
    container: {},
    date: {},
    details: {},
    detailsTop: {},
    message: {
      color: '#767676',
      fontWeight: 'normal',
      unreadColor: '#000',
      unreadFontWeight: 'bold'
    },
    title: {}
  },
  closeButton: {
    container: {}
  },
  colors: _objectSpread({}, Colors),
  iconBadge: {
    container: {},
    icon: {},
    iconInner: {},
    unreadCount: {}
  },
  iconSquare: {
    container: {}
  },
  loadingErrorIndicator: {
    container: {},
    errorText: {},
    retryText: {}
  },
  loadingIndicator: {
    container: {},
    loadingText: {}
  },
  message: {
    actions: {
      button: {
        defaultBackgroundColor: 'white',
        defaultBorderColor: 'transparent',
        primaryBackgroundColor: Colors.primary,
        primaryBorderColor: Colors.light
      },
      buttonText: {
        defaultColor: 'black',
        primaryColor: 'white'
      },
      container: {}
    },
    actionSheet: {
      buttonContainer: {},
      buttonText: {},
      cancelButtonContainer: {},
      cancelButtonText: {},
      titleContainer: {},
      titleText: {}
    },
    avatarWrapper: {
      container: {},
      spacer: {}
    },
    card: {
      container: {},
      cover: {},
      footer: {
        description: {},
        link: {},
        logo: {},
        title: {}
      }
    },
    container: {},
    content: {
      container: {
        borderRadiusL: 16,
        borderRadiusS: 2
      },
      containerInner: {},
      deletedContainer: {},
      deletedText: {},
      errorContainer: {
        backgroundColor: Colors.danger
      },
      markdown: {},
      metaContainer: {},
      metaText: {},
      textContainer: {
        borderRadiusL: 16,
        borderRadiusS: 2,
        leftBorderColor: 'rgba(0, 0, 0, 0.08)',
        leftBorderWidth: 0.5,
        rightBorderColor: 'transparent',
        rightBorderWidth: 0
      }
    },
    file: {
      container: {},
      details: {},
      icon: {},
      size: {},
      title: {}
    },
    gallery: {
      doubleSize: 240,
      galleryContainer: {},
      halfSize: 80,
      header: {
        button: {},
        container: {}
      },
      imageContainer: {},
      single: {},
      size: 120,
      width: 240
    },
    reactionList: {
      container: {},
      reactionCount: {}
    },
    reactionPicker: {
      column: {},
      container: {},
      containerView: {},
      emoji: {},
      reactionCount: {},
      text: {}
    },
    replies: {
      container: {},
      image: {},
      messageRepliesText: {}
    },
    status: {
      checkMark: {},
      deliveredCircle: {},
      deliveredContainer: {},
      readByContainer: {},
      readByCount: {},
      sendingContainer: {},
      sendingImage: {},
      spacer: {}
    }
  },
  messageInput: {
    actionSheet: {
      buttonContainer: {},
      buttonText: {},
      titleContainer: {},
      titleText: {}
    },
    attachButton: {},
    attachButtonIcon: {},
    container: {
      conditionalPadding: 20
    },
    editingBoxContainer: {},
    editingBoxHeader: {},
    editingBoxHeaderTitle: {},
    fileUploadPreview: {
      attachmentContainerView: {},
      attachmentView: {},
      container: {},
      dismiss: {},
      dismissImage: {},
      filenameText: {},
      itemContainer: {}
    },
    imageUploadPreview: {
      container: {},
      dismiss: {},
      dismissImage: {},
      itemContainer: {},
      upload: {}
    },
    inputBox: {},
    inputBoxContainer: {},
    sendButton: {},
    sendButtonIcon: {},
    suggestions: {
      command: {
        args: {},
        container: {},
        description: {},
        title: {},
        top: {}
      },
      container: {
        itemHeight: 50,
        maxHeight: 250
      },
      item: {},
      mention: {
        container: {},
        name: {}
      },
      separator: {},
      title: {},
      wrapper: {}
    },
    uploadProgressIndicator: {
      container: {},
      overlay: {}
    }
  },
  messageList: {
    dateSeparator: {
      container: {},
      date: {},
      dateText: {},
      line: {}
    },
    errorNotification: {},
    errorNotificationText: {},
    eventIndicator: {
      date: {},
      memberUpdateContainer: {},
      memberUpdateText: {},
      memberUpdateTextContainer: {}
    },
    listContainer: {},
    messageNotification: {
      container: {},
      text: {}
    },
    messageSystem: {
      container: {},
      dateText: {},
      line: {},
      text: {},
      textContainer: {}
    },
    typingIndicatorContainer: {}
  },
  spinner: {},
  thread: {
    newThread: {
      text: {}
    }
  },
  typingIndicator: {
    container: {},
    text: {
      color: Colors.textGrey,
      fontSize: 14
    }
  }
};
exports.defaultTheme = defaultTheme;
//# sourceMappingURL=themeConstants.js.map