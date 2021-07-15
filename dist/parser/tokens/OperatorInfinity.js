"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_INFINITY_TEST = /^∞/;
const OperatorInfinity = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_INFINITY,
    value: _constants.Operators.INFINITY
  }),
  test: (context, data) => REGEX_OPERATOR_INFINITY_TEST.test(data)
};
var _default = OperatorInfinity;
exports.default = _default;
//# sourceMappingURL=OperatorInfinity.js.map