"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_KEYWORD_FUNCTION_TEST = new RegExp(`^${_constants.Keywords.FUNCTION}([^a-zA-Z0-9_]|$)`);
const KeywordFunction = {
  parse: () => ({
    length: _constants.Keywords.FUNCTION.length,
    type: _constants.TokenTypes.KEYWORD_FUNCTION,
    value: _constants.Keywords.FUNCTION
  }),
  test: (context, data) => REGEX_KEYWORD_FUNCTION_TEST.test(data)
};
var _default = KeywordFunction;
exports.default = _default;
//# sourceMappingURL=KeywordFunction.js.map