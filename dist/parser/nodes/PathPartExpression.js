"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createPathPartExpression = _interopRequireDefault(require("../pipes/createPathPartExpression"));

var _expectCloseParenthesisOperator = _interopRequireDefault(require("../pipes/expectCloseParenthesisOperator"));

var _expectDivideOperator = _interopRequireDefault(require("../pipes/expectDivideOperator"));

var _expectDollarSignOperator = _interopRequireDefault(require("../pipes/expectDollarSignOperator"));

var _expectOpenParenthesisOperator = _interopRequireDefault(require("../pipes/expectOpenParenthesisOperator"));

var _identifyExpression = _interopRequireDefault(require("../pipes/identifyExpression"));

var _parseCloseParenthesisOperator = _interopRequireDefault(require("../pipes/parseCloseParenthesisOperator"));

var _parseDivideOperator = _interopRequireDefault(require("../pipes/parseDivideOperator"));

var _parseDollarSignOperator = _interopRequireDefault(require("../pipes/parseDollarSignOperator"));

var _parseExpression = _interopRequireDefault(require("../pipes/parseExpression"));

var _parseOpenParenthesisOperator = _interopRequireDefault(require("../pipes/parseOpenParenthesisOperator"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parsePathPartExpressionTokens = (0, _ramda.pipe)(_parseDivideOperator.default, _parseDollarSignOperator.default, _parseOpenParenthesisOperator.default, _parseWhitespaceAndComments.default, _parseExpression.default, _parseWhitespaceAndComments.default, _parseCloseParenthesisOperator.default, _createPathPartExpression.default);
const identifyPathPartExpressionChildren = (0, _ramda.pipe)(_expectDivideOperator.default, _expectDollarSignOperator.default, _expectOpenParenthesisOperator.default, _skipWhitespaceAndComments.default, _identifyExpression.default, _skipWhitespaceAndComments.default, _expectCloseParenthesisOperator.default, _createPathPartExpression.default);
const PathPartExpression = {
  identify: (context, node) => (0, _createPathPartExpression.default)(_objectSpread(_objectSpread({}, identifyPathPartExpressionChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.PATH_PART_EXPRESSION,
  parse: (context, tokenList) => parsePathPartExpressionTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => {
    if (prevExpression) {
      // In this case, it's a CallExpression
      return false;
    }

    const firstToken = tokenList.get(0);
    const secondToken = tokenList.get(1);
    const thirdToken = tokenList.get(2);
    return firstToken && firstToken.type === _constants.TokenTypes.OPERATOR_DIVIDE && secondToken && secondToken.type === _constants.TokenTypes.OPERATOR_DOLLAR_SIGN && thirdToken && thirdToken.type === _constants.TokenTypes.OPERATOR_OPEN_PARENTHESIS;
  }
};
var _default = PathPartExpression;
exports.default = _default;
//# sourceMappingURL=PathPartExpression.js.map