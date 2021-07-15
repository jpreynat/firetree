"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_UNARY_PLUS_TEST = /^\+/;
const OperatorUnaryPlus = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_UNARY_PLUS,
    value: _constants.Operators.UNARY_PLUS
  }),
  test: (context, data) => REGEX_OPERATOR_UNARY_PLUS_TEST.test(data)
};
var _default = OperatorUnaryPlus;
exports.default = _default;
//# sourceMappingURL=OperatorUnaryPlus.js.map