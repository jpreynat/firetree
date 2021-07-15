"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_LOGICAL_NOT_TEST = /^\!([^=]|$)/;
const OperatorLogicalNot = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_LOGICAL_NOT,
    value: _constants.Operators.LOGICAL_NOT
  }),
  test: (context, data) => REGEX_OPERATOR_LOGICAL_NOT_TEST.test(data)
};
var _default = OperatorLogicalNot;
exports.default = _default;
//# sourceMappingURL=OperatorLogicalNot.js.map