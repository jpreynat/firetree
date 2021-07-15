"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _tokenizeFile = _interopRequireDefault(require("./tokenizeFile"));

var _tokenizeString = _interopRequireDefault(require("./tokenizeString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tokenize = async (context, {
  filePath,
  string
}) => {
  if (filePath) {
    return (0, _tokenizeFile.default)(context, filePath);
  }

  return (0, _tokenizeString.default)(context, string);
};

var _default = tokenize;
exports.default = _default;
//# sourceMappingURL=tokenize.js.map