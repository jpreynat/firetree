"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_COLON_TEST = /^:/;
const OperatorColon = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_COLON,
    value: _constants.Operators.COLON
  }),
  test: (context, data) => REGEX_OPERATOR_COLON_TEST.test(data)
};
var _default = OperatorColon;
exports.default = _default;
//# sourceMappingURL=OperatorColon.js.map