"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createMatchStatement = _interopRequireDefault(require("../pipes/createMatchStatement"));

var _expectMatchKeyword = _interopRequireDefault(require("../pipes/expectMatchKeyword"));

var _identifyBody = _interopRequireDefault(require("../pipes/identifyBody"));

var _identifyPath = _interopRequireDefault(require("../pipes/identifyPath"));

var _parseBody = _interopRequireDefault(require("../pipes/parseBody"));

var _parseMatchKeyword = _interopRequireDefault(require("../pipes/parseMatchKeyword"));

var _parsePath = _interopRequireDefault(require("../pipes/parsePath"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseMatchStatementTokens = (0, _ramda.pipe)(_parseMatchKeyword.default, _parseWhitespaceAndComments.default, _parsePath.default, _parseWhitespaceAndComments.default, _parseBody.default, _createMatchStatement.default);
const identifyMatchStatementChildren = (0, _ramda.pipe)(_expectMatchKeyword.default, _skipWhitespaceAndComments.default, _identifyPath.default, _skipWhitespaceAndComments.default, _identifyBody.default);
const MatchStatement = {
  identify: (context, node) => (0, _createMatchStatement.default)(_objectSpread(_objectSpread({}, identifyMatchStatementChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.MATCH_STATEMENT,
  parse: (context, tokenList) => parseMatchStatementTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList) => {
    const firstToken = tokenList.get(0);
    return firstToken.type === _constants.TokenTypes.KEYWORD_MATCH;
  },
  type: _constants.ParserTypes.STATEMENT
};
var _default = MatchStatement;
exports.default = _default;
//# sourceMappingURL=MatchStatement.js.map