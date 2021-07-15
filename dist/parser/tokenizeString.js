"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _stringToStream = _interopRequireDefault(require("string-to-stream"));

var _tokenizeStream = _interopRequireDefault(require("./tokenizeStream"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tokenizeString = async (context, string) => {
  const stream = (0, _stringToStream.default)(string);
  return await (0, _tokenizeStream.default)(context, {
    stream
  });
};

var _default = tokenizeString;
exports.default = _default;
//# sourceMappingURL=tokenizeString.js.map