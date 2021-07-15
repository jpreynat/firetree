"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _ramda = require("ramda");

var _constants = require("../../constants");

const REGEX_KEYWORDS = (0, _ramda.join)('|', (0, _ramda.map)(keyword => `${keyword}([^a-zA-Z0-9_]|$)`, (0, _ramda.values)(_constants.Keywords)));
const REGEX_IDENTIFIER_TEST = new RegExp(`^(?!${REGEX_KEYWORDS})[a-zA-Z_][a-zA-Z0-9_]*`);
const REGEX_IDENTIFIER_TOKEN = new RegExp(`^(?!${REGEX_KEYWORDS})[a-zA-Z_][a-zA-Z0-9_]*`);
const Identifier = {
  parse: (context, data) => {
    const [match] = data.match(REGEX_IDENTIFIER_TOKEN);
    return {
      length: match.length,
      type: _constants.TokenTypes.IDENTIFIER,
      value: match
    };
  },
  test: (context, data) => REGEX_IDENTIFIER_TEST.test(data)
};
var _default = Identifier;
exports.default = _default;
//# sourceMappingURL=Identifier.js.map