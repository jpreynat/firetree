"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createExpressionStatement = ({
  children,
  expression,
  id
}) => ({
  children,
  expression,
  id: id || (0, _uuid.v4)(),
  type: _constants.NodeTypes.EXPRESSION_STATEMENT
});

var _default = createExpressionStatement;
exports.default = _default;
//# sourceMappingURL=createExpressionStatement.js.map