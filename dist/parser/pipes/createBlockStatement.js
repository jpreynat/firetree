"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createBlockStatement = ({
  body,
  children,
  id
}) => ({
  body,
  children,
  id: id || (0, _uuid.v4)(),
  type: _constants.NodeTypes.BLOCK_STATEMENT
});

var _default = createBlockStatement;
exports.default = _default;
//# sourceMappingURL=createBlockStatement.js.map