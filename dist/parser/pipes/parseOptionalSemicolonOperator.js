"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _SemicolonOperator = _interopRequireDefault(require("../nodes/SemicolonOperator"));

var _parseSemicolonOperator = _interopRequireDefault(require("./parseSemicolonOperator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseOptionalSemicolonOperator = props => {
  const {
    context,
    tokenList
  } = props;

  if (!_SemicolonOperator.default.test(context, tokenList)) {
    return props;
  }

  return _objectSpread(_objectSpread({}, props), (0, _ramda.pick)(['children', 'tokenList'], (0, _parseSemicolonOperator.default)(props)));
};

var _default = parseOptionalSemicolonOperator;
exports.default = _default;
//# sourceMappingURL=parseOptionalSemicolonOperator.js.map