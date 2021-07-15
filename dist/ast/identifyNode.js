"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _findIdentifier = _interopRequireDefault(require("./findIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const identifyNode = (0, _ramda.curry)((context, node) => {
  const identifier = (0, _findIdentifier.default)(context.Identifiers, node);

  if (!identifier) {
    throw new Error(`Could not find Identifier for ${JSON.stringify(node, null, 2)}`);
  }

  return identifier.identify(context, node);
});
var _default = identifyNode;
exports.default = _default;
//# sourceMappingURL=identifyNode.js.map