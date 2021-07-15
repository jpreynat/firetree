"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const REGEX_OPERATOR_QUESTION_MARK_TEST = /^\?/;
const OperatorQuestionMark = {
  parse: () => ({
    length: 1,
    type: _constants.TokenTypes.OPERATOR_QUESTION_MARK,
    value: _constants.Operators.QUESTION_MARK
  }),
  test: (context, data) => REGEX_OPERATOR_QUESTION_MARK_TEST.test(data)
};
var _default = OperatorQuestionMark;
exports.default = _default;
//# sourceMappingURL=OperatorQuestionMark.js.map