"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createFunctionDeclaration = ({
  body,
  children,
  id,
  identifier,
  params
}) => ({
  body,
  children,
  id: id || (0, _uuid.v4)(),
  identifier,
  params,
  type: _constants.NodeTypes.FUNCTION_DECLARATION
});

var _default = createFunctionDeclaration;
exports.default = _default;
//# sourceMappingURL=createFunctionDeclaration.js.map