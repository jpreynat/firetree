"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _TokenTypes = require("../../constants/TokenTypes");

const REGEX_BYTES_TEST = /^b['"]/;
const REGEX_BYTES_TOKEN = /^b("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')/;
const Bytes = {
  parse: (context, data) => {
    const [match] = data.match(REGEX_BYTES_TOKEN);
    return {
      length: match.length,
      type: _TokenTypes.BYTES,
      value: match
    };
  },
  test: (context, data) => REGEX_BYTES_TEST.test(data)
};
var _default = Bytes;
exports.default = _default;
//# sourceMappingURL=Bytes.js.map