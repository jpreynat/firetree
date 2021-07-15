"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_INEQUALITY_TEST = /^\!=/;
const OperatorInequality = {
  parse: () => ({
    length: 2,
    type: _constants.TokenTypes.OPERATOR_INEQUALITY,
    value: _constants.Operators.INEQUALITY
  }),
  test: (context, data) => REGEX_OPERATOR_INEQUALITY_TEST.test(data)
};
var _default = OperatorInequality;
exports.default = _default;
//# sourceMappingURL=OperatorInequality.js.map