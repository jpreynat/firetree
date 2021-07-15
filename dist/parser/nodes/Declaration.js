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

const Declaration = {
  identify: (context, node, ...rest) => {
    const {
      Declarations
    } = context;
    const type = (0, _ast.findIdentifier)(Declarations, node);

    if (!type) {
      throw new Error(`Could not find Declaration Identifier for ${node}`);
    }

    return type.identify(context, node, ...rest);
  },
  is: value => value.type === _constants.NodeTypes.FUNCTION_DECLARATION || value.type === _constants.NodeTypes.LET_DECLARATION,
  parse: (context, tokenList) => (0, _parseNextNode.default)(context.Declarations, context, tokenList),
  // NOTE BRN: The first token of a Declaration cannot be Whitespace or a Comment
  test: (context, tokenList) => (0, _testNextNode.default)(context.Declarations, context, tokenList)
};
var _default = Declaration;
exports.default = _default;
//# sourceMappingURL=Declaration.js.map