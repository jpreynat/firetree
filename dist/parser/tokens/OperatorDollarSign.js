"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_DOLLAR_SIGN_TEST = /^\$/;
const OperatorDollarSign = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_DOLLAR_SIGN,
    value: _constants.Operators.DOLLAR_SIGN
  }),
  test: (context, data) => REGEX_OPERATOR_DOLLAR_SIGN_TEST.test(data)
};
var _default = OperatorDollarSign;
exports.default = _default;
//# sourceMappingURL=OperatorDollarSign.js.map