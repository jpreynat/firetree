"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_OPEN_PARENTHESIS_TEST = /^\(/;
const OperatorOpenParenthesis = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_OPEN_PARENTHESIS,
    value: _constants.Operators.OPEN_PARENTHESIS
  }),
  test: (context, data) => REGEX_OPERATOR_OPEN_PARENTHESIS_TEST.test(data)
};
var _default = OperatorOpenParenthesis;
exports.default = _default;
//# sourceMappingURL=OperatorOpenParenthesis.js.map