"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _TokenTypes = require("../../constants/TokenTypes");

const REGEX_WHITESPACE_TEST = /^\s/;
const REGEX_WHITESPACE_TOKEN = /^\s+/;
const Whitespace = {
  parse: (context, data) => {
    const [match] = data.match(REGEX_WHITESPACE_TOKEN);
    return {
      length: match.length,
      type: _TokenTypes.WHITESPACE,
      value: match
    };
  },
  test: (context, data) => REGEX_WHITESPACE_TEST.test(data)
};
var _default = Whitespace;
exports.default = _default;
//# sourceMappingURL=Whitespace.js.map