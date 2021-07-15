"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createLetDeclaration = _interopRequireDefault(require("../pipes/createLetDeclaration"));

var _expectAssignmentOperator = _interopRequireDefault(require("../pipes/expectAssignmentOperator"));

var _expectLetKeyword = _interopRequireDefault(require("../pipes/expectLetKeyword"));

var _identifyIdentifier = _interopRequireDefault(require("../pipes/identifyIdentifier"));

var _identifyInit = _interopRequireDefault(require("../pipes/identifyInit"));

var _parseAssignmentOperator = _interopRequireDefault(require("../pipes/parseAssignmentOperator"));

var _parseIdentifier = _interopRequireDefault(require("../pipes/parseIdentifier"));

var _parseInit = _interopRequireDefault(require("../pipes/parseInit"));

var _parseLetKeyword = _interopRequireDefault(require("../pipes/parseLetKeyword"));

var _parseOptionalSemicolonOperator = _interopRequireDefault(require("../pipes/parseOptionalSemicolonOperator"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipSemicolonOperator = _interopRequireDefault(require("../pipes/skipSemicolonOperator"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseLetDelcarationTokens = (0, _ramda.pipe)(_parseLetKeyword.default, _parseWhitespaceAndComments.default, _parseIdentifier.default, _parseWhitespaceAndComments.default, _parseAssignmentOperator.default, _parseWhitespaceAndComments.default, _parseInit.default, _parseWhitespaceAndComments.default, _parseOptionalSemicolonOperator.default, _createLetDeclaration.default);
const identifyLetDeclarationChildren = (0, _ramda.pipe)(_expectLetKeyword.default, _skipWhitespaceAndComments.default, _identifyIdentifier.default, _skipWhitespaceAndComments.default, _expectAssignmentOperator.default, _skipWhitespaceAndComments.default, _identifyInit.default, _skipWhitespaceAndComments.default, _skipSemicolonOperator.default);
const LetDeclaration = {
  identify: (context, node) => (0, _createLetDeclaration.default)(_objectSpread(_objectSpread({}, identifyLetDeclarationChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.LET_DECLARATION,
  parse: (context, tokenList) => parseLetDelcarationTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList) => {
    const firstToken = tokenList.get(0);
    return firstToken.type === _constants.TokenTypes.KEYWORD_LET;
  },
  type: _constants.ParserTypes.DECLARATION
};
var _default = LetDeclaration;
exports.default = _default;
//# sourceMappingURL=LetDeclaration.js.map