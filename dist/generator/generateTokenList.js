"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = require("immutable");

var _ramda = require("ramda");

var _walkReduceTree = _interopRequireDefault(require("../ast/walkReduceTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateTokenList = (context, {
  ast
}) => {
  // walk the ast. Find all leaves of the tree and get the tokenList from them.
  // Concat all leaves together to reform the token list
  return (0, _walkReduceTree.default)((accum, node) => {
    if ((0, _ramda.isNil)(node.children) || (0, _ramda.isEmpty)(node.children)) {
      return (0, _ramda.concat)(accum, node.tokenList);
    }

    return accum;
  }, (0, _immutable.List)(), ast);
};

var _default = generateTokenList;
exports.default = _default;
//# sourceMappingURL=generateTokenList.js.map