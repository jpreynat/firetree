"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_SEMICOLON_TEST = /^;/;
const OperatorSemicolon = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_SEMICOLON,
    value: _constants.Operators.SEMICOLON
  }),
  test: (context, data) => REGEX_OPERATOR_SEMICOLON_TEST.test(data)
};
var _default = OperatorSemicolon;
exports.default = _default;
//# sourceMappingURL=OperatorSemicolon.js.map