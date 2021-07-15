"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createPathExpression = _interopRequireDefault(require("../pipes/createPathExpression"));

var _identifyPathParts = _interopRequireDefault(require("../pipes/identifyPathParts"));

var _parsePathParts = _interopRequireDefault(require("../pipes/parsePathParts"));

var _util = require("../util");

var _PathPartExpression = _interopRequireDefault(require("./PathPartExpression"));

var _PathPartVariable = _interopRequireDefault(require("./PathPartVariable"));

var _PathPartWord = _interopRequireDefault(require("./PathPartWord"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const PATH_PART_PARSERS = [_PathPartExpression.default, _PathPartVariable.default, _PathPartWord.default];
const identifyPathExpressionChildren = (0, _ramda.pipe)(_identifyPathParts.default);
const parsePathExpressionTokens = (0, _ramda.pipe)(_parsePathParts.default, _createPathExpression.default);
const PathExpression = {
  identify: (context, node) => (0, _createPathExpression.default)(_objectSpread(_objectSpread({}, identifyPathExpressionChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.PATH_EXPRESSION,
  parse: (context, tokenList) => parsePathExpressionTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => (0, _util.testNextNode)(PATH_PART_PARSERS, context, tokenList, prevExpression),
  type: _constants.ParserTypes.EXPRESSION
};
var _default = PathExpression;
exports.default = _default;
//# sourceMappingURL=PathExpression.js.map