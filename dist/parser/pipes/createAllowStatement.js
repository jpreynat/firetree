"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createAllowStatement = ({
  children,
  condition,
  id,
  permissions
}) => ({
  children,
  condition,
  id: id || (0, _uuid.v4)(),
  permissions,
  type: _constants.NodeTypes.ALLOW_STATEMENT
});

var _default = createAllowStatement;
exports.default = _default;
//# sourceMappingURL=createAllowStatement.js.map