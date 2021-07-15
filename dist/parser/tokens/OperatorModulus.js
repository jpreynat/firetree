"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_MODULUS_TEST = /^%/;
const OperatorModulus = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_MODULUS,
    value: _constants.Operators.MODULUS
  }),
  test: (context, data) => REGEX_OPERATOR_MODULUS_TEST.test(data)
};
var _default = OperatorModulus;
exports.default = _default;
//# sourceMappingURL=OperatorModulus.js.map