"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _TokenTypes = require("../../constants/TokenTypes");

const REGEX_NUMBER_TEST = /^[0-9]/;
const REGEX_NUMBER_TOKEN = /^[0-9]+(\.[0-9]+)?/;
const Number = {
  parse: (context, data) => {
    const [match] = data.match(REGEX_NUMBER_TOKEN);
    return {
      length: match.length,
      type: _TokenTypes.NUMBER,
      value: match
    };
  },
  test: (context, data) => REGEX_NUMBER_TEST.test(data)
};
var _default = Number;
exports.default = _default;
//# sourceMappingURL=Number.js.map