"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_LESS_THAN_EQUAL_TEST = /^<=/;
const OperatorLessThanEqual = {
  parse: () => ({
    length: 2,
    type: _constants.TokenTypes.OPERATOR_LESS_THAN_EQUAL,
    value: _constants.Operators.LESS_THAN_EQUAL
  }),
  test: (context, data) => REGEX_OPERATOR_LESS_THAN_EQUAL_TEST.test(data)
};
var _default = OperatorLessThanEqual;
exports.default = _default;
//# sourceMappingURL=OperatorLessThanEqual.js.map