"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createInOperator = ({
  id,
  tokenList
}) => ({
  id: id || (0, _uuid.v4)(),
  name: _constants.Keywords.IN,
  tokenList,
  type: _constants.NodeTypes.OPERATOR
});

var _default = createInOperator;
exports.default = _default;
//# sourceMappingURL=createInOperator.js.map