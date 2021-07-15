"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createLessThanOperator = ({
  id,
  tokenList
}) => ({
  id: id || (0, _uuid.v4)(),
  operatorType: _constants.OperatorTypes.LESS_THAN,
  tokenList,
  type: _constants.NodeTypes.OPERATOR,
  value: tokenList.get(0).value
});

var _default = createLessThanOperator;
exports.default = _default;
//# sourceMappingURL=createLessThanOperator.js.map