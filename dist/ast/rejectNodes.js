"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _utils = require("../utils");

var _identifyNode = _interopRequireDefault(require("./identifyNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rejectNodes = (0, _ramda.curry)((context, predicate, node) => (0, _ramda.pipe)((0, _utils.update)('children', (0, _ramda.reject)(predicate)), (0, _identifyNode.default)(context))(node));
var _default = rejectNodes;
exports.default = _default;
//# sourceMappingURL=rejectNodes.js.map