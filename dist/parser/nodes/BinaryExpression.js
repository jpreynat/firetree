"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createBinaryExpression = _interopRequireDefault(require("../pipes/createBinaryExpression"));

var _identifyBinaryOperator = _interopRequireDefault(require("../pipes/identifyBinaryOperator"));

var _identifyLeft = _interopRequireDefault(require("../pipes/identifyLeft"));

var _identifyRight = _interopRequireDefault(require("../pipes/identifyRight"));

var _parseBinaryOperator = _interopRequireDefault(require("../pipes/parseBinaryOperator"));

var _parseLeft = _interopRequireDefault(require("../pipes/parseLeft"));

var _parseRight = _interopRequireDefault(require("../pipes/parseRight"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

var _util = require("../util");

var _Identifier = _interopRequireDefault(require("./Identifier"));

var _Literal = _interopRequireDefault(require("./Literal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BINARY_OPERATOR_TOKEN_TYPES = {
  [_constants.TokenTypes.KEYWORD_IN]: _constants.OperatorTypes.IN,
  [_constants.TokenTypes.KEYWORD_IS]: _constants.OperatorTypes.IS,
  [_constants.TokenTypes.OPERATOR_DIVIDE]: _constants.OperatorTypes.DIVIDE,
  [_constants.TokenTypes.OPERATOR_EQUALITY]: _constants.OperatorTypes.EQUALITY,
  [_constants.TokenTypes.OPERATOR_GREATER_THAN]: _constants.OperatorTypes.GREATER_THAN,
  [_constants.TokenTypes.OPERATOR_GREATER_THAN_EQUAL]: _constants.OperatorTypes.GREATER_THAN_EQUAL,
  [_constants.TokenTypes.OPERATOR_INEQUALITY]: _constants.OperatorTypes.INEQUALITY,
  [_constants.TokenTypes.OPERATOR_LESS_THAN]: _constants.OperatorTypes.LESS_THAN,
  [_constants.TokenTypes.OPERATOR_LESS_THAN_EQUAL]: _constants.OperatorTypes.LESS_THAN_EQUAL,
  [_constants.TokenTypes.OPERATOR_LOGICAL_AND]: _constants.OperatorTypes.LOGICAL_AND,
  [_constants.TokenTypes.OPERATOR_LOGICAL_OR]: _constants.OperatorTypes.LOGICAL_OR,
  [_constants.TokenTypes.OPERATOR_MODULUS]: _constants.OperatorTypes.MODULUS,
  [_constants.TokenTypes.OPERATOR_MULTIPLY]: _constants.OperatorTypes.MULTIPLY,
  [_constants.TokenTypes.OPERATOR_UNARY_MINUS]: _constants.OperatorTypes.UNARY_MINUS,
  [_constants.TokenTypes.OPERATOR_UNARY_PLUS]: _constants.OperatorTypes.UNARY_PLUS
};
const parseBinaryExpressionTokens = (0, _ramda.pipe)(_parseLeft.default, _parseWhitespaceAndComments.default, _parseBinaryOperator.default, _parseWhitespaceAndComments.default, _parseRight.default, _createBinaryExpression.default);
const identifyBinaryExpressionChildren = (0, _ramda.pipe)(_identifyLeft.default, _skipWhitespaceAndComments.default, _identifyBinaryOperator.default, _skipWhitespaceAndComments.default, _identifyRight.default);
const LEFT_PARSERS = [_Identifier.default, _Literal.default];
const BinaryExpression = {
  identify: (context, node) => (0, _createBinaryExpression.default)(_objectSpread(_objectSpread({}, identifyBinaryExpressionChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.BINARY_EXPRESSION,
  parse: (context, tokenList, prevExpression = null) => parseBinaryExpressionTokens({
    children: [],
    context,
    prevExpression,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => {
    if (!prevExpression) {
      if (!(0, _util.testNextNode)(LEFT_PARSERS, context, tokenList)) {
        return false;
      }
    }

    const operatorToken = (0, _util.findNextRealToken)(tokenList, (0, _util.findNextRealTokenIndex)(tokenList) + (prevExpression ? 0 : 1));
    return operatorToken && (0, _ramda.has)(operatorToken.type, BINARY_OPERATOR_TOKEN_TYPES);
  },
  type: _constants.ParserTypes.EXPRESSION
};
var _default = BinaryExpression;
exports.default = _default;
//# sourceMappingURL=BinaryExpression.js.map