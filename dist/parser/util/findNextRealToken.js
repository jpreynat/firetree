"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

const findNextRealToken = (tokenList, startIndex = 0) => (0, _ramda.find)(token => token.type !== _constants.TokenTypes.WHITESPACE && token.type !== _constants.TokenTypes.COMMENT, (0, _ramda.slice)(startIndex, tokenList.size, tokenList));

var _default = findNextRealToken;
exports.default = _default;
//# sourceMappingURL=findNextRealToken.js.map