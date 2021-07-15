"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_KEYWORD_SERVICE_TEST = new RegExp(`^${_constants.Keywords.SERVICE}([^a-zA-Z0-9_]|$)`);
const KeywordService = {
  parse: () => ({
    length: _constants.Keywords.SERVICE.length,
    type: _constants.TokenTypes.KEYWORD_SERVICE,
    value: _constants.Keywords.SERVICE
  }),
  test: (context, data) => REGEX_KEYWORD_SERVICE_TEST.test(data)
};
var _default = KeywordService;
exports.default = _default;
//# sourceMappingURL=KeywordService.js.map