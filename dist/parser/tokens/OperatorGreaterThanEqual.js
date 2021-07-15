"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_GREATER_THAN_EQUAL_TEST = /^>=/;
const OperatorGreaterThanEqual = {
  parse: () => ({
    length: 2,
    type: _constants.TokenTypes.OPERATOR_GREATER_THAN_EQUAL,
    value: _constants.Operators.GREATER_THAN_EQUAL
  }),
  test: (context, data) => REGEX_OPERATOR_GREATER_THAN_EQUAL_TEST.test(data)
};
var _default = OperatorGreaterThanEqual;
exports.default = _default;
//# sourceMappingURL=OperatorGreaterThanEqual.js.map