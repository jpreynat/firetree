"use strict";

require("core-js/modules/es.array.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pino = _interopRequireDefault(require("pino"));

var _ramda = require("ramda");

var _constants = require("../constants");

var Nodes = _interopRequireWildcard(require("../parser/nodes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NamedNodes = (0, _ramda.map)(name => {
  // eslint-disable-next-line import/namespace
  const Node = Nodes[name];
  Node.name = name;
  return Node;
}, (0, _ramda.keys)(Nodes));
const Declarations = (0, _ramda.filter)(parser => parser.type === _constants.ParserTypes.DECLARATION, (0, _ramda.values)(NamedNodes));
const Expressions = (0, _ramda.filter)(parser => parser.type === _constants.ParserTypes.EXPRESSION, (0, _ramda.values)(NamedNodes));
const Keywords = (0, _ramda.filter)(parser => parser.type === _constants.ParserTypes.KEYWORD, (0, _ramda.values)(NamedNodes));
const Operators = (0, _ramda.filter)(parser => parser.type === _constants.ParserTypes.OPERATOR, (0, _ramda.values)(NamedNodes));
const Statements = (0, _ramda.filter)(parser => parser.type === _constants.ParserTypes.STATEMENT, (0, _ramda.values)(NamedNodes));
const Identifiers = [Nodes.Program, Nodes.Declaration, Nodes.Expression, Nodes.Statement, Nodes.BlockStatement, Nodes.Identifier, Nodes.Keyword, Nodes.Literal, Nodes.Operator, Nodes.Comment, Nodes.Whitespace, Nodes.Word, Nodes.PathPartExpression, Nodes.PathPartWord, Nodes.PathPartVariable, Nodes.Range, Nodes.Entry];
/**
 * Sets up the Context object for use by the parser and generator
 * @function
 * @since v0.1.0
 * @category context
 * @returns {Context}
 * @example
 * const contxt = setupContext()
 */

const setupContext = ({
  logger
} = {}) => {
  return {
    Declarations,
    Expressions,
    Identifiers,
    Keywords,
    Operators,
    Statements,
    logger: logger || (0, _pino.default)({
      prettyPrint: {
        colorize: true
      }
    })
  };
};

var _default = setupContext;
exports.default = _default;
//# sourceMappingURL=setupContext.js.map