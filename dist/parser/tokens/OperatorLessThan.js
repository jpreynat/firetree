"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_LESS_THAN_TEST = /^<([^=]|$)/;
const OperatorLessThan = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_LESS_THAN,
    value: _constants.Operators.LESS_THAN
  }),
  test: (context, data) => REGEX_OPERATOR_LESS_THAN_TEST.test(data)
};
var _default = OperatorLessThan;
exports.default = _default;
//# sourceMappingURL=OperatorLessThan.js.map