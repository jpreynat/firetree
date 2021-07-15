"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createPathPartVariable = ({
  children,
  id,
  identifier
}) => ({
  children,
  id: id || (0, _uuid.v4)(),
  identifier,
  type: _constants.NodeTypes.PATH_PART_VARIABLE
});

var _default = createPathPartVariable;
exports.default = _default;
//# sourceMappingURL=createPathPartVariable.js.map