"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_CLOSE_PARENTHESIS_TEST = /^\)/;
const OperatorCloseParenthesis = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_CLOSE_PARENTHESIS,
    value: _constants.Operators.CLOSE_PARENTHESIS
  }),
  test: (context, data) => REGEX_OPERATOR_CLOSE_PARENTHESIS_TEST.test(data)
};
var _default = OperatorCloseParenthesis;
exports.default = _default;
//# sourceMappingURL=OperatorCloseParenthesis.js.map