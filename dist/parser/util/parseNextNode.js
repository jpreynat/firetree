"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _ramda = require("ramda");

var _getTokenListPosition = _interopRequireDefault(require("./getTokenListPosition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parseNextNode = (0, _ramda.curry)((parsers, context, tokenList, ...rest) => {
  if (!context) {
    throw new Error('context must be defined');
  }

  const nodeParser = (0, _ramda.find)(parser => parser.test(context, tokenList, ...rest), parsers);

  if (!nodeParser) {
    const {
      lastLineCharacterCount,
      lineCount
    } = (0, _getTokenListPosition.default)(context, tokenList);
    throw new Error(`Unexpected token '${tokenList.get(0).value}' at ${lineCount}:${lastLineCharacterCount}`);
  }

  if (!nodeParser.parse) {
    throw new Error(`${nodeParser.name} parser does not implement the 'parse' method.`);
  }

  return nodeParser.parse(context, tokenList, ...rest);
});
var _default = parseNextNode;
exports.default = _default;
//# sourceMappingURL=parseNextNode.js.map