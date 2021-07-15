"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _generateTokenList = _interopRequireDefault(require("../../generator/generateTokenList"));

var _DivideOperator = _interopRequireDefault(require("../nodes/DivideOperator"));

var _EqualityOperator = _interopRequireDefault(require("../nodes/EqualityOperator"));

var _GreaterThanEqualOperator = _interopRequireDefault(require("../nodes/GreaterThanEqualOperator"));

var _GreaterThanOperator = _interopRequireDefault(require("../nodes/GreaterThanOperator"));

var _InOperator = _interopRequireDefault(require("../nodes/InOperator"));

var _InequalityOperator = _interopRequireDefault(require("../nodes/InequalityOperator"));

var _IsOperator = _interopRequireDefault(require("../nodes/IsOperator"));

var _LessThanEqualOperator = _interopRequireDefault(require("../nodes/LessThanEqualOperator"));

var _LessThanOperator = _interopRequireDefault(require("../nodes/LessThanOperator"));

var _LogicalAndOperator = _interopRequireDefault(require("../nodes/LogicalAndOperator"));

var _LogicalOrOperator = _interopRequireDefault(require("../nodes/LogicalOrOperator"));

var _ModulusOperator = _interopRequireDefault(require("../nodes/ModulusOperator"));

var _MultiplyOperator = _interopRequireDefault(require("../nodes/MultiplyOperator"));

var _UnaryMinusOperator = _interopRequireDefault(require("../nodes/UnaryMinusOperator"));

var _UnaryPlusOperator = _interopRequireDefault(require("../nodes/UnaryPlusOperator"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const BINARY_OPERATOR_PARSERS = [_DivideOperator.default, _EqualityOperator.default, _GreaterThanEqualOperator.default, _GreaterThanOperator.default, _InequalityOperator.default, _InOperator.default, _IsOperator.default, _LessThanEqualOperator.default, _LessThanOperator.default, _LogicalAndOperator.default, _LogicalOrOperator.default, _ModulusOperator.default, _MultiplyOperator.default, _UnaryMinusOperator.default, _UnaryPlusOperator.default];

const parseBinaryOperator = (_ref) => {
  let {
    children,
    context,
    tokenList
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "context", "tokenList"]);

  const operator = (0, _util.parseNextNode)(BINARY_OPERATOR_PARSERS, context, tokenList);
  const parsedTokenList = (0, _generateTokenList.default)(context, {
    ast: operator
  });
  return _objectSpread(_objectSpread({}, rest), {}, {
    children: (0, _ramda.append)(operator, children),
    context,
    operator,
    tokenList: (0, _ramda.slice)(parsedTokenList.size, tokenList.size, tokenList)
  });
};

var _default = parseBinaryOperator;
exports.default = _default;
//# sourceMappingURL=parseBinaryOperator.js.map