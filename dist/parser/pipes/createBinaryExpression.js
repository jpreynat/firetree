"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createBinaryExpression = ({
  children,
  id,
  left,
  operator,
  right
}) => ({
  children,
  id: id || (0, _uuid.v4)(),
  left,
  operator,
  right,
  type: _constants.NodeTypes.BINARY_EXPRESSION
});

var _default = createBinaryExpression;
exports.default = _default;
//# sourceMappingURL=createBinaryExpression.js.map