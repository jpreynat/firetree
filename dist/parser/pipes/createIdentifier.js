"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createIdentifier = ({
  id,
  tokenList
}) => ({
  id: id || (0, _uuid.v4)(),
  name: tokenList.get(0).value,
  tokenList,
  type: _constants.NodeTypes.IDENTIFIER
});

var _default = createIdentifier;
exports.default = _default;
//# sourceMappingURL=createIdentifier.js.map