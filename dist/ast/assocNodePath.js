"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _assocNodeChild = _interopRequireDefault(require("./assocNodeChild"));

var _getNodeChild = _interopRequireDefault(require("./getNodeChild"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const assocNodePath = (context, path, child, node) => {
  const size = (0, _ramda.length)(path);

  if (size === 0) {
    return child;
  }

  const part = (0, _ramda.head)(path);

  if (size > 1) {
    const nextNode = (0, _getNodeChild.default)(part, node);

    if (!nextNode) {
      throw new Error('nextNode not found - path:', path, ' node:', node);
    } // TODO BRN: This might fail if nextNode does not exist. May need to handle
    // that case.


    child = assocNodePath(context, (0, _ramda.tail)(path), child, nextNode);
  }

  return (0, _assocNodeChild.default)(context, part, child, node);
};

var _default = assocNodePath;
exports.default = _default;
//# sourceMappingURL=assocNodePath.js.map