"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

const findNextRealTokenIndex = (tokenList, startIndex = 0) => (0, _ramda.find)(tokenIndex => {
  const token = tokenList.get(tokenIndex);
  return token.type !== _constants.TokenTypes.WHITESPACE && token.type !== _constants.TokenTypes.COMMENT;
}, startIndex === 0 ? tokenList.keySeq().toArray() : (0, _ramda.slice)(startIndex, tokenList.size, tokenList).keySeq().toArray());

var _default = findNextRealTokenIndex;
exports.default = _default;
//# sourceMappingURL=findNextRealTokenIndex.js.map