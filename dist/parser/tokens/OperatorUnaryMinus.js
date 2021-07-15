"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_UNARY_MINUS_TEST = /^-/;
const OperatorUnaryMinus = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_UNARY_MINUS,
    value: _constants.Operators.UNARY_MINUS
  }),
  test: (context, data) => REGEX_OPERATOR_UNARY_MINUS_TEST.test(data)
};
var _default = OperatorUnaryMinus;
exports.default = _default;
//# sourceMappingURL=OperatorUnaryMinus.js.map