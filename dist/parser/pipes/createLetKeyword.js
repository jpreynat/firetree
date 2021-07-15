"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createLetKeyword = ({
  id,
  tokenList
}) => ({
  id: id || (0, _uuid.v4)(),
  name: _constants.Keywords.LET,
  tokenList,
  type: _constants.NodeTypes.KEYWORD
});

var _default = createLetKeyword;
exports.default = _default;
//# sourceMappingURL=createLetKeyword.js.map