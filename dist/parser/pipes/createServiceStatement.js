"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createServiceStatement = ({
  body,
  children,
  id,
  name
}) => ({
  body,
  children,
  id: id || (0, _uuid.v4)(),
  name,
  type: _constants.NodeTypes.SERVICE_STATEMENT
});

var _default = createServiceStatement;
exports.default = _default;
//# sourceMappingURL=createServiceStatement.js.map