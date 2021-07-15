"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _parseCommaOperator = _interopRequireDefault(require("./parseCommaOperator"));

var _parseEntry = _interopRequireDefault(require("./parseEntry"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("./parseWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseEntryAndWhitespace = (0, _ramda.pipe)(_parseWhitespaceAndComments.default, _parseEntry.default, _parseWhitespaceAndComments.default);
const parseCommaEntryAndWhitespace = (0, _ramda.pipe)(_parseCommaOperator.default, parseEntryAndWhitespace);

const parseEntries = props => {
  let {
    children,
    context,
    tokenList
  } = props;
  let entries = [];
  let first = true;
  let nextToken = tokenList.get(0);

  while (tokenList.size > 0 && nextToken.type !== _constants.TokenTypes.OPERATOR_CLOSE_CURLY_BRACE) {
    let entry;

    if (first) {
      first = false;
      ({
        children,
        context,
        entry,
        tokenList
      } = parseEntryAndWhitespace({
        children,
        context,
        tokenList
      }));
    } else {
      ;
      ({
        children,
        context,
        entry,
        tokenList
      } = parseCommaEntryAndWhitespace({
        children,
        context,
        tokenList
      }));
    }

    entries = (0, _ramda.append)(entry, entries);
    nextToken = tokenList.get(0);
  }

  return _objectSpread(_objectSpread({}, props), {}, {
    children,
    context,
    entries,
    tokenList
  });
};

var _default = parseEntries;
exports.default = _default;
//# sourceMappingURL=parseEntries.js.map