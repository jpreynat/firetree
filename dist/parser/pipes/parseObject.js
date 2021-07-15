"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _generateTokenList = _interopRequireDefault(require("../../generator/generateTokenList"));

var _Identifier = _interopRequireDefault(require("../nodes/Identifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseObject = props => {
  const {
    children,
    context,
    prevExpression,
    tokenList
  } = props;

  if (prevExpression) {
    return _objectSpread(_objectSpread({}, props), {}, {
      children: (0, _ramda.append)(prevExpression, children),
      object: prevExpression
    });
  }

  const object = _Identifier.default.parse(context, tokenList);

  const parsedTokenList = (0, _generateTokenList.default)(context, {
    ast: object
  });
  return _objectSpread(_objectSpread({}, props), {}, {
    children: (0, _ramda.append)(object, children),
    object,
    tokenList: (0, _ramda.slice)(parsedTokenList.size, tokenList.size, tokenList)
  });
};

var _default = parseObject;
exports.default = _default;
//# sourceMappingURL=parseObject.js.map