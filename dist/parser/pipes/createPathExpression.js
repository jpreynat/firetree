"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createPathExpression = ({
  children,
  id,
  path
}) => ({
  children,
  id: id || (0, _uuid.v4)(),
  path,
  type: _constants.NodeTypes.PATH_EXPRESSION
});

var _default = createPathExpression;
exports.default = _default;
//# sourceMappingURL=createPathExpression.js.map