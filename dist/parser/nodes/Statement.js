"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _ast = require("../../ast");

var _constants = require("../../constants");

var _parseNextNode = _interopRequireDefault(require("../util/parseNextNode"));

var _testNextNode = _interopRequireDefault(require("../util/testNextNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Statement = {
  identify: (context, node, ...rest) => {
    const {
      Statements
    } = context;
    const type = (0, _ast.findIdentifier)(Statements, node);

    if (!type) {
      throw new Error(`Could not find Statement Identifier for ${node}`);
    }

    return type.identify(context, node, ...rest);
  },
  is: value => // TODO BRN: This is pretty hacky and doesn't leave room for expansion.
  // Instead it would be better if the NodeType was EXPRESSION and then
  // we had a sub expressionType
  value.type === _constants.NodeTypes.ALLOW_STATEMENT || // value.type === NodeTypes.BLOCK_STATEMENT ||
  value.type === _constants.NodeTypes.EXPRESSION_STATEMENT || value.type === _constants.NodeTypes.IF_STATEMENT || value.type === _constants.NodeTypes.MATCH_STATEMENT || value.type === _constants.NodeTypes.RETURN_STATEMENT || value.type === _constants.NodeTypes.SERVICE_STATEMENT,
  parse: (context, tokenList) => {
    return (0, _parseNextNode.default)(context.Statements, context, tokenList);
  },
  // NOTE BRN: The first token of a Statement cannot be Whitespace or a Comment
  test: (context, tokenList) => (0, _testNextNode.default)(context.Statements, context, tokenList)
};
var _default = Statement;
exports.default = _default;
//# sourceMappingURL=Statement.js.map