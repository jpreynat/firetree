"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createAllowKeyword = ({
  id,
  tokenList
}) => ({
  id: id || (0, _uuid.v4)(),
  name: _constants.Keywords.ALLOW,
  tokenList,
  type: _constants.NodeTypes.KEYWORD
});

var _default = createAllowKeyword;
exports.default = _default;
//# sourceMappingURL=createAllowKeyword.js.map