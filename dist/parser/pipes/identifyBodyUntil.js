"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// import Comment from '../nodes/Comment'
// import Declaration from '../nodes/Declaration'
// import Statement from '../nodes/Statement'
// import Whitespace from '../nodes/Whitespace'
// import { identifyNextNode } from '../util'
// NOTE BRN: This needs to be slightly different based on which type of block
// this is (allow, function, etc...)
// const BODY_IDENTIFIERS = [Comment, Whitespace, Declaration, Statement]
// const identifyBodyNode = identifyNextNode(BODY_IDENTIFIERS)
const identifyBodyUntil = (0, _ramda.curry)((predicate, _ref) => {
  let {
    children,
    context
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "context"]);

  let body = [];

  while ((0, _ramda.length)(children) > 0 && !predicate({
    children,
    context
  })) {
    const nextChild = (0, _ramda.head)(children); // const node = identifyBodyNode(context, nextChild)

    children = (0, _ramda.tail)(children);

    if (nextChild.type !== _constants.NodeTypes.WHITESPACE && nextChild.type !== _constants.NodeTypes.COMMENT) {
      body = (0, _ramda.append)(nextChild, body);
    }
  }

  return _objectSpread(_objectSpread({}, rest), {}, {
    body,
    children,
    context
  });
});
var _default = identifyBodyUntil;
exports.default = _default;
//# sourceMappingURL=identifyBodyUntil.js.map