"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_ASSIGNMENT_TEST = /^=([^=]|$)/;
const OperatorAssignment = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_ASSIGNMENT,
    value: _constants.Operators.ASSIGNMENT
  }),
  test: (context, data) => REGEX_OPERATOR_ASSIGNMENT_TEST.test(data)
};
var _default = OperatorAssignment;
exports.default = _default;
//# sourceMappingURL=OperatorAssignment.js.map