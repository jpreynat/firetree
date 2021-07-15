"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createReturnKeyword = _interopRequireDefault(require("../pipes/createReturnKeyword"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReturnKeyword = {
  identify: (context, node) => node,
  is: value => value && value.type === _constants.NodeTypes.KEYWORD && value.name === _constants.Keywords.RETURN,
  parse: (context, tokenList) => {
    const nextToken = tokenList.get(0);

    if (!nextToken) {
      throw new Error(`Expected keyword '${_constants.Keywords.RETURN}'. Instead reached the end of the file.`);
    }

    if (nextToken.type !== _constants.TokenTypes.KEYWORD_RETURN) {
      const {
        lastLineCharacterCount,
        lineCount
      } = (0, _util.getTokenListPosition)(context, tokenList);
      throw new Error(`Expected keyword '${_constants.Keywords.RETURN}'. Instead was given '${tokenList.get(0).value}' at ${lineCount}:${lastLineCharacterCount}`);
    }

    return (0, _createReturnKeyword.default)({
      tokenList: (0, _ramda.slice)(0, 1, tokenList)
    });
  },
  test: (context, tokenList) => {
    const firstToken = tokenList.get(0);
    return firstToken.type === _constants.TokenTypes.KEYWORD_RETURN;
  },
  type: _constants.ParserTypes.KEYWORD
};
var _default = ReturnKeyword;
exports.default = _default;
//# sourceMappingURL=ReturnKeyword.js.map