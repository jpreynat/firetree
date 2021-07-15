"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createIfKeyword = ({
  id,
  tokenList
}) => ({
  id: id || (0, _uuid.v4)(),
  name: _constants.Keywords.IF,
  tokenList,
  type: _constants.NodeTypes.KEYWORD
});

var _default = createIfKeyword;
exports.default = _default;
//# sourceMappingURL=createIfKeyword.js.map