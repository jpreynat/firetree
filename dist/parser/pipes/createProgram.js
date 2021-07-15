"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createProgram = ({
  body,
  children,
  id
}) => ({
  body,
  children,
  id: id || (0, _uuid.v4)(),
  type: _constants.NodeTypes.PROGRAM
});

var _default = createProgram;
exports.default = _default;
//# sourceMappingURL=createProgram.js.map