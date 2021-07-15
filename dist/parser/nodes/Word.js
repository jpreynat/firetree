"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = require("immutable");

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createWord = _interopRequireDefault(require("../pipes/createWord"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WORD_TOKEN_TYPES = {
  [_constants.TokenTypes.IDENTIFIER]: true,
  [_constants.TokenTypes.KEYWORD_ALLOW]: true,
  [_constants.TokenTypes.KEYWORD_FUNCTION]: true,
  [_constants.TokenTypes.KEYWORD_IF]: true,
  [_constants.TokenTypes.KEYWORD_IS]: true,
  [_constants.TokenTypes.KEYWORD_LET]: true,
  [_constants.TokenTypes.KEYWORD_MATCH]: true,
  [_constants.TokenTypes.KEYWORD_RETURN]: true,
  [_constants.TokenTypes.KEYWORD_SERVICE]: true,
  [_constants.TokenTypes.OPERATOR_AMPERSAND]: true,
  [_constants.TokenTypes.OPERATOR_AT_SIGN]: true,
  [_constants.TokenTypes.OPERATOR_COLON]: true,
  [_constants.TokenTypes.OPERATOR_DOT]: true,
  [_constants.TokenTypes.OPERATOR_MODULUS]: true,
  [_constants.TokenTypes.OPERATOR_MULTIPLY]: true,
  [_constants.TokenTypes.OPERATOR_TILDE]: true,
  [_constants.TokenTypes.OPERATOR_UNARY_MINUS]: true,
  [_constants.TokenTypes.OPERATOR_UNARY_PLUS]: true
};
const Word = {
  identify: (context, node) => node,
  is: value => value && value.type === _constants.NodeTypes.WORD,
  parse: (context, tokenList) => {
    let nextToken = tokenList.get(0);

    if (!nextToken) {
      throw new Error(`Expected one of 'a-zA-Z0-9_-@~&*+%:.' Instead reached the end of the file.`);
    }

    if (!(0, _ramda.has)(nextToken.type, WORD_TOKEN_TYPES)) {
      const {
        lastLineCharacterCount,
        lineCount
      } = (0, _util.getTokenListPosition)(context, tokenList);
      throw new Error(`Expected one of 'a-zA-Z0-9_-@~&*+%:.'. Instead was given '${tokenList.get(0).value}' at ${lineCount}:${lastLineCharacterCount}`);
    }

    let wordTokenList = (0, _immutable.List)();

    while (tokenList.size > 0 && (0, _ramda.has)(nextToken.type, WORD_TOKEN_TYPES)) {
      wordTokenList = wordTokenList.push(nextToken);
      tokenList = (0, _ramda.tail)(tokenList);
      nextToken = tokenList.get(0);
    }

    return (0, _createWord.default)({
      tokenList: wordTokenList
    });
  },
  test: (context, tokenList) => (0, _ramda.has)(tokenList.get(0).type, WORD_TOKEN_TYPES)
};
var _default = Word;
exports.default = _default;
//# sourceMappingURL=Word.js.map