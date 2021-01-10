var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileIcon = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../styles/styledComponents");

var _jsxFileName = "/Users/vishalnarkhede/projects/projects/stream-chat-react-native/src/components/Attachment/FileIcon.tsx";

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var iconPDF = require("../../images/PDF.png");

var iconDOC = require("../../images/DOC.png");

var iconPPT = require("../../images/PPT.png");

var iconXLS = require("../../images/XLS.png");

var iconTAR = require("../../images/TAR.png");

var Icon = _styledComponents.styled.Image(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.message.file.icon.css;
});

var wordMimeTypes = ['application/msword', 'application/msword-template', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12', 'application/vnd.oasis.opendocument.text', 'application/vnd.oasis.opendocument.text-template', 'application/vnd.oasis.opendocument.text-flat-xml'];
var excelMimeTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.oasis.opendocument.spreadsheet', 'application/vnd.oasis.opendocument.spreadsheet-template', 'application/vnd.oasis.opendocument.spreadsheet-flat-xml'];
var powerpointMimeTypes = ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.template.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12', 'application/vnd.oasis.opendocument.presentation', 'application/vnd.oasis.opendocument.presentation-template', 'application/vnd.oasis.opendocument.presentation-flat-xml'];
var archiveFileTypes = ['application/zip', 'application/x-7z-compressed', 'application/x-archive', 'application/x-tar', 'application/gzip', 'application/x-compress', 'application/x-bzip', 'application/x-lzip', 'application/x-lz4', 'application/x-lzma', 'application/x-lzop', 'application/x-xz', 'application/x-webarchive', 'application/vnd.rar'];
var codeFileTypes = ['text/html', 'text/css', 'application/x-javascript', 'application/json', 'text/x-python', 'text/x-go', 'text/x-csrc', 'text/x-c++src', 'application/x-ruby', 'text/rust', 'text/x-java', 'application/x-php', 'text/x-csharp', 'text/x-scala', 'text/x-erlang', 'application/x-shellscript'];
var mimeTypeToIconMap = {
  'application/pdf': iconPDF
};

for (var _i = 0, _wordMimeTypes = wordMimeTypes; _i < _wordMimeTypes.length; _i++) {
  var type = _wordMimeTypes[_i];
  mimeTypeToIconMap[type] = iconDOC;
}

for (var _i2 = 0, _excelMimeTypes = excelMimeTypes; _i2 < _excelMimeTypes.length; _i2++) {
  var _type = _excelMimeTypes[_i2];
  mimeTypeToIconMap[_type] = iconXLS;
}

for (var _i3 = 0, _powerpointMimeTypes = powerpointMimeTypes; _i3 < _powerpointMimeTypes.length; _i3++) {
  var _type2 = _powerpointMimeTypes[_i3];
  mimeTypeToIconMap[_type2] = iconPPT;
}

for (var _i4 = 0, _archiveFileTypes = archiveFileTypes; _i4 < _archiveFileTypes.length; _i4++) {
  var _type3 = _archiveFileTypes[_i4];
  mimeTypeToIconMap[_type3] = iconTAR;
}

for (var _i5 = 0, _codeFileTypes = codeFileTypes; _i5 < _codeFileTypes.length; _i5++) {
  var _type4 = _codeFileTypes[_i5];
  mimeTypeToIconMap[_type4] = iconDOC;
}

function mimeTypeToIcon(mimeType) {
  if (!mimeType) return iconDOC;
  var icon = mimeTypeToIconMap[mimeType];
  if (icon) return icon;
  return iconDOC;
}

var FileIcon = function FileIcon(_ref2) {
  var mimeType = _ref2.mimeType,
      size = _ref2.size;
  return React.createElement(Icon, {
    source: mimeTypeToIcon(mimeType),
    style: size ? {
      height: size,
      width: size
    } : {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 3
    }
  });
};

exports.FileIcon = FileIcon;
//# sourceMappingURL=FileIcon.js.map