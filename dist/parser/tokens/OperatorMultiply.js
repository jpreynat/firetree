"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_MULTIPLY_TEST = /^\*/;
const OperatorMultiply = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_MULTIPLY,
    value: _constants.Operators.MULTIPLY
  }),
  test: (context, data) => REGEX_OPERATOR_MULTIPLY_TEST.test(data)
};
var _default = OperatorMultiply;
exports.default = _default;
//# sourceMappingURL=OperatorMultiply.js.map