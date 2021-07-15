"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _CloseCurlyBraceOperator = _interopRequireDefault(require("../nodes/CloseCurlyBraceOperator"));

var _expectCommaOperator = _interopRequireDefault(require("./expectCommaOperator"));

var _identifyEntry = _interopRequireDefault(require("./identifyEntry"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("./skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const identifyEntryAndWhitespace = (0, _ramda.pipe)(_skipWhitespaceAndComments.default, _identifyEntry.default, _skipWhitespaceAndComments.default);
const identifyCommaEntryAndWhitespace = (0, _ramda.pipe)(_expectCommaOperator.default, identifyEntryAndWhitespace);

const identifyEntries = props => {
  let {
    children,
    context
  } = props;
  let entries = [];
  let first = true;
  let nextChild = (0, _ramda.head)(children);

  while ((0, _ramda.length)(children) > 0 && !_CloseCurlyBraceOperator.default.is(nextChild)) {
    let entry;

    if (first) {
      first = false;
      ({
        children,
        context,
        entry
      } = identifyEntryAndWhitespace({
        children,
        context
      }));
    } else {
      ;
      ({
        children,
        context,
        entry
      } = identifyCommaEntryAndWhitespace({
        children,
        context
      }));
    }

    entries = (0, _ramda.append)(entry, entries);
    nextChild = (0, _ramda.head)(children);
  }

  return _objectSpread(_objectSpread({}, props), {}, {
    children,
    context,
    entries
  });
};

var _default = identifyEntries;
exports.default = _default;
//# sourceMappingURL=identifyEntries.js.map