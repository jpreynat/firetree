"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createIsOperator = ({
  id,
  tokenList
}) => ({
  id: id || (0, _uuid.v4)(),
  name: _constants.Keywords.IS,
  tokenList,
  type: _constants.NodeTypes.OPERATOR
});

var _default = createIsOperator;
exports.default = _default;
//# sourceMappingURL=createIsOperator.js.map