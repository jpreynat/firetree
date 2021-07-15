"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_TILDE_TEST = /^~/;
const OperatorTilde = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_TILDE,
    value: _constants.Operators.TILDE
  }),
  test: (context, data) => REGEX_OPERATOR_TILDE_TEST.test(data)
};
var _default = OperatorTilde;
exports.default = _default;
//# sourceMappingURL=OperatorTilde.js.map