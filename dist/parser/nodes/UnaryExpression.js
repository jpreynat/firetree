"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createUnaryExpression = _interopRequireDefault(require("../pipes/createUnaryExpression"));

var _identifyArgument = _interopRequireDefault(require("../pipes/identifyArgument"));

var _identifyOperator = _interopRequireDefault(require("../pipes/identifyOperator"));

var _parseArgument = _interopRequireDefault(require("../pipes/parseArgument"));

var _parseOperator = _interopRequireDefault(require("../pipes/parseOperator"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const UNARY_OPERATOR_TOKEN_TYPES = {
  [_constants.TokenTypes.OPERATOR_LOGICAL_NOT]: _constants.OperatorTypes.LOGICAL_NOT,
  [_constants.TokenTypes.OPERATOR_UNARY_MINUS]: _constants.OperatorTypes.UNARY_MINUS,
  [_constants.TokenTypes.OPERATOR_UNARY_PLUS]: _constants.OperatorTypes.UNARY_PLUS
};
const parseUnaryExpressionTokens = (0, _ramda.pipe)(_parseOperator.default, _parseWhitespaceAndComments.default, _parseArgument.default, _createUnaryExpression.default);
const identifyUnaryExpressionChildren = (0, _ramda.pipe)(_identifyOperator.default, _skipWhitespaceAndComments.default, _identifyArgument.default);
const UnaryExpression = {
  identify: (context, node) => (0, _createUnaryExpression.default)(_objectSpread(_objectSpread({}, identifyUnaryExpressionChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.UNARY_EXPRESSION,
  parse: (context, tokenList, prevExpression = null) => parseUnaryExpressionTokens({
    children: [],
    context,
    prevExpression,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => !prevExpression && (0, _ramda.has)(tokenList.get(0).type, UNARY_OPERATOR_TOKEN_TYPES),
  type: _constants.ParserTypes.EXPRESSION
};
var _default = UnaryExpression;
exports.default = _default;
//# sourceMappingURL=UnaryExpression.js.map