"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _parseArgument = _interopRequireDefault(require("./parseArgument"));

var _parseCloseParenthesisOperator = _interopRequireDefault(require("./parseCloseParenthesisOperator"));

var _parseCommaOperator = _interopRequireDefault(require("./parseCommaOperator"));

var _parseOpenParenthesisOperator = _interopRequireDefault(require("./parseOpenParenthesisOperator"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("./parseWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseArgumentAndWhitespace = (0, _ramda.pipe)(_parseWhitespaceAndComments.default, _parseArgument.default, _parseWhitespaceAndComments.default);
const parseCommaArgumentAndWhitespace = (0, _ramda.pipe)(_parseCommaOperator.default, parseArgumentAndWhitespace);

const parseCommaSeparatedArgs = props => {
  let {
    children,
    context,
    tokenList
  } = props;
  let args = [];
  let first = true;
  let nextToken = tokenList.get(0);

  while (tokenList.size > 0 && nextToken.type !== _constants.TokenTypes.OPERATOR_CLOSE_PARENTHESIS) {
    let argument;

    if (first) {
      first = false;
      ({
        argument,
        children,
        context,
        tokenList
      } = parseArgumentAndWhitespace({
        children,
        context,
        tokenList
      }));
    } else {
      ;
      ({
        argument,
        children,
        context,
        tokenList
      } = parseCommaArgumentAndWhitespace({
        children,
        context,
        tokenList
      }));
    }

    args = (0, _ramda.append)(argument, args);
    nextToken = tokenList.get(0);
  }

  return _objectSpread(_objectSpread({}, props), {}, {
    args,
    children,
    context,
    tokenList
  });
};

const parseArgs = (0, _ramda.pipe)(_parseOpenParenthesisOperator.default, parseCommaSeparatedArgs, _parseCloseParenthesisOperator.default);
var _default = parseArgs;
exports.default = _default;
//# sourceMappingURL=parseArgs.js.map