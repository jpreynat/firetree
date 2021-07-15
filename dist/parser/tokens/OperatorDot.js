"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_DOT_TEST = /^\./;
const OperatorDot = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_DOT,
    value: _constants.Operators.DOT
  }),
  test: (context, data) => REGEX_OPERATOR_DOT_TEST.test(data)
};
var _default = OperatorDot;
exports.default = _default;
//# sourceMappingURL=OperatorDot.js.map