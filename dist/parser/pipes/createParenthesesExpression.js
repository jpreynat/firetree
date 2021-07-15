"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createParenthesesExpression = ({
  children,
  expression,
  id
}) => ({
  children,
  expression,
  id: id || (0, _uuid.v4)(),
  type: _constants.NodeTypes.PARENTHESES_EXPRESSION
});

var _default = createParenthesesExpression;
exports.default = _default;
//# sourceMappingURL=createParenthesesExpression.js.map