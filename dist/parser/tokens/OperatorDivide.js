"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_DIVIDE_TEST = /^\//;
const OperatorDivide = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_DIVIDE,
    value: _constants.Operators.DIVIDE
  }),
  test: (context, data) => REGEX_OPERATOR_DIVIDE_TEST.test(data)
};
var _default = OperatorDivide;
exports.default = _default;
//# sourceMappingURL=OperatorDivide.js.map