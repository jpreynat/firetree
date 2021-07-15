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

const Operator = {
  identify: (context, node, ...rest) => {
    const {
      Operators
    } = context;
    const type = (0, _ast.findIdentifier)(Operators, node);

    if (!type) {
      throw new Error(`Could not find Operator Identifier for ${node}`);
    }

    return type.identify(context, node, ...rest);
  },
  is: value => value.type === _constants.NodeTypes.OPERATOR,
  parse: (context, tokenList, prevExpression = null) => (0, _parseNextNode.default)(context.Operators, context, tokenList, prevExpression),
  test: (context, tokenList, prevExpression = null) => (0, _testNextNode.default)(context.Operators, context, tokenList, prevExpression)
};
var _default = Operator;
exports.default = _default;
//# sourceMappingURL=Operator.js.map