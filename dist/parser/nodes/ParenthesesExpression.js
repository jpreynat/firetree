"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createParenthesesExpression = _interopRequireDefault(require("../pipes/createParenthesesExpression"));

var _expectCloseParenthesisOperator = _interopRequireDefault(require("../pipes/expectCloseParenthesisOperator"));

var _expectOpenParenthesisOperator = _interopRequireDefault(require("../pipes/expectOpenParenthesisOperator"));

var _identifyExpression = _interopRequireDefault(require("../pipes/identifyExpression"));

var _parseCloseParenthesisOperator = _interopRequireDefault(require("../pipes/parseCloseParenthesisOperator"));

var _parseExpression = _interopRequireDefault(require("../pipes/parseExpression"));

var _parseOpenParenthesisOperator = _interopRequireDefault(require("../pipes/parseOpenParenthesisOperator"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseParenthesesExpressionTokens = (0, _ramda.pipe)(_parseOpenParenthesisOperator.default, _parseWhitespaceAndComments.default, _parseExpression.default, _parseWhitespaceAndComments.default, _parseCloseParenthesisOperator.default, _createParenthesesExpression.default);
const identifyParenthesesExpressionChildren = (0, _ramda.pipe)(_expectOpenParenthesisOperator.default, _skipWhitespaceAndComments.default, _identifyExpression.default, _skipWhitespaceAndComments.default, _expectCloseParenthesisOperator.default);
const ParenthesesExpression = {
  identify: (context, node) => (0, _createParenthesesExpression.default)(_objectSpread(_objectSpread({}, identifyParenthesesExpressionChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.PARENTHESES_EXPRESSION,
  parse: (context, tokenList) => parseParenthesesExpressionTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => {
    if (prevExpression) {
      // In this case, it's a CallExpression
      return false;
    }

    const operatorToken = (0, _util.findNextRealToken)(tokenList, (0, _util.findNextRealTokenIndex)(tokenList));
    return operatorToken && operatorToken.type === _constants.TokenTypes.OPERATOR_OPEN_PARENTHESIS;
  },
  type: _constants.ParserTypes.EXPRESSION
};
var _default = ParenthesesExpression;
exports.default = _default;
//# sourceMappingURL=ParenthesesExpression.js.map