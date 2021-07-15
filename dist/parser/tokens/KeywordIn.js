"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_KEYWORD_IN_TEST = new RegExp(`^${_constants.Keywords.IN}([^a-zA-Z0-9_]|$)`);
const KeywordIn = {
  parse: () => ({
    length: _constants.Keywords.IN.length,
    type: _constants.TokenTypes.KEYWORD_IN,
    value: _constants.Keywords.IN
  }),
  test: (context, data) => REGEX_KEYWORD_IN_TEST.test(data)
};
var _default = KeywordIn;
exports.default = _default;
//# sourceMappingURL=KeywordIn.js.map