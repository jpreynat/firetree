"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createFunctionDeclaration = _interopRequireDefault(require("../pipes/createFunctionDeclaration"));

var _expectFunctionKeyword = _interopRequireDefault(require("../pipes/expectFunctionKeyword"));

var _identifyBody = _interopRequireDefault(require("../pipes/identifyBody"));

var _identifyIdentifier = _interopRequireDefault(require("../pipes/identifyIdentifier"));

var _identifyParams = _interopRequireDefault(require("../pipes/identifyParams"));

var _parseBody = _interopRequireDefault(require("../pipes/parseBody"));

var _parseFunctionKeyword = _interopRequireDefault(require("../pipes/parseFunctionKeyword"));

var _parseIdentifier = _interopRequireDefault(require("../pipes/parseIdentifier"));

var _parseParams = _interopRequireDefault(require("../pipes/parseParams"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseFunctionDelcarationTokens = (0, _ramda.pipe)(_parseFunctionKeyword.default, _parseWhitespaceAndComments.default, _parseIdentifier.default, _parseWhitespaceAndComments.default, _parseParams.default, _parseWhitespaceAndComments.default, _parseBody.default, _createFunctionDeclaration.default);
const identifyFunctionDeclarationChildren = (0, _ramda.pipe)(_expectFunctionKeyword.default, _skipWhitespaceAndComments.default, _identifyIdentifier.default, _skipWhitespaceAndComments.default, _identifyParams.default, _skipWhitespaceAndComments.default, _identifyBody.default);
const FunctionDeclaration = {
  identify: (context, node) => (0, _createFunctionDeclaration.default)(_objectSpread(_objectSpread({}, identifyFunctionDeclarationChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.FUNCTION_DECLARATION,
  parse: (context, tokenList) => parseFunctionDelcarationTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList) => {
    const firstToken = tokenList.get(0);
    return firstToken.type === _constants.TokenTypes.KEYWORD_FUNCTION;
  },
  type: _constants.ParserTypes.DECLARATION
};
var _default = FunctionDeclaration;
exports.default = _default;
//# sourceMappingURL=FunctionDeclaration.js.map