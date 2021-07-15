"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_AMPERSAND_TEST = /^&([^&]|$)/;
const OperatorAmpersand = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_AMPERSAND,
    value: _constants.Operators.AMPERSAND
  }),
  test: (context, data) => REGEX_OPERATOR_AMPERSAND_TEST.test(data)
};
var _default = OperatorAmpersand;
exports.default = _default;
//# sourceMappingURL=OperatorAmpersand.js.map