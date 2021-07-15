"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_AT_SIGN_TEST = /^@/;
const OperatorAtSign = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_AT_SIGN,
    value: _constants.Operators.AT_SIGN
  }),
  test: (context, data) => REGEX_OPERATOR_AT_SIGN_TEST.test(data)
};
var _default = OperatorAtSign;
exports.default = _default;
//# sourceMappingURL=OperatorAtSign.js.map