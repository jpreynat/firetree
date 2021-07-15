"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _CloseParenthesisOperator = _interopRequireDefault(require("../nodes/CloseParenthesisOperator"));

var _expectCloseParenthesisOperator = _interopRequireDefault(require("./expectCloseParenthesisOperator"));

var _expectCommaOperator = _interopRequireDefault(require("./expectCommaOperator"));

var _expectOpenParenthesisOperator = _interopRequireDefault(require("./expectOpenParenthesisOperator"));

var _identifyParam = _interopRequireDefault(require("./identifyParam"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("./skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const identifyParamAndWhitespace = (0, _ramda.pipe)(_skipWhitespaceAndComments.default, _identifyParam.default, _skipWhitespaceAndComments.default);
const identifyCommaParamAndWhitespace = (0, _ramda.pipe)(_expectCommaOperator.default, identifyParamAndWhitespace);

const identifyCommaSeparatedParams = props => {
  let {
    children,
    context
  } = props;
  let params = [];
  let first = true;
  let nextChild = (0, _ramda.head)(children);

  while ((0, _ramda.length)(children) > 0 && !_CloseParenthesisOperator.default.is(nextChild)) {
    let param;

    if (first) {
      first = false;
      ({
        children,
        context,
        param
      } = identifyParamAndWhitespace({
        children,
        context
      }));
    } else {
      ;
      ({
        children,
        context,
        param
      } = identifyCommaParamAndWhitespace({
        children,
        context
      }));
    }

    params = (0, _ramda.append)(param, params);
    nextChild = (0, _ramda.head)(children);
  }

  return _objectSpread(_objectSpread({}, props), {}, {
    children,
    context,
    params
  });
};

const identifyParams = (0, _ramda.pipe)(_expectOpenParenthesisOperator.default, identifyCommaSeparatedParams, _expectCloseParenthesisOperator.default);
var _default = identifyParams;
exports.default = _default;
//# sourceMappingURL=identifyParams.js.map