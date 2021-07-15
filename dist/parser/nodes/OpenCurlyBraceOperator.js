"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createOpenCurlyBraceOperator = _interopRequireDefault(require("../pipes/createOpenCurlyBraceOperator"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OpenCurlyBraceOperator = {
  identify: (context, node) => node,
  is: value => value && value.type === _constants.NodeTypes.OPERATOR && value.operatorType === _constants.OperatorTypes.OPEN_CURLY_BRACE,
  parse: (context, tokenList) => {
    const nextToken = tokenList.get(0);

    if (!nextToken) {
      throw new Error(`Expected operator '${_constants.Operators.OPEN_CURLY_BRACE}'. Instead reached the end of the file.`);
    }

    if (nextToken.type !== _constants.TokenTypes.OPERATOR_OPEN_CURLY_BRACE) {
      const {
        lastLineCharacterCount,
        lineCount
      } = (0, _util.getTokenListPosition)(context, tokenList);
      throw new Error(`Expected operator '${_constants.Operators.OPEN_CURLY_BRACE}'. Instead was given '${tokenList.get(0).value}' at ${lineCount}:${lastLineCharacterCount}`);
    }

    return (0, _createOpenCurlyBraceOperator.default)({
      tokenList: (0, _ramda.slice)(0, 1, tokenList)
    });
  },
  test: (context, tokenList) => tokenList.get(0).type === _constants.TokenTypes.OPERATOR_OPEN_CURLY_BRACE,
  type: _constants.ParserTypes.OPERATOR
};
var _default = OpenCurlyBraceOperator;
exports.default = _default;
//# sourceMappingURL=OpenCurlyBraceOperator.js.map