"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createExpressionStatement = _interopRequireDefault(require("../pipes/createExpressionStatement"));

var _expectSemicolonOperator = _interopRequireDefault(require("../pipes/expectSemicolonOperator"));

var _identifyExpression = _interopRequireDefault(require("../pipes/identifyExpression"));

var _parseExpression = _interopRequireDefault(require("../pipes/parseExpression"));

var _parseSemicolonOperator = _interopRequireDefault(require("../pipes/parseSemicolonOperator"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

var _testNextNode = _interopRequireDefault(require("../util/testNextNode"));

var _Expression = _interopRequireDefault(require("./Expression"));

var _Identifier = _interopRequireDefault(require("./Identifier"));

var _Literal = _interopRequireDefault(require("./Literal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const EXPRESSION_STATEMENT_PARSERS = [_Expression.default, _Identifier.default, _Literal.default];
const parseExpressionStatementTokens = (0, _ramda.pipe)(_parseExpression.default, _parseWhitespaceAndComments.default, _parseSemicolonOperator.default, _createExpressionStatement.default);
const identifyExpressionStatementChildren = (0, _ramda.pipe)(_identifyExpression.default, _skipWhitespaceAndComments.default, _expectSemicolonOperator.default);
const ExpressionStatement = {
  identify: (context, node) => (0, _createExpressionStatement.default)(_objectSpread(_objectSpread({}, identifyExpressionStatementChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.EXPRESSION_STATEMENT,
  parse: (context, tokenList) => parseExpressionStatementTokens({
    children: [],
    context,
    tokenList
  }),
  // NOTE BRN: The first token of a Statement cannot be Whitespace or a Comment
  test: (context, tokenList) => (0, _testNextNode.default)(EXPRESSION_STATEMENT_PARSERS, context, tokenList),
  type: _constants.ParserTypes.STATEMENT
};
var _default = ExpressionStatement;
exports.default = _default;
//# sourceMappingURL=ExpressionStatement.js.map