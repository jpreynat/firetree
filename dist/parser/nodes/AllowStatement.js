"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createAllowStatement = _interopRequireDefault(require("../pipes/createAllowStatement"));

var _expectAllowKeyword = _interopRequireDefault(require("../pipes/expectAllowKeyword"));

var _expectColonOperator = _interopRequireDefault(require("../pipes/expectColonOperator"));

var _identifyCondition = _interopRequireDefault(require("../pipes/identifyCondition"));

var _identifyPermissions = _interopRequireDefault(require("../pipes/identifyPermissions"));

var _parseAllowKeyword = _interopRequireDefault(require("../pipes/parseAllowKeyword"));

var _parseColonOperator = _interopRequireDefault(require("../pipes/parseColonOperator"));

var _parseCondition = _interopRequireDefault(require("../pipes/parseCondition"));

var _parsePermissions = _interopRequireDefault(require("../pipes/parsePermissions"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseAllowStatementTokens = (0, _ramda.pipe)(_parseAllowKeyword.default, _parseWhitespaceAndComments.default, _parsePermissions.default, _parseWhitespaceAndComments.default, _parseColonOperator.default, _parseWhitespaceAndComments.default, _parseCondition.default, _createAllowStatement.default);
const identifyAllowStatementChildren = (0, _ramda.pipe)(_expectAllowKeyword.default, _skipWhitespaceAndComments.default, _identifyPermissions.default, _skipWhitespaceAndComments.default, _expectColonOperator.default, _skipWhitespaceAndComments.default, _identifyCondition.default);
const AllowStatement = {
  identify: (context, node) => (0, _createAllowStatement.default)(_objectSpread(_objectSpread({}, identifyAllowStatementChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.ALLOW_STATEMENT,
  parse: (context, tokenList) => parseAllowStatementTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList) => {
    const firstToken = tokenList.get(0);
    return !!(firstToken && firstToken.type === _constants.TokenTypes.KEYWORD_ALLOW);
  },
  type: _constants.ParserTypes.STATEMENT
};
var _default = AllowStatement;
exports.default = _default;
//# sourceMappingURL=AllowStatement.js.map