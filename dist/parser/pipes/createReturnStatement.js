"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createReturnStatement = ({
  argument,
  children,
  id
}) => ({
  argument,
  children,
  id: id || (0, _uuid.v4)(),
  type: _constants.NodeTypes.RETURN_STATEMENT
});

var _default = createReturnStatement;
exports.default = _default;
//# sourceMappingURL=createReturnStatement.js.map