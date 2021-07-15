"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createComment = _interopRequireDefault(require("../pipes/createComment"));

var _getTokenListPosition = _interopRequireDefault(require("../util/getTokenListPosition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Comment = {
  identify: (context, node) => node,
  is: value => value && value.type === _constants.NodeTypes.COMMENT,
  parse: (context, tokenList) => {
    const nextToken = tokenList.get(0);

    if (!nextToken) {
      throw new Error('Expected Comment. Instead reached the end of the file.');
    }

    if (nextToken.type !== _constants.TokenTypes.COMMENT) {
      const {
        lastLineCharacterCount,
        lineCount
      } = (0, _getTokenListPosition.default)(context, tokenList);
      throw new Error(`Expected Comment. Instead was given '${tokenList.get(0).value}' at ${lineCount}:${lastLineCharacterCount}`);
    }

    return (0, _createComment.default)({
      tokenList: (0, _ramda.slice)(0, 1, tokenList)
    });
  },
  test: (context, tokenList) => tokenList.get(0).type === _constants.TokenTypes.COMMENT
};
var _default = Comment;
exports.default = _default;
//# sourceMappingURL=Comment.js.map