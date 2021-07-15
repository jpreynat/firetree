"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _fsExtra = require("fs-extra");

var _tokenToString = _interopRequireDefault(require("../token/tokenToString"));

var _generateTokenList = _interopRequireDefault(require("./generateTokenList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateFile = async (context, {
  ast,
  outputFilePath,
  tokenList
}) => {
  if (ast) {
    tokenList = (0, _generateTokenList.default)(context, {
      ast
    });
  }

  await (0, _fsExtra.ensureFile)(outputFilePath);
  const fileStream = (0, _fsExtra.createWriteStream)(outputFilePath);
  tokenList.forEach(token => {
    fileStream.write((0, _tokenToString.default)(token));
  });
  return new Promise((resolve, reject) => {
    fileStream.end(resolve);
    fileStream.on('error', reject);
  });
};

var _default = generateFile;
exports.default = _default;
//# sourceMappingURL=generateFile.js.map