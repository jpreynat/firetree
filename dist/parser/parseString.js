"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _parseTokenList = _interopRequireDefault(require("./parseTokenList"));

var _tokenizeString = _interopRequireDefault(require("./tokenizeString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parseString = async (context, string) => {
  const tokenList = await (0, _tokenizeString.default)(context, string);
  return (0, _parseTokenList.default)(context, tokenList);
};

var _default = parseString;
exports.default = _default;
//# sourceMappingURL=parseString.js.map