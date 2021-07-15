"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_LOGICAL_AND_TEST = /^&&/;
const OperatorLogicalAnd = {
  parse: () => ({
    length: 2,
    type: _constants.TokenTypes.OPERATOR_LOGICAL_AND,
    value: _constants.Operators.LOGICAL_AND
  }),
  test: (context, data) => REGEX_OPERATOR_LOGICAL_AND_TEST.test(data)
};
var _default = OperatorLogicalAnd;
exports.default = _default;
//# sourceMappingURL=OperatorLogicalAnd.js.map