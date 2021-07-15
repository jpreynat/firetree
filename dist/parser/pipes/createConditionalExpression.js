"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createConditionalExpression = ({
  alternate,
  children,
  consequent,
  id,
  test
}) => ({
  alternate,
  children,
  consequent,
  id: id || (0, _uuid.v4)(),
  test,
  type: _constants.NodeTypes.CONDITIONAL_EXPRESSION
});

var _default = createConditionalExpression;
exports.default = _default;
//# sourceMappingURL=createConditionalExpression.js.map