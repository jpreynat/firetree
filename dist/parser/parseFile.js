"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _parseTokenList = _interopRequireDefault(require("./parseTokenList"));

var _tokenizeFile = _interopRequireDefault(require("./tokenizeFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parseFile = async (context, filePath) => {
  const tokenList = await (0, _tokenizeFile.default)(context, filePath);
  return (0, _parseTokenList.default)(context, tokenList);
};

var _default = parseFile;
exports.default = _default;
//# sourceMappingURL=parseFile.js.map