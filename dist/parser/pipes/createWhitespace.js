"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createWhitespace = ({
  id,
  tokenList
}) => ({
  id: id || (0, _uuid.v4)(),
  tokenList,
  type: _constants.NodeTypes.WHITESPACE
});

var _default = createWhitespace;
exports.default = _default;
//# sourceMappingURL=createWhitespace.js.map