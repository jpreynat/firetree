"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cacheChain = _interopRequireDefault(require("./cacheChain"));

var _weakMemoizeWith = _interopRequireDefault(require("./weakMemoizeWith"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const weakMemoize = (0, _weakMemoizeWith.default)(_cacheChain.default);
var _default = weakMemoize;
exports.default = _default;
//# sourceMappingURL=weakMemoize.js.map