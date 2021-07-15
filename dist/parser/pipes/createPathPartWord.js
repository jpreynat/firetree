"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

const createPathPartWord = ({
  children,
  word
}) => ({
  children,
  id: (0, _uuid.v4)(),
  type: _constants.NodeTypes.PATH_PART_WORD,
  word
});

var _default = createPathPartWord;
exports.default = _default;
//# sourceMappingURL=createPathPartWord.js.map