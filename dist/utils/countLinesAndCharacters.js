"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

const countLinesAndCharacters = string => {
  const lines = (0, _ramda.split)(/\r\n|\r|\n/, string);
  const lineCount = lines.length;
  const lastLineCharacterCount = (0, _ramda.last)(lines).length;
  return {
    lastLineCharacterCount,
    lineCount
  };
};

var _default = countLinesAndCharacters;
exports.default = _default;
//# sourceMappingURL=countLinesAndCharacters.js.map