"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_KEYWORD_ALLOW_TEST = new RegExp(`^${_constants.Keywords.ALLOW}([^a-zA-Z0-9_]|$)`);
const KeywordAllow = {
  parse: () => ({
    length: _constants.Keywords.ALLOW.length,
    type: _constants.TokenTypes.KEYWORD_ALLOW,
    value: _constants.Keywords.ALLOW
  }),
  test: (context, data) => REGEX_KEYWORD_ALLOW_TEST.test(data)
};
var _default = KeywordAllow;
exports.default = _default;
//# sourceMappingURL=KeywordAllow.js.map