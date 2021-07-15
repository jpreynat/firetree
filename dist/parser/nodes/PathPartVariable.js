"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createPathPartVariable = _interopRequireDefault(require("../pipes/createPathPartVariable"));

var _expectCloseCurlyBraceOperator = _interopRequireDefault(require("../pipes/expectCloseCurlyBraceOperator"));

var _expectDivideOperator = _interopRequireDefault(require("../pipes/expectDivideOperator"));

var _expectOpenCurlyBraceOperator = _interopRequireDefault(require("../pipes/expectOpenCurlyBraceOperator"));

var _identifyIdentifier = _interopRequireDefault(require("../pipes/identifyIdentifier"));

var _parseCloseCurlyBraceOperator = _interopRequireDefault(require("../pipes/parseCloseCurlyBraceOperator"));

var _parseDivideOperator = _interopRequireDefault(require("../pipes/parseDivideOperator"));

var _parseIdentifier = _interopRequireDefault(require("../pipes/parseIdentifier"));

var _parseOpenCurlyBraceOperator = _interopRequireDefault(require("../pipes/parseOpenCurlyBraceOperator"));

var _parseOptionalAssignmentOperator = _interopRequireDefault(require("../pipes/parseOptionalAssignmentOperator"));

var _parseOptionalMultiplyOperator = _interopRequireDefault(require("../pipes/parseOptionalMultiplyOperator"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipAssignmentOperator = _interopRequireDefault(require("../pipes/skipAssignmentOperator"));

var _skipMultiplyOperator = _interopRequireDefault(require("../pipes/skipMultiplyOperator"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parsePathPartVariableTokens = (0, _ramda.pipe)(_parseDivideOperator.default, _parseOpenCurlyBraceOperator.default, _parseWhitespaceAndComments.default, _parseIdentifier.default, _parseOptionalAssignmentOperator.default, _parseOptionalMultiplyOperator.default, _parseOptionalMultiplyOperator.default, _parseWhitespaceAndComments.default, _parseCloseCurlyBraceOperator.default, _createPathPartVariable.default);
const identifyPathPartVariableChildren = (0, _ramda.pipe)(_expectDivideOperator.default, _expectOpenCurlyBraceOperator.default, _skipWhitespaceAndComments.default, _identifyIdentifier.default, _skipAssignmentOperator.default, _skipMultiplyOperator.default, _skipMultiplyOperator.default, _skipWhitespaceAndComments.default, _expectCloseCurlyBraceOperator.default);
const PathPartVariable = {
  identify: (context, node) => (0, _createPathPartVariable.default)(_objectSpread(_objectSpread({}, identifyPathPartVariableChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.PATH_PART_VARIABLE,
  parse: (context, tokenList) => parsePathPartVariableTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => {
    if (prevExpression) {
      // In this case, it's a CallExpression
      return false;
    }

    const firstToken = tokenList.get(0);
    const secondToken = tokenList.get(1);
    return firstToken && firstToken.type === _constants.TokenTypes.OPERATOR_DIVIDE && secondToken && secondToken.type === _constants.TokenTypes.OPERATOR_OPEN_CURLY_BRACE;
  }
};
var _default = PathPartVariable;
exports.default = _default;
//# sourceMappingURL=PathPartVariable.js.map