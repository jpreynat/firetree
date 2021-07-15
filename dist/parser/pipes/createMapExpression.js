"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _uuid = require("uuid");

var _constants = require("../../constants");

const createMapExpression = ({
  children,
  entries,
  id
}) => ({
  children,
  entries,
  id: id || (0, _uuid.v4)(),
  type: _constants.NodeTypes.MAP_EXPRESSION
});

var _default = createMapExpression;
exports.default = _default;
//# sourceMappingURL=createMapExpression.js.map