"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createPathPartExpression = ({
  children,
  expression,
  id
}) => ({
  children,
  expression,
  id: id || (0, _uuid.v4)(),
  type: _constants.NodeTypes.PATH_PART_EXPRESSION
});

var _default = createPathPartExpression;
exports.default = _default;
//# sourceMappingURL=createPathPartExpression.js.map