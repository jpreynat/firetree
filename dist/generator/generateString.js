"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tokenToString = _interopRequireDefault(require("../token/tokenToString"));

var _generateTokenList = _interopRequireDefault(require("./generateTokenList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateString = (context, {
  ast,
  tokenList
}) => {
  if (ast) {
    tokenList = (0, _generateTokenList.default)(context, {
      ast
    });
  }

  return tokenList.reduce((result, token) => result + (0, _tokenToString.default)(token), '');
};

var _default = generateString;
exports.default = _default;
//# sourceMappingURL=generateString.js.map