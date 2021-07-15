"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createFunctionKeyword = ({
  id,
  tokenList
}) => ({
  id: id || (0, _uuid.v4)(),
  name: _constants.Keywords.FUNCTION,
  tokenList,
  type: _constants.NodeTypes.KEYWORD
});

var _default = createFunctionKeyword;
exports.default = _default;
//# sourceMappingURL=createFunctionKeyword.js.map