"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_LOGICAL_OR_TEST = /^\|\|/;
const OperatorLogicalOr = {
  parse: () => ({
    length: 2,
    type: _constants.TokenTypes.OPERATOR_LOGICAL_OR,
    value: _constants.Operators.LOGICAL_OR
  }),
  test: (context, data) => REGEX_OPERATOR_LOGICAL_OR_TEST.test(data)
};
var _default = OperatorLogicalOr;
exports.default = _default;
//# sourceMappingURL=OperatorLogicalOr.js.map