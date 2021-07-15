"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_COMMA_TEST = /^,/;
const OperatorComma = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_COMMA,
    value: _constants.Operators.COMMA
  }),
  test: (context, data) => REGEX_OPERATOR_COMMA_TEST.test(data)
};
var _default = OperatorComma;
exports.default = _default;
//# sourceMappingURL=OperatorComma.js.map