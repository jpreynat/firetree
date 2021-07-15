"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_BACKWARD_SLASH_TEST = /^\\/;
const OperatorBackwardSlash = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_BACKWARD_SLASH,
    value: _constants.Operators.BACKWARD_SLASH
  }),
  test: (context, data) => REGEX_OPERATOR_BACKWARD_SLASH_TEST.test(data)
};
var _default = OperatorBackwardSlash;
exports.default = _default;
//# sourceMappingURL=OperatorBackwardSlash.js.map