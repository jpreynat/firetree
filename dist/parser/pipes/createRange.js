"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createRange = ({
  children,
  end,
  id,
  start
}) => ({
  children,
  end,
  id: id || (0, _uuid.v4)(),
  start,
  type: _constants.NodeTypes.RANGE
});

var _default = createRange;
exports.default = _default;
//# sourceMappingURL=createRange.js.map