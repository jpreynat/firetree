"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _generateTokenList = _interopRequireDefault(require("../../generator/generateTokenList"));

var _Comment = _interopRequireDefault(require("../nodes/Comment"));

var _Declaration = _interopRequireDefault(require("../nodes/Declaration"));

var _Statement = _interopRequireDefault(require("../nodes/Statement"));

var _Whitespace = _interopRequireDefault(require("../nodes/Whitespace"));

var _parseNextNode = _interopRequireDefault(require("../util/parseNextNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// NOTE BRN: This needs to be slightly different based on which type of block
// this is (allow, function, etc...)
const BODY_PARSERS = [_Comment.default, _Whitespace.default, _Declaration.default, _Statement.default];
const parseBodyNode = (0, _parseNextNode.default)(BODY_PARSERS);
const parseBodyUntil = (0, _ramda.curry)((predicate, _ref) => {
  let {
    children,
    context,
    tokenList
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "context", "tokenList"]);

  let body = [];

  while (tokenList.size > 0 && predicate({
    context,
    tokenList
  })) {
    const node = parseBodyNode(context, tokenList);
    children = (0, _ramda.append)(node, children);

    if (node.type !== _constants.NodeTypes.WHITESPACE && node.type !== _constants.NodeTypes.COMMENT) {
      body = (0, _ramda.append)(node, body);
    } // NOTE BRN: Remove the parsed tokens from tokenList


    const parsedTokenList = (0, _generateTokenList.default)(context, {
      ast: node
    });
    tokenList = (0, _ramda.slice)(parsedTokenList.size, tokenList.size, tokenList);
  }

  return _objectSpread(_objectSpread({}, rest), {}, {
    body,
    children,
    context,
    tokenList
  });
});
var _default = parseBodyUntil;
exports.default = _default;
//# sourceMappingURL=parseBodyUntil.js.map