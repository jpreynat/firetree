"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _ramda = require("ramda");

var _functionDefineLength = _interopRequireDefault(require("./functionDefineLength"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const weakMemoizeWith = (0, _ramda.curryN)(2, (mFn, fn) => {
  const cache = new WeakMap();
  return (0, _functionDefineLength.default)((...args) => {
    const key = mFn(...args);

    if (!cache.has(key)) {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }

    return cache.get(key);
  }, fn.length);
});
var _default = weakMemoizeWith;
exports.default = _default;
//# sourceMappingURL=weakMemoizeWith.js.map