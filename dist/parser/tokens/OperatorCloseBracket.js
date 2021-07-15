"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_CLOSE_BRACKET_TEST = /^\]/;
const OperatorCloseBracket = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_CLOSE_BRACKET,
    value: _constants.Operators.CLOSE_BRACKET
  }),
  test: (context, data) => REGEX_OPERATOR_CLOSE_BRACKET_TEST.test(data)
};
var _default = OperatorCloseBracket;
exports.default = _default;
//# sourceMappingURL=OperatorCloseBracket.js.map