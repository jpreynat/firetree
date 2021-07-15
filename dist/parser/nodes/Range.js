"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createRange = _interopRequireDefault(require("../pipes/createRange"));

var _expectColonOperator = _interopRequireDefault(require("../pipes/expectColonOperator"));

var _identifyEnd = _interopRequireDefault(require("../pipes/identifyEnd"));

var _identifyStart = _interopRequireDefault(require("../pipes/identifyStart"));

var _parseColonOperator = _interopRequireDefault(require("../pipes/parseColonOperator"));

var _parseEnd = _interopRequireDefault(require("../pipes/parseEnd"));

var _parseStart = _interopRequireDefault(require("../pipes/parseStart"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

var _util = require("../util");

var _Identifier = _interopRequireDefault(require("./Identifier"));

var _Literal = _interopRequireDefault(require("./Literal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const START_PARSERS = [_Identifier.default, _Literal.default];
const parseRangeTokens = (0, _ramda.pipe)(_parseStart.default, _parseWhitespaceAndComments.default, _parseColonOperator.default, _parseWhitespaceAndComments.default, _parseEnd.default, _createRange.default);
const identifyRangeChildren = (0, _ramda.pipe)(_identifyStart.default, _skipWhitespaceAndComments.default, _expectColonOperator.default, _skipWhitespaceAndComments.default, _identifyEnd.default);
const Range = {
  identify: (context, node) => (0, _createRange.default)(_objectSpread(_objectSpread({}, identifyRangeChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.RANGE,
  parse: (context, tokenList) => parseRangeTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => {
    if (!prevExpression) {
      if (!(0, _util.testNextNode)(START_PARSERS, context, tokenList)) {
        return false;
      }
    }

    const operatorToken = (0, _util.findNextRealToken)(tokenList, prevExpression ? 0 : 1);
    return operatorToken.type === _constants.TokenTypes.OPERATOR_COLON;
  }
};
var _default = Range;
exports.default = _default;
//# sourceMappingURL=Range.js.map