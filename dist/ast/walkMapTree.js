"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _assocNodePath = _interopRequireDefault(require("./assocNodePath"));

var _walkReduceTree = _interopRequireDefault(require("./walkReduceTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const walkMapTree = (0, _ramda.curry)((context, iteratee, tree) => (0, _walkReduceTree.default)((accum, node, keys) => {
  const result = iteratee(node, keys, tree);

  if (result !== node) {
    return (0, _assocNodePath.default)(context, keys, result, accum);
  }

  return accum;
}, tree, tree));
var _default = walkMapTree;
exports.default = _default;
//# sourceMappingURL=walkMapTree.js.map