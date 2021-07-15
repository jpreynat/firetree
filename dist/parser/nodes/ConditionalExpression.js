"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createConditionalExpression = _interopRequireDefault(require("../pipes/createConditionalExpression"));

var _expectColonOperator = _interopRequireDefault(require("../pipes/expectColonOperator"));

var _expectQuestionMarkOperator = _interopRequireDefault(require("../pipes/expectQuestionMarkOperator"));

var _identifyAlternate = _interopRequireDefault(require("../pipes/identifyAlternate"));

var _identifyConsequent = _interopRequireDefault(require("../pipes/identifyConsequent"));

var _identifyTest = _interopRequireDefault(require("../pipes/identifyTest"));

var _parseAlternate = _interopRequireDefault(require("../pipes/parseAlternate"));

var _parseColonOperator = _interopRequireDefault(require("../pipes/parseColonOperator"));

var _parseConsequent = _interopRequireDefault(require("../pipes/parseConsequent"));

var _parseQuestionMarkOperator = _interopRequireDefault(require("../pipes/parseQuestionMarkOperator"));

var _parseTest = _interopRequireDefault(require("../pipes/parseTest"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

var _util = require("../util");

var _Identifier = _interopRequireDefault(require("./Identifier"));

var _Literal = _interopRequireDefault(require("./Literal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const TEST_PARSERS = [_Identifier.default, _Literal.default];
const parseConditionalExpressionTokens = (0, _ramda.pipe)(_parseTest.default, _parseWhitespaceAndComments.default, _parseQuestionMarkOperator.default, _parseWhitespaceAndComments.default, _parseConsequent.default, _parseWhitespaceAndComments.default, _parseColonOperator.default, _parseWhitespaceAndComments.default, _parseAlternate.default, _createConditionalExpression.default);
const identifyConditionalExpressionChildren = (0, _ramda.pipe)(_identifyTest.default, _skipWhitespaceAndComments.default, _expectQuestionMarkOperator.default, _skipWhitespaceAndComments.default, _identifyConsequent.default, _skipWhitespaceAndComments.default, _expectColonOperator.default, _skipWhitespaceAndComments.default, _identifyAlternate.default);
const ConditionalExpression = {
  identify: (context, node) => (0, _createConditionalExpression.default)(_objectSpread(_objectSpread({}, identifyConditionalExpressionChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.CONDITIONAL_EXPRESSION,
  parse: (context, tokenList, prevExpression = null) => parseConditionalExpressionTokens({
    children: [],
    context,
    prevExpression,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => {
    if (!prevExpression) {
      if (!(0, _util.testNextNode)(TEST_PARSERS, context, tokenList)) {
        return false;
      }
    }

    const operatorToken = (0, _util.findNextRealToken)(tokenList, (0, _util.findNextRealTokenIndex)(tokenList) + (prevExpression ? 0 : 1));
    return operatorToken && operatorToken.type === _constants.TokenTypes.OPERATOR_QUESTION_MARK;
  },
  type: _constants.ParserTypes.EXPRESSION
};
var _default = ConditionalExpression;
exports.default = _default;
//# sourceMappingURL=ConditionalExpression.js.map