"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createIfStatement = _interopRequireDefault(require("../pipes/createIfStatement"));

var _expectIfKeyword = _interopRequireDefault(require("../pipes/expectIfKeyword"));

var _identifyIfStatementTest = _interopRequireDefault(require("../pipes/identifyIfStatementTest"));

var _parseIfKeyword = _interopRequireDefault(require("../pipes/parseIfKeyword"));

var _parseIfStatementTest = _interopRequireDefault(require("../pipes/parseIfStatementTest"));

var _parseOptionalSemicolonOperator = _interopRequireDefault(require("../pipes/parseOptionalSemicolonOperator"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipSemicolonOperator = _interopRequireDefault(require("../pipes/skipSemicolonOperator"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseIfStatementTokens = (0, _ramda.pipe)(_parseIfKeyword.default, _parseWhitespaceAndComments.default, _parseIfStatementTest.default, _parseWhitespaceAndComments.default, _parseOptionalSemicolonOperator.default, _createIfStatement.default);
const identifyIfStatementChildren = (0, _ramda.pipe)(_expectIfKeyword.default, _skipWhitespaceAndComments.default, _identifyIfStatementTest.default, _skipWhitespaceAndComments.default, _skipSemicolonOperator.default);
const IfStatement = {
  identify: (context, node) => (0, _createIfStatement.default)(_objectSpread(_objectSpread({}, identifyIfStatementChildren({
    children: node.children,
    context
  })), {}, {
    children: node.children
  })),
  is: value => value.type === _constants.NodeTypes.IF_STATEMENT,
  parse: (context, tokenList) => parseIfStatementTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList) => {
    const firstToken = tokenList.get(0);
    return firstToken.type === _constants.TokenTypes.KEYWORD_IF;
  },
  type: _constants.ParserTypes.STATEMENT
};
var _default = IfStatement;
exports.default = _default;
//# sourceMappingURL=IfStatement.js.map