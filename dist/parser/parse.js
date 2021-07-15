"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _parseFile = _interopRequireDefault(require("./parseFile"));

var _parseString = _interopRequireDefault(require("./parseString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * parses the rules file at the given `filePath` or parse the given `string`.
 *
 * @function
 * @since v0.1.0
 * @category parser
 * @param {Context} context
 * @param {{
 *   filePath: String,
 *   string: String
 * }}} options
 * @returns {AST}
 * @example
 * import { parse, setupContext } from 'firetree'
 *
 * const context = setupContext()
 *
 * // parse file into an AST
 * const ast = await parse(context, {
 *   filePath: './path/to/firestore.rules'
 * })
 *
 * // parse string into an AST
 * const ast = await parse(context, {
 *   string: someRulesString
 * })
 */
const parse = async (context, {
  filePath,
  string
}) => {
  if (filePath) {
    return (0, _parseFile.default)(context, filePath);
  }

  return (0, _parseString.default)(context, string);
};

var _default = parse;
exports.default = _default;
//# sourceMappingURL=parse.js.map