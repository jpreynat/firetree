"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _TokenTypes = require("../../constants/TokenTypes");

const REGEX_STRING_TEST = /^['"]/;
const REGEX_STRING_TOKEN = /^("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')/;
const String = {
  parse: (context, data) => {
    const [match] = data.match(REGEX_STRING_TOKEN);
    return {
      length: match.length,
      type: _TokenTypes.STRING,
      value: match
    };
  },
  test: (context, data) => REGEX_STRING_TEST.test(data)
};
var _default = String;
exports.default = _default;
//# sourceMappingURL=String.js.map