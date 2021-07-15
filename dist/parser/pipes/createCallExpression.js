"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createCallExpression = ({
  args,
  callee,
  children,
  id
}) => ({
  args,
  callee,
  children,
  id: id || (0, _uuid.v4)(),
  type: _constants.NodeTypes.CALL_EXPRESSION
});

var _default = createCallExpression;
exports.default = _default;
//# sourceMappingURL=createCallExpression.js.map