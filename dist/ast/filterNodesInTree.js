"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.array.iterator.js");

var _lodash = require("lodash");

var _ramda = require("ramda");

var _utils = require("../utils");

const filterWalkee = (node, path, predicate, recur) => {
  let matches = [];
  const bool = predicate(node, path);

  if (bool) {
    // NOTE BRN: If we receive the break symbol, it means that the node's children
    // should not be explored
    if (bool === Symbol.for('break')) {
      return undefined;
    }

    matches = [node];
  }

  const {
    children
  } = node;

  if (!(0, _lodash.isObject)(children)) {
    return matches;
  }

  return (0, _ramda.reduce)((acc, childKdx) => {
    const child = children[childKdx];
    const newPath = (0, _ramda.concat)(path, [childKdx]);
    const result = recur(child, newPath, predicate);

    if (result) {
      return (0, _ramda.concat)(acc, result);
    }

    return acc;
  }, matches, (0, _lodash.isArray)(children) ? children.keys() : (0, _ramda.keys)(children));
};

const filterNodesInTree = (0, _ramda.curry)((0, _utils.measure)('filterNodesInTree', (predicate, tree) => (0, _utils.walk)(filterWalkee, tree, [], predicate)));
var _default = filterNodesInTree;
exports.default = _default;
//# sourceMappingURL=filterNodesInTree.js.map