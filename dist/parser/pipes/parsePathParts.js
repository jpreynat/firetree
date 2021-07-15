"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _generateTokenList = _interopRequireDefault(require("../../generator/generateTokenList"));

var _PathPartExpression = _interopRequireDefault(require("../nodes/PathPartExpression"));

var _PathPartVariable = _interopRequireDefault(require("../nodes/PathPartVariable"));

var _PathPartWord = _interopRequireDefault(require("../nodes/PathPartWord"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const PATH_PART_PARSERS = [_PathPartExpression.default, _PathPartVariable.default, _PathPartWord.default];
const parsePathPartNode = (0, _util.parseNextNode)(PATH_PART_PARSERS);

const parsePathPart = (_ref) => {
  let {
    children,
    context,
    tokenList
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "context", "tokenList"]);

  const pathPart = parsePathPartNode(context, tokenList);
  children = (0, _ramda.append)(pathPart, children);
  const parsedTokenList = (0, _generateTokenList.default)(context, {
    ast: pathPart
  });
  tokenList = (0, _ramda.slice)(parsedTokenList.size, tokenList.size, tokenList);
  return _objectSpread(_objectSpread({}, rest), {}, {
    children,
    context,
    pathPart,
    tokenList
  });
};

const parsePathParts = props => {
  let {
    children,
    context,
    tokenList
  } = props;
  let path = [];

  while ((0, _util.testNextNode)(PATH_PART_PARSERS, context, tokenList)) {
    let pathPart;
    ({
      children,
      context,
      pathPart,
      tokenList
    } = parsePathPart({
      children,
      context,
      tokenList
    }));
    path = (0, _ramda.append)(pathPart, path);
  }

  return _objectSpread(_objectSpread({}, props), {}, {
    children,
    context,
    path,
    tokenList
  });
};

var _default = parsePathParts;
exports.default = _default;
//# sourceMappingURL=parsePathParts.js.map