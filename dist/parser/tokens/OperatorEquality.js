"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_EQUALITY_TEST = /^==/;
const OperatorEquality = {
  parse: () => ({
    length: 2,
    type: _constants.TokenTypes.OPERATOR_EQUALITY,
    value: _constants.Operators.EQUALITY
  }),
  test: (context, data) => REGEX_OPERATOR_EQUALITY_TEST.test(data)
};
var _default = OperatorEquality;
exports.default = _default;
//# sourceMappingURL=OperatorEquality.js.map