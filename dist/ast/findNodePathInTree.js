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

const findWalkee = (node, path, predicate, recur) => {
  const bool = predicate(node, path);

  if (bool) {
    // NOTE BRN: If we receive the break symbol, it means that the node's children
    // should not be explored
    if (bool === Symbol.for('break')) {
      return undefined;
    }

    return path;
  }

  const {
    children
  } = node;

  if ((0, _lodash.isObject)(children)) {
    return (0, _ramda.reduce)((acc, childKdx) => {
      const child = children[childKdx];
      const newPath = (0, _ramda.concat)(path, [childKdx]);
      const result = recur(child, newPath, predicate);

      if (result) {
        return (0, _ramda.reduced)(result);
      }
    }, undefined, (0, _lodash.isArray)(children) ? children.keys() : (0, _ramda.keys)(children));
  }
};

const findNodePathInTree = (0, _ramda.curry)((0, _utils.measure)('findNodePathInTree', (predicate, tree) => (0, _utils.walk)(findWalkee, tree, [], predicate)));
var _default = findNodePathInTree;
exports.default = _default;
//# sourceMappingURL=findNodePathInTree.js.map