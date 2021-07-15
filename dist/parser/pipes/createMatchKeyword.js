"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createMatchKeyword = ({
  id,
  tokenList
}) => ({
  id: id || (0, _uuid.v4)(),
  name: _constants.Keywords.MATCH,
  tokenList,
  type: _constants.NodeTypes.KEYWORD
});

var _default = createMatchKeyword;
exports.default = _default;
//# sourceMappingURL=createMatchKeyword.js.map