"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createEntry = ({
  children,
  id,
  key,
  value
}) => ({
  children,
  id: id || (0, _uuid.v4)(),
  key,
  type: _constants.NodeTypes.ENTRY,
  value
});

var _default = createEntry;
exports.default = _default;
//# sourceMappingURL=createEntry.js.map