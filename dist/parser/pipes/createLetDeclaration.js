"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createLetDeclaration = ({
  children,
  id,
  identifier,
  init,
  operator
}) => ({
  children,
  id: id || (0, _uuid.v4)(),
  identifier,
  init,
  operator,
  type: _constants.NodeTypes.LET_DECLARATION
});

var _default = createLetDeclaration;
exports.default = _default;
//# sourceMappingURL=createLetDeclaration.js.map