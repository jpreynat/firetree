"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createCallExpression = _interopRequireDefault(require("../pipes/createCallExpression"));

var _identifyArgs = _interopRequireDefault(require("../pipes/identifyArgs"));

var _identifyCallee = _interopRequireDefault(require("../pipes/identifyCallee"));

var _parseArgs = _interopRequireDefault(require("../pipes/parseArgs"));

var _parseCallee = _interopRequireDefault(require("../pipes/parseCallee"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseCallExpressionTokens = (0, _ramda.pipe)(_parseCallee.default, _parseWhitespaceAndComments.default, _parseArgs.default, _createCallExpression.default);
const identifyCallExpressionChildren = (0, _ramda.pipe)(_identifyCallee.default, _skipWhitespaceAndComments.default, _identifyArgs.default);
const CallExpression = {
  identify: (context, node) => (0, _createCallExpression.default)(_objectSpread(_objectSpread({}, identifyCallExpressionChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.CALL_EXPRESSION,
  parse: (context, tokenList, prevExpression = null) => parseCallExpressionTokens({
    children: [],
    context,
    prevExpression,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => {
    if (!prevExpression) {
      const identifierToken = (0, _util.findNextRealToken)(tokenList);

      if (!identifierToken || identifierToken.type !== _constants.TokenTypes.IDENTIFIER) {
        return false;
      }
    }

    const operatorToken = (0, _util.findNextRealToken)(tokenList, (0, _util.findNextRealTokenIndex)(tokenList) + (prevExpression ? 0 : 1));
    return operatorToken && operatorToken.type === _constants.TokenTypes.OPERATOR_OPEN_PARENTHESIS;
  },
  type: _constants.ParserTypes.EXPRESSION
};
var _default = CallExpression;
exports.default = _default;
//# sourceMappingURL=CallExpression.js.map