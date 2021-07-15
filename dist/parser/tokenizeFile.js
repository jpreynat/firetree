"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _path = require("path");

var _fsExtra = require("fs-extra");

var _tokenizeStream = _interopRequireDefault(require("./tokenizeStream"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tokenizeFile = async (context, filePath) => {
  filePath = (0, _path.resolve)(filePath);

  if (!(await (0, _fsExtra.pathExists)(filePath))) {
    throw new Error(`rules file '${filePath}' does not exist`);
  }

  const stream = (0, _fsExtra.createReadStream)(filePath);
  return await (0, _tokenizeStream.default)(context, {
    stream
  });
};

var _default = tokenizeFile;
exports.default = _default;
//# sourceMappingURL=tokenizeFile.js.map