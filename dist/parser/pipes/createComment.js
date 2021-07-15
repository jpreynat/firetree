"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createComment = ({
  id,
  tokenList
}) => ({
  id: id || (0, _uuid.v4)(),
  tokenList,
  type: _constants.NodeTypes.COMMENT,
  value: tokenList.get(0).value
});

var _default = createComment;
exports.default = _default;
//# sourceMappingURL=createComment.js.map