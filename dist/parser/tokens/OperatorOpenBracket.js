"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_OPEN_BRACKET_TEST = /^\[/;
const OperatorOpenBracket = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_OPEN_BRACKET,
    value: _constants.Operators.OPEN_BRACKET
  }),
  test: (context, data) => REGEX_OPERATOR_OPEN_BRACKET_TEST.test(data)
};
var _default = OperatorOpenBracket;
exports.default = _default;
//# sourceMappingURL=OperatorOpenBracket.js.map