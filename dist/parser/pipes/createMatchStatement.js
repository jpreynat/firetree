"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

const createMatchStatement = ({
  body,
  children,
  path
}) => ({
  body,
  children,
  path,
  type: _constants.NodeTypes.MATCH_STATEMENT
});

var _default = createMatchStatement;
exports.default = _default;
//# sourceMappingURL=createMatchStatement.js.map