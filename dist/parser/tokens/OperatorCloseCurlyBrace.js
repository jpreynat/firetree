"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_CLOSE_CURLY_BRACE_TEST = /^}/;
const OperatorCloseCurlyBrace = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_CLOSE_CURLY_BRACE,
    value: _constants.Operators.CLOSE_CURLY_BRACE
  }),
  test: (context, data) => REGEX_OPERATOR_CLOSE_CURLY_BRACE_TEST.test(data)
};
var _default = OperatorCloseCurlyBrace;
exports.default = _default;
//# sourceMappingURL=OperatorCloseCurlyBrace.js.map