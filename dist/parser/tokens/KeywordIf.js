"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_KEYWORD_IF_TEST = new RegExp(`^${_constants.Keywords.IF}([^a-zA-Z0-9_]|$)`);
const KeywordIf = {
  parse: () => ({
    length: _constants.Keywords.IF.length,
    type: _constants.TokenTypes.KEYWORD_IF,
    value: _constants.Keywords.IF
  }),
  test: (context, data) => REGEX_KEYWORD_IF_TEST.test(data)
};
var _default = KeywordIf;
exports.default = _default;
//# sourceMappingURL=KeywordIf.js.map