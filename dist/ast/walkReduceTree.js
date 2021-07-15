"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _ramda = require("ramda");

var _utils = require("../utils");

const forEachIndexed = (0, _ramda.addIndex)(_ramda.forEach);

const forEachAny = (iteratee, value) => {
  if ((0, _lodash.isArray)(value)) {
    return forEachIndexed(iteratee, value);
  }

  return (0, _ramda.forEachObjIndexed)(iteratee, value);
};

const reduceWalkee = (accum, node, keys, iteratee, recur) => {
  let result = iteratee(accum, node, keys);
  const {
    children
  } = node;

  if ((0, _lodash.isObject)(children)) {
    forEachAny((child, childKdx) => {
      const newKeys = (0, _ramda.concat)(keys, [childKdx]);
      result = recur(result, child, newKeys, iteratee);
    }, children);
  }

  return result;
};

const walkReduceTree = (0, _ramda.curry)((iteratee, accum, tree) => (0, _utils.walk)(reduceWalkee, accum, tree, [], iteratee));
var _default = walkReduceTree;
exports.default = _default;
//# sourceMappingURL=walkReduceTree.js.map