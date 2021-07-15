"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_GREATER_THAN_TEST = /^>([^=]|$)/;
const OperatorGreaterThan = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_GREATER_THAN,
    value: _constants.Operators.GREATER_THAN
  }),
  test: (context, data) => REGEX_OPERATOR_GREATER_THAN_TEST.test(data)
};
var _default = OperatorGreaterThan;
exports.default = _default;
//# sourceMappingURL=OperatorGreaterThan.js.map