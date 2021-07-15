"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createListExpression = ({
  children,
  elements,
  id
}) => ({
  children,
  elements,
  id: id || (0, _uuid.v4)(),
  type: _constants.NodeTypes.LIST_EXPRESSION
});

var _default = createListExpression;
exports.default = _default;
//# sourceMappingURL=createListExpression.js.map