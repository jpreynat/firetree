"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buffer = require("buffer");

var _ramda = require("ramda");

var _uuid = require("uuid");

var _constants = require("../../constants");

const Literal = {
  identify: (context, node) => node,
  is: value => value.type === _constants.NodeTypes.LITERAL,
  parse: (context, tokenList) => {
    const identifier = tokenList.get(0);
    return {
      id: (0, _uuid.v4)(),
      raw: identifier.value,
      tokenList: (0, _ramda.slice)(0, 1, tokenList),
      type: _constants.NodeTypes.LITERAL,
      value: identifier.type === _constants.TokenTypes.BYTES ? _buffer.Buffer.from(eval(identifier.value.substring(1, identifier.value.length))) : eval(identifier.value)
    };
  },
  test: (context, tokenList) => {
    const firstToken = tokenList.get(0);
    return firstToken && ( // Booleans & Null
    firstToken.type === _constants.TokenTypes.IDENTIFIER && (firstToken.value === 'true' || firstToken.value === 'false' || firstToken.value === 'null') || // Bytes
    firstToken.type === _constants.TokenTypes.BYTES || // Numbers
    firstToken.type === _constants.TokenTypes.NUMBER || // Strings
    firstToken.type === _constants.TokenTypes.STRING);
  }
};
var _default = Literal;
exports.default = _default;
//# sourceMappingURL=Literal.js.map