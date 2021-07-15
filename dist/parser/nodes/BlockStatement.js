"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createBlockStatement = _interopRequireDefault(require("../pipes/createBlockStatement"));

var _expectCloseCurlyBraceOperator = _interopRequireDefault(require("../pipes/expectCloseCurlyBraceOperator"));

var _expectOpenCurlyBraceOperator = _interopRequireDefault(require("../pipes/expectOpenCurlyBraceOperator"));

var _identifyBodyUntil = _interopRequireDefault(require("../pipes/identifyBodyUntil"));

var _parseBodyUntil = _interopRequireDefault(require("../pipes/parseBodyUntil"));

var _parseCloseCurlyBraceOperator = _interopRequireDefault(require("../pipes/parseCloseCurlyBraceOperator"));

var _parseOpenCurlyBraceOperator = _interopRequireDefault(require("../pipes/parseOpenCurlyBraceOperator"));

var _CloseCurlyBraceOperator = _interopRequireDefault(require("./CloseCurlyBraceOperator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseBlockStatementTokens = (0, _ramda.pipe)(_parseOpenCurlyBraceOperator.default, (0, _parseBodyUntil.default)(({
  tokenList
}) => tokenList.get(0).type !== _constants.TokenTypes.OPERATOR_CLOSE_CURLY_BRACE), _parseCloseCurlyBraceOperator.default, _createBlockStatement.default);
const identifyBlockStatementChildren = (0, _ramda.pipe)(_expectOpenCurlyBraceOperator.default, (0, _identifyBodyUntil.default)(({
  children
}) => _CloseCurlyBraceOperator.default.is((0, _ramda.head)(children))), _expectCloseCurlyBraceOperator.default);
const BlockStatement = {
  identify: (context, node) => (0, _createBlockStatement.default)(_objectSpread(_objectSpread({}, identifyBlockStatementChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.BLOCK_STATEMENT,
  parse: (context, tokenList) => parseBlockStatementTokens({
    children: [],
    context,
    tokenList
  }),
  // NOTE BRN: The first token of a Statement cannot be Whitespace or a Comment
  test: (context, tokenList) => {
    const firstToken = tokenList.get(0);
    return firstToken.type === _constants.TokenTypes.OPERATOR_OPEN_CURLY_BRACE;
  }
};
var _default = BlockStatement;
exports.default = _default;
//# sourceMappingURL=BlockStatement.js.map