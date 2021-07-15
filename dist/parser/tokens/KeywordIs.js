"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_KEYWORD_IS_TEST = new RegExp(`^${_constants.Keywords.IS}([^a-zA-Z0-9_]|$)`);
const KeywordIs = {
  parse: () => ({
    length: _constants.Keywords.IS.length,
    type: _constants.TokenTypes.KEYWORD_IS,
    value: _constants.Keywords.IS
  }),
  test: (context, data) => REGEX_KEYWORD_IS_TEST.test(data)
};
var _default = KeywordIs;
exports.default = _default;
//# sourceMappingURL=KeywordIs.js.map