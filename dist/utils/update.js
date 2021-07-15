"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

const update = (0, _ramda.curry)((propName, updater, value) => {
  const current = (0, _ramda.prop)(propName, value);
  const result = updater(current);

  if (result !== current) {
    return (0, _ramda.assoc)(propName, result, value);
  }

  return value;
});
var _default = update;
exports.default = _default;
//# sourceMappingURL=update.js.map