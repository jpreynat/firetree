"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _ramda = require("ramda");

var _ast = require("../../ast");

var _constants = require("../../constants");

var _generateTokenList = _interopRequireDefault(require("../../generator/generateTokenList"));

var _parseNextNode = _interopRequireDefault(require("../util/parseNextNode"));

var _testNextNode = _interopRequireDefault(require("../util/testNextNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Expression = {
  identify: (context, node, ...rest) => {
    const {
      Expressions
    } = context;
    const type = (0, _ast.findIdentifier)(Expressions, node);

    if (!type) {
      throw new Error(`Could not find Expression Node for ${node}`);
    }

    return type.identify(context, node, ...rest);
  },
  is: value => // TODO BRN: This is pretty hacky and doesn't leave room for expansion.
  // Instead it would be better if the NodeType was EXPRESSION and then
  // we had a sub expressionType
  value.type === _constants.NodeTypes.ASSIGNMENT_EXPRESSION || value.type === _constants.NodeTypes.BINARY_EXPRESSION || value.type === _constants.NodeTypes.CALL_EXPRESSION || value.type === _constants.NodeTypes.COMPUTED_MEMBER_EXPRESSION || value.type === _constants.NodeTypes.CONDITIONAL_EXPRESSION || value.type === _constants.NodeTypes.LIST_EXPRESSION || value.type === _constants.NodeTypes.MAP_EXPRESSION || value.type === _constants.NodeTypes.PARENTHESES_EXPRESSION || value.type === _constants.NodeTypes.PATH_EXPRESSION || value.type === _constants.NodeTypes.STATIC_MEMBER_EXPRESSION || value.type === _constants.NodeTypes.UNARY_EXPRESSION,
  parse: (context, tokenList, prevExpression = null) => {
    let expression = (0, _parseNextNode.default)(context.Expressions, context, tokenList, prevExpression);
    let parsedTokenList = (0, _generateTokenList.default)(context, {
      ast: expression
    });
    let nextTokenList = (0, _ramda.slice)(parsedTokenList.size, tokenList.size, tokenList);

    while ((0, _testNextNode.default)(context.Expressions, context, nextTokenList, expression)) {
      expression = (0, _parseNextNode.default)(context.Expressions, context, nextTokenList, expression);
      parsedTokenList = (0, _generateTokenList.default)(context, {
        ast: expression
      });
      nextTokenList = (0, _ramda.slice)(parsedTokenList.size, tokenList.size, tokenList);
    }

    return expression;
  },
  // NOTE BRN: The first token of an Expression cannot be Whitespace or a Comment
  test: (context, tokenList, prevExpression = null) => (0, _testNextNode.default)(context.Expressions, context, tokenList, prevExpression)
};
var _default = Expression;
exports.default = _default;
//# sourceMappingURL=Expression.js.map