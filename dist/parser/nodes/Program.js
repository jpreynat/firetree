"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createProgram = _interopRequireDefault(require("../pipes/createProgram"));

var _identifyBodyUntil = _interopRequireDefault(require("../pipes/identifyBodyUntil"));

var _parseBodyUntil = _interopRequireDefault(require("../pipes/parseBodyUntil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseProgramTokens = (0, _ramda.pipe)((0, _parseBodyUntil.default)(() => true), _createProgram.default);
const identifyProgramChildren = (0, _ramda.pipe)((0, _identifyBodyUntil.default)(() => true));
const Program = {
  identify: (context, node) => (0, _createProgram.default)(_objectSpread(_objectSpread({}, identifyProgramChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.PROGRAM,
  parse: (context, tokenList) => parseProgramTokens({
    children: [],
    context,
    tokenList
  })
};
var _default = Program;
exports.default = _default;
//# sourceMappingURL=Program.js.map