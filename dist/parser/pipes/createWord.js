"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _constants = require("../../constants");

var _generateString = _interopRequireDefault(require("../../generator/generateString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createWord = ({
  context,
  id,
  tokenList
}) => ({
  id: id || (0, _uuid.v4)(),
  tokenList,
  type: _constants.NodeTypes.WORD,
  value: (0, _generateString.default)(context, {
    tokenList
  })
});

var _default = createWord;
exports.default = _default;
//# sourceMappingURL=createWord.js.map