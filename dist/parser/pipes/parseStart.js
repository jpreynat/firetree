"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _generateTokenList = _interopRequireDefault(require("../../generator/generateTokenList"));

var _Identifier = _interopRequireDefault(require("../nodes/Identifier"));

var _Literal = _interopRequireDefault(require("../nodes/Literal"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const START_PARSERS = [_Identifier.default, _Literal.default];
const parseStartNode = (0, _util.parseNextNode)(START_PARSERS);

const parseStart = props => {
  const {
    children,
    context,
    prevExpression,
    tokenList
  } = props;

  if (prevExpression) {
    return _objectSpread(_objectSpread({}, props), {}, {
      children: (0, _ramda.append)(prevExpression, children),
      start: prevExpression
    });
  }

  const start = parseStartNode(context, tokenList);
  const parsedTokenList = (0, _generateTokenList.default)(context, {
    ast: start
  });
  return _objectSpread(_objectSpread({}, props), {}, {
    children: (0, _ramda.append)(start, children),
    start,
    tokenList: (0, _ramda.slice)(parsedTokenList.size, tokenList.size, tokenList)
  });
};

var _default = parseStart;
exports.default = _default;
//# sourceMappingURL=parseStart.js.map