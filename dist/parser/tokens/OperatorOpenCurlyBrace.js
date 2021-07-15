"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_OPEN_CURLY_BRACE_TEST = /^{/;
const OperatorOpenCurlyBrace = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_OPEN_CURLY_BRACE,
    value: _constants.Operators.OPEN_CURLY_BRACE
  }),
  test: (context, data) => REGEX_OPERATOR_OPEN_CURLY_BRACE_TEST.test(data)
};
var _default = OperatorOpenCurlyBrace;
exports.default = _default;
//# sourceMappingURL=OperatorOpenCurlyBrace.js.map