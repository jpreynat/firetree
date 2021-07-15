"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_KEYWORD_LET_TEST = new RegExp(`^${_constants.Keywords.LET}([^a-zA-Z0-9_]|$)`);
const KeywordLet = {
  parse: () => ({
    length: _constants.Keywords.LET.length,
    type: _constants.TokenTypes.KEYWORD_LET,
    value: _constants.Keywords.LET
  }),
  test: (context, data) => REGEX_KEYWORD_LET_TEST.test(data)
};
var _default = KeywordLet;
exports.default = _default;
//# sourceMappingURL=KeywordLet.js.map