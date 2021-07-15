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

var _identifyArgument = _interopRequireDefault(require("./identifyArgument"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("./skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const identifyArgumentAndWhitespace = (0, _ramda.pipe)(_skipWhitespaceAndComments.default, _identifyArgument.default, _skipWhitespaceAndComments.default);
const identifyCommaArgumentAndWhitespace = (0, _ramda.pipe)(_expectCommaOperator.default, identifyArgumentAndWhitespace);

const identifyCommaSeparatedArgs = props => {
  let {
    children,
    context
  } = props;
  let args = [];
  let first = true;
  let nextChild = (0, _ramda.head)(children);

  while ((0, _ramda.length)(children) > 0 && !_CloseParenthesisOperator.default.is(nextChild)) {
    let argument;

    if (first) {
      first = false;
      ({
        argument,
        children,
        context
      } = identifyArgumentAndWhitespace({
        children,
        context
      }));
    } else {
      ;
      ({
        argument,
        children,
        context
      } = identifyCommaArgumentAndWhitespace({
        children,
        context
      }));
    }

    args = (0, _ramda.append)(argument, args);
    nextChild = (0, _ramda.head)(children);
  }

  return _objectSpread(_objectSpread({}, props), {}, {
    args,
    children,
    context
  });
};

const identifyArgs = (0, _ramda.pipe)(_expectOpenParenthesisOperator.default, identifyCommaSeparatedArgs, _expectCloseParenthesisOperator.default);
var _default = identifyArgs;
exports.default = _default;
//# sourceMappingURL=identifyArgs.js.map