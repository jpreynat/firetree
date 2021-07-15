"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createMapExpression = _interopRequireDefault(require("../pipes/createMapExpression"));

var _expectCloseCurlyBraceOperator = _interopRequireDefault(require("../pipes/expectCloseCurlyBraceOperator"));

var _expectOpenCurlyBraceOperator = _interopRequireDefault(require("../pipes/expectOpenCurlyBraceOperator"));

var _identifyEntries = _interopRequireDefault(require("../pipes/identifyEntries"));

var _parseCloseCurlyBraceOperator = _interopRequireDefault(require("../pipes/parseCloseCurlyBraceOperator"));

var _parseEntries = _interopRequireDefault(require("../pipes/parseEntries"));

var _parseOpenCurlyBraceOperator = _interopRequireDefault(require("../pipes/parseOpenCurlyBraceOperator"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseMapExpressionTokens = (0, _ramda.pipe)(_parseOpenCurlyBraceOperator.default, _parseWhitespaceAndComments.default, _parseEntries.default, _parseWhitespaceAndComments.default, _parseCloseCurlyBraceOperator.default, _createMapExpression.default);
const identifyMapExpressionChildren = (0, _ramda.pipe)(_expectOpenCurlyBraceOperator.default, _skipWhitespaceAndComments.default, _identifyEntries.default, _skipWhitespaceAndComments.default, _expectCloseCurlyBraceOperator.default);
const MapExpression = {
  identify: (context, node) => (0, _createMapExpression.default)(_objectSpread(_objectSpread({}, identifyMapExpressionChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.MAP_EXPRESSION,
  parse: (context, tokenList) => parseMapExpressionTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => {
    if (prevExpression) {
      return false;
    }

    const operatorToken = (0, _util.findNextRealToken)(tokenList, (0, _util.findNextRealTokenIndex)(tokenList));
    return operatorToken && operatorToken.type === _constants.TokenTypes.OPERATOR_OPEN_CURLY_BRACE;
  },
  type: _constants.ParserTypes.EXPRESSION
};
var _default = MapExpression;
exports.default = _default;
//# sourceMappingURL=MapExpression.js.map