"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _ramda = require("ramda");

const walk = (0, _ramda.curryN)(2, (walkee, ...args) => {
  const walker = (...pass) => walkee(...pass, walker);

  return walkee(...args, walker);
});
var _default = walk;
exports.default = _default;
//# sourceMappingURL=walk.js.map