"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createReturnStatement = _interopRequireDefault(require("../pipes/createReturnStatement"));

var _expectReturnKeyword = _interopRequireDefault(require("../pipes/expectReturnKeyword"));

var _identifyArgument = _interopRequireDefault(require("../pipes/identifyArgument"));

var _parseArgument = _interopRequireDefault(require("../pipes/parseArgument"));

var _parseOptionalSemicolonOperator = _interopRequireDefault(require("../pipes/parseOptionalSemicolonOperator"));

var _parseReturnKeyword = _interopRequireDefault(require("../pipes/parseReturnKeyword"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipSemicolonOperator = _interopRequireDefault(require("../pipes/skipSemicolonOperator"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseReturnStatementTokens = (0, _ramda.pipe)(_parseReturnKeyword.default, _parseWhitespaceAndComments.default, _parseArgument.default, _parseWhitespaceAndComments.default, _parseOptionalSemicolonOperator.default, _createReturnStatement.default);
const identifyReturnStatementChildren = (0, _ramda.pipe)(_expectReturnKeyword.default, _skipWhitespaceAndComments.default, _identifyArgument.default, _skipWhitespaceAndComments.default, _skipSemicolonOperator.default);
const ReturnStatement = {
  identify: (context, node) => {
    return (0, _createReturnStatement.default)(_objectSpread(_objectSpread({}, identifyReturnStatementChildren(_objectSpread(_objectSpread({}, node), {}, {
      context
    }))), {}, {
      children: node.children
    }));
  },
  is: value => value.type === _constants.NodeTypes.RETURN_STATEMENT,
  parse: (context, tokenList) => parseReturnStatementTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList) => {
    const firstToken = tokenList.get(0);
    return firstToken.type === _constants.TokenTypes.KEYWORD_RETURN;
  },
  type: _constants.ParserTypes.STATEMENT
};
var _default = ReturnStatement;
exports.default = _default;
//# sourceMappingURL=ReturnStatement.js.map