"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _generateFile = _interopRequireDefault(require("./generateFile"));

var _generateString = _interopRequireDefault(require("./generateString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a rules file from the given `ast` or `tokenList` and outputs the
 * rules to the given `outpitFilePath`. If no `outputFilePath` is given, a
 * string is returned.
 *
 * @function
 * @since v0.1.0
 * @category generator
 * @param {Context} context
 * @param {{
 *   ast: AST,
 *   outputFilePath: String,
 *   tokenList: List<Token>
 * }}} options
 * @returns {String}
 * @example
 * import { generate, parse, setupContext } from 'firetree'
 *
 * const context = setupContext()
 *
 * // parse rules into an AST
 * const ast = await parse(context, {
 *   string: 'function () { return true }'
 * })
 *
 * // generate rules and output to file
 * const ast = await generate(context, {
 *   ast,
 *   outputFilePath: 'path/to/firestore.rules'
 * })
 */
const generate = async (context, {
  ast,
  outputFilePath,
  tokenList
}) => {
  if (outputFilePath) {
    return (0, _generateFile.default)(context, {
      ast,
      outputFilePath,
      tokenList
    });
  }

  return (0, _generateString.default)(context, {
    ast,
    tokenList
  });
};

var _default = generate;
exports.default = _default;
//# sourceMappingURL=generate.js.map