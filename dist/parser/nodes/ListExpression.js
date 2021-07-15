"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createListExpression = _interopRequireDefault(require("../pipes/createListExpression"));

var _expectCloseBracketOperator = _interopRequireDefault(require("../pipes/expectCloseBracketOperator"));

var _expectOpenBracketOperator = _interopRequireDefault(require("../pipes/expectOpenBracketOperator"));

var _identifyElements = _interopRequireDefault(require("../pipes/identifyElements"));

var _parseCloseBracketOperator = _interopRequireDefault(require("../pipes/parseCloseBracketOperator"));

var _parseElements = _interopRequireDefault(require("../pipes/parseElements"));

var _parseOpenBracketOperator = _interopRequireDefault(require("../pipes/parseOpenBracketOperator"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseListExpressionTokens = (0, _ramda.pipe)(_parseOpenBracketOperator.default, _parseWhitespaceAndComments.default, _parseElements.default, _parseWhitespaceAndComments.default, _parseCloseBracketOperator.default, _createListExpression.default);
const identifyListExpressionChildren = (0, _ramda.pipe)(_expectOpenBracketOperator.default, _skipWhitespaceAndComments.default, _identifyElements.default, _skipWhitespaceAndComments.default, _expectCloseBracketOperator.default);
const ListExpression = {
  identify: (context, node) => (0, _createListExpression.default)(_objectSpread(_objectSpread({}, identifyListExpressionChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.LIST_EXPRESSION,
  parse: (context, tokenList) => parseListExpressionTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => {
    if (prevExpression) {
      // In this case, it's a ComputedMemberExpression
      return false;
    }

    const operatorToken = (0, _util.findNextRealToken)(tokenList, (0, _util.findNextRealTokenIndex)(tokenList));
    return operatorToken && operatorToken.type === _constants.TokenTypes.OPERATOR_OPEN_BRACKET;
  },
  type: _constants.ParserTypes.EXPRESSION
};
var _default = ListExpression;
exports.default = _default;
//# sourceMappingURL=ListExpression.js.map