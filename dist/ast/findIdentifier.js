"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _utils = require("../utils");

const findIdentifier = (0, _ramda.curry)((0, _utils.weakMemoize)((identifiers, node) => (0, _ramda.find)(Node => Node.is(node), identifiers)));
var _default = findIdentifier;
exports.default = _default;
//# sourceMappingURL=findIdentifier.js.map