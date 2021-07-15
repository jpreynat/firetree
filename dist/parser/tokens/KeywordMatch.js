"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_KEYWORD_MATCH_TEST = new RegExp(`^${_constants.Keywords.MATCH}([^a-zA-Z0-9_]|$)`);
const KeywordMatch = {
  parse: () => ({
    length: _constants.Keywords.MATCH.length,
    type: _constants.TokenTypes.KEYWORD_MATCH,
    value: _constants.Keywords.MATCH
  }),
  test: (context, data) => REGEX_KEYWORD_MATCH_TEST.test(data)
};
var _default = KeywordMatch;
exports.default = _default;
//# sourceMappingURL=KeywordMatch.js.map