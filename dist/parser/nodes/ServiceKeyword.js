"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createServiceKeyword = _interopRequireDefault(require("../pipes/createServiceKeyword"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ServiceKeyword = {
  identify: (context, node) => node,
  is: value => value && value.type === _constants.NodeTypes.KEYWORD && value.name === _constants.Keywords.SERVICE,
  parse: (context, tokenList) => {
    const nextToken = tokenList.get(0);

    if (!nextToken) {
      throw new Error(`Expected keyword '${_constants.Keywords.SERVICE}'. Instead reached the end of the file.`);
    }

    if (nextToken.type !== _constants.TokenTypes.KEYWORD_SERVICE) {
      const {
        lastLineCharacterCount,
        lineCount
      } = (0, _util.getTokenListPosition)(context, tokenList);
      throw new Error(`Expected keyword '${_constants.Keywords.SERVICE}'. Instead was given '${tokenList.get(0).value}' at ${lineCount}:${lastLineCharacterCount}`);
    }

    return (0, _createServiceKeyword.default)({
      tokenList: (0, _ramda.slice)(0, 1, tokenList)
    });
  },
  test: (context, tokenList) => {
    const firstToken = tokenList.get(0);
    return firstToken.type === _constants.TokenTypes.KEYWORD_SERVICE;
  },
  type: _constants.ParserTypes.KEYWORD
};
var _default = ServiceKeyword;
exports.default = _default;
//# sourceMappingURL=ServiceKeyword.js.map