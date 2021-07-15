"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createUnaryExpression = ({
  argument,
  children,
  id,
  operator
}) => ({
  argument,
  children,
  id: id || (0, _uuid.v4)(),
  operator,
  type: _constants.NodeTypes.UNARY_EXPRESSION
});

var _default = createUnaryExpression;
exports.default = _default;
//# sourceMappingURL=createUnaryExpression.js.map