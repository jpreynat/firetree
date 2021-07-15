"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createWhitespace = _interopRequireDefault(require("../pipes/createWhitespace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Whitespace = {
  identify: (context, node) => node,
  is: value => value && value.type === _constants.NodeTypes.WHITESPACE,
  parse: (context, tokenList) => {
    const nextToken = tokenList.get(0);

    if (!nextToken) {
      throw new Error(`Expected whitespace . Instead reached the end of the file.`);
    }

    return (0, _createWhitespace.default)({
      tokenList: (0, _ramda.slice)(0, 1, tokenList)
    });
  },
  test: (context, tokenList) => tokenList.get(0).type === _constants.TokenTypes.WHITESPACE
};
var _default = Whitespace;
exports.default = _default;
//# sourceMappingURL=Whitespace.js.map