"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _uuid = require("uuid");

var _constants = require("../../constants");

var _util = require("../util");

const UnaryMinusOperator = {
  identify: (context, node) => node,
  is: value => value && value.type === _constants.NodeTypes.OPERATOR && value.operatorType === _constants.OperatorTypes.UNARY_MINUS,
  parse: (context, tokenList) => {
    const nextToken = tokenList.get(0);

    if (!nextToken) {
      throw new Error(`Expected operator '${_constants.Operators.UNARY_MINUS}'. Instead reached the end of the file.`);
    }

    if (nextToken.type !== _constants.TokenTypes.OPERATOR_UNARY_MINUS) {
      const {
        lastLineCharacterCount,
        lineCount
      } = (0, _util.getTokenListPosition)(context, tokenList);
      throw new Error(`Expected operator '${_constants.Operators.UNARY_MINUS}'. Instead was given '${tokenList.get(0).value}' at ${lineCount}:${lastLineCharacterCount}`);
    }

    return {
      id: (0, _uuid.v4)(),
      operatorType: _constants.OperatorTypes.UNARY_MINUS,
      tokenList: (0, _ramda.slice)(0, 1, tokenList),
      type: _constants.NodeTypes.OPERATOR,
      value: nextToken.value
    };
  },
  test: (context, tokenList) => tokenList.get(0).type === _constants.TokenTypes.OPERATOR_UNARY_MINUS,
  type: _constants.ParserTypes.OPERATOR
};
var _default = UnaryMinusOperator;
exports.default = _default;
//# sourceMappingURL=UnaryMinusOperator.js.map