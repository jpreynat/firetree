"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _ramda = require("ramda");

const testNextNode = (parsers, context, tokenList, ...rest) => (0, _ramda.any)(parser => {
  if (!parser.test) {
    throw new Error(`${parser.name} parser does not implement the 'test' method.`);
  }

  return parser.test(context, tokenList, ...rest);
}, parsers);

var _default = testNextNode;
exports.default = _default;
//# sourceMappingURL=testNextNode.js.map