"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createPathPartWord = _interopRequireDefault(require("../pipes/createPathPartWord"));

var _expectDivideOperator = _interopRequireDefault(require("../pipes/expectDivideOperator"));

var _identifyWord = _interopRequireDefault(require("../pipes/identifyWord"));

var _parseDivideOperator = _interopRequireDefault(require("../pipes/parseDivideOperator"));

var _parseWord = _interopRequireDefault(require("../pipes/parseWord"));

var _Word = _interopRequireDefault(require("./Word"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parsePathPartWordTokens = (0, _ramda.pipe)(_parseDivideOperator.default, _parseWord.default, _createPathPartWord.default);
const identifyPathPartWordChildren = (0, _ramda.pipe)(_expectDivideOperator.default, _identifyWord.default);
const PathPartWord = {
  identify: (context, node) => (0, _createPathPartWord.default)(_objectSpread(_objectSpread({}, identifyPathPartWordChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.PATH_PART_WORD,
  parse: (context, tokenList) => parsePathPartWordTokens({
    children: [],
    context,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => {
    if (prevExpression) {
      // In this case, it's a BinaryExpress with a DivideOperator
      return false;
    }

    const firstToken = tokenList.get(0);
    return firstToken && firstToken.type === _constants.TokenTypes.OPERATOR_DIVIDE && _Word.default.test(context, (0, _ramda.tail)(tokenList));
  }
};
var _default = PathPartWord;
exports.default = _default;
//# sourceMappingURL=PathPartWord.js.map