"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _ramda = require("ramda");

var _ast = require("../../ast");

const identifyNextNode = (0, _ramda.curry)((identifiers, context, node, ...rest) => {
  if (!context) {
    throw new Error('context must be defined');
  }

  const nodeIdentifier = (0, _ast.findIdentifier)(identifiers, node);

  if (!nodeIdentifier) {
    throw new Error(`Could not identify node '${JSON.stringify(node, null, 2)}'`);
  }

  if (!nodeIdentifier.identify) {
    throw new Error(`${nodeIdentifier.name} identifier does not implement the 'identify' method.`);
  }

  return nodeIdentifier.identify(context, node, ...rest);
});
var _default = identifyNextNode;
exports.default = _default;
//# sourceMappingURL=identifyNextNode.js.map