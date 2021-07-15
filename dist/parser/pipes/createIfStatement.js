"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createIfStatement = ({
  children,
  id,
  test
}) => ({
  children,
  id: id || (0, _uuid.v4)(),
  test,
  type: _constants.NodeTypes.IF_STATEMENT
});

var _default = createIfStatement;
exports.default = _default;
//# sourceMappingURL=createIfStatement.js.map