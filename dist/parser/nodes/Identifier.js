"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createIdentifier = _interopRequireDefault(require("../pipes/createIdentifier"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Identifier = {
  identify: (context, node) => node,
  is: value => value.type === _constants.NodeTypes.IDENTIFIER,
  parse: (context, tokenList) => {
    const nextToken = tokenList.get(0);

    if (!nextToken) {
      throw new Error(`Expected identifier. Instead reached the end of the file.`);
    }

    if (nextToken.type !== _constants.TokenTypes.IDENTIFIER) {
      const {
        lastLineCharacterCount,
        lineCount
      } = (0, _util.getTokenListPosition)(context, tokenList);
      throw new Error(`Expected Identifier. Instead was given '${tokenList.get(0).value}' at ${lineCount}:${lastLineCharacterCount}`);
    }

    return (0, _createIdentifier.default)({
      tokenList: (0, _ramda.slice)(0, 1, tokenList)
    });
  },
  test: (context, tokenList) => tokenList.get(0).type === _constants.TokenTypes.IDENTIFIER
};
var _default = Identifier;
exports.default = _default;
//# sourceMappingURL=Identifier.js.map