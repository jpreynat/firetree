"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_KEYWORD_RETURN_TEST = new RegExp(`^${_constants.Keywords.RETURN}([^a-zA-Z0-9_]|$)`);
const KeywordReturn = {
  parse: () => ({
    length: _constants.Keywords.RETURN.length,
    type: _constants.TokenTypes.KEYWORD_RETURN,
    value: _constants.Keywords.RETURN
  }),
  test: (context, data) => REGEX_KEYWORD_RETURN_TEST.test(data)
};
var _default = KeywordReturn;
exports.default = _default;
//# sourceMappingURL=KeywordReturn.js.map