"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createEntry = _interopRequireDefault(require("../pipes/createEntry"));

var _expectColonOperator = _interopRequireDefault(require("../pipes/expectColonOperator"));

var _identifyKey = _interopRequireDefault(require("../pipes/identifyKey"));

var _identifyValue = _interopRequireDefault(require("../pipes/identifyValue"));

var _parseColonOperator = _interopRequireDefault(require("../pipes/parseColonOperator"));

var _parseKey = _interopRequireDefault(require("../pipes/parseKey"));

var _parseValue = _interopRequireDefault(require("../pipes/parseValue"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseEntryTokens = (0, _ramda.pipe)(_parseKey.default, _parseWhitespaceAndComments.default, _parseColonOperator.default, _parseWhitespaceAndComments.default, _parseValue.default, _createEntry.default);
const identifyEntryChildren = (0, _ramda.pipe)(_identifyKey.default, _skipWhitespaceAndComments.default, _expectColonOperator.default, _skipWhitespaceAndComments.default, _identifyValue.default);
const Entry = {
  identify: (context, node) => (0, _createEntry.default)(_objectSpread(_objectSpread({}, identifyEntryChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.ENTRY,
  parse: (context, tokenList) => parseEntryTokens({
    children: [],
    context,
    tokenList
  }),
  test: () => false
};
var _default = Entry;
exports.default = _default;
//# sourceMappingURL=Entry.js.map