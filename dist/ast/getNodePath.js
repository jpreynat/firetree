"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _ramda = require("ramda");

var _getNodeChild = _interopRequireDefault(require("./getNodeChild"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getNodePath = (path, node) => {
  let val = node;
  let idx = 0;
  const size = (0, _ramda.length)(path);

  while (idx < size) {
    val = (0, _getNodeChild.default)(path[idx], val);

    if ((0, _lodash.isUndefined)(val)) {
      return val;
    }

    idx += 1;
  }

  return val;
};

var _default = getNodePath;
exports.default = _default;
//# sourceMappingURL=getNodePath.js.map