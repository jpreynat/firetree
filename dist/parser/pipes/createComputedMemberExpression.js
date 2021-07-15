"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createComputedMemberExpression = ({
  children,
  id,
  object,
  property
}) => ({
  children,
  id: id || (0, _uuid.v4)(),
  object,
  property,
  type: _constants.NodeTypes.COMPUTED_MEMBER_EXPRESSION
});

var _default = createComputedMemberExpression;
exports.default = _default;
//# sourceMappingURL=createComputedMemberExpression.js.map