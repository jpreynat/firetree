"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createStaticMemberExpression = ({
  children,
  id,
  object,
  property
}) => ({
  children,
  id: id || (0, _uuid.v4)(),
  object,
  property,
  type: _constants.NodeTypes.STATIC_MEMBER_EXPRESSION
});

var _default = createStaticMemberExpression;
exports.default = _default;
//# sourceMappingURL=createStaticMemberExpression.js.map