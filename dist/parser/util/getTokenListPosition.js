"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _generateString = _interopRequireDefault(require("../../generator/generateString"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getTokenListPosition = (context, tokenList) => {
  const {
    originalTokenList
  } = context;
  const originalData = (0, _generateString.default)(context, {
    tokenList: originalTokenList
  });
  const remaningData = (0, _generateString.default)(context, {
    tokenList
  });
  return (0, _utils.countLinesAndCharacters)(originalData.substring(0, originalData.length - remaningData.length));
};

var _default = getTokenListPosition;
exports.default = _default;
//# sourceMappingURL=getTokenListPosition.js.map