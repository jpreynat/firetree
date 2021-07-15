"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _ramda = require("ramda");

const isNextNode = (identifiers, node, ...rest) => (0, _ramda.any)(identifier => {
  if (!identifier.is) {
    throw new Error(`${identifier.name} identifier does not implement the 'test' method.`);
  }

  return identifier.is(node, ...rest);
}, identifiers);

var _default = isNextNode;
exports.default = _default;
//# sourceMappingURL=isNextNode.js.map