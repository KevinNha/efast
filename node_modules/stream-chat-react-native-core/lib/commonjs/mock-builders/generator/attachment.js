var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateGiphyAttachment = exports.generateImgurAttachment = exports.generateCardAttachment = exports.generateFileUploadPreview = exports.generateFileAttachment = exports.generateAudioAttachment = exports.generateImageUploadPreview = exports.generateImageAttachment = exports.generateVideoAttachment = exports.generateAttachmentAction = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _uuid = require("uuid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var image_url = 'http://www.jackblack.com/tenac_iousd.bmp';

var generateAttachmentAction = function generateAttachmentAction(a) {
  return _objectSpread({
    name: (0, _uuid.v4)(),
    text: (0, _uuid.v4)(),
    value: (0, _uuid.v4)()
  }, a);
};

exports.generateAttachmentAction = generateAttachmentAction;

var generateVideoAttachment = function generateVideoAttachment(a) {
  return _objectSpread({
    asset_url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    mime_type: 'video/mp4',
    title: (0, _uuid.v4)(),
    type: 'media'
  }, a);
};

exports.generateVideoAttachment = generateVideoAttachment;

var generateImageAttachment = function generateImageAttachment(a) {
  return _objectSpread({
    image_url: (0, _uuid.v4)(),
    text: (0, _uuid.v4)(),
    thumb_url: (0, _uuid.v4)(),
    title: (0, _uuid.v4)(),
    title_link: 'https://getstream.io',
    type: 'image'
  }, a);
};

exports.generateImageAttachment = generateImageAttachment;

var generateImageUploadPreview = function generateImageUploadPreview(a) {
  return _objectSpread({
    file: {
      uri: image_url
    },
    id: (0, _uuid.v4)(),
    state: 'uploaded'
  }, a);
};

exports.generateImageUploadPreview = generateImageUploadPreview;

var generateAudioAttachment = function generateAudioAttachment(a) {
  return _objectSpread({
    asset_url: 'http://www.jackblack.com/tribute.mp3',
    description: (0, _uuid.v4)(),
    image_url: image_url,
    text: (0, _uuid.v4)(),
    title: (0, _uuid.v4)(),
    type: 'audio'
  }, a);
};

exports.generateAudioAttachment = generateAudioAttachment;

var generateFileAttachment = function generateFileAttachment(a) {
  return _objectSpread({
    asset_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: (0, _uuid.v4)(),
    file_size: 1337,
    mime_type: (0, _uuid.v4)(),
    text: (0, _uuid.v4)(),
    title: (0, _uuid.v4)(),
    type: 'file'
  }, a);
};

exports.generateFileAttachment = generateFileAttachment;

var generateFileUploadPreview = function generateFileUploadPreview(a) {
  return _objectSpread({
    file: _objectSpread({
      name: 'dummy.pdf',
      type: 'file'
    }, a),
    id: (0, _uuid.v4)(),
    state: 'uploaded'
  }, a);
};

exports.generateFileUploadPreview = generateFileUploadPreview;

var generateCardAttachment = function generateCardAttachment(a) {
  return _objectSpread({
    image_url: image_url,
    og_scrape_url: (0, _uuid.v4)(),
    text: (0, _uuid.v4)(),
    thumb_url: image_url,
    title: (0, _uuid.v4)(),
    title_link: (0, _uuid.v4)()
  }, a);
};

exports.generateCardAttachment = generateCardAttachment;

var generateImgurAttachment = function generateImgurAttachment() {
  return generateCardAttachment({
    type: 'imgur'
  });
};

exports.generateImgurAttachment = generateImgurAttachment;

var generateGiphyAttachment = function generateGiphyAttachment() {
  return generateCardAttachment({
    type: 'giphy'
  });
};

exports.generateGiphyAttachment = generateGiphyAttachment;
//# sourceMappingURL=attachment.js.map