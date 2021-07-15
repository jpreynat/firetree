"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _createDotOperator = _interopRequireDefault(require("../pipes/createDotOperator"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DotOperator = {
  identify: (context, node) => node,
  is: value => value && value.type === _constants.NodeTypes.OPERATOR && value.operatorType === _constants.OperatorTypes.DOT,
  parse: (context, tokenList) => {
    const nextToken = tokenList.get(0);

    if (!nextToken) {
      throw new Error(`Expected operator '${_constants.Operators.DOT}'. Instead reached the end of the file.`);
    }

    if (nextToken.type !== _constants.TokenTypes.OPERATOR_DOT) {
      const {
        lastLineCharacterCount,
        lineCount
      } = (0, _util.getTokenListPosition)(context, tokenList);
      throw new Error(`Expected operator '${_constants.Operators.DOT}'. Instead was given '${tokenList.get(0).value}' at ${lineCount}:${lastLineCharacterCount}`);
    }

    return (0, _createDotOperator.default)({
      tokenList: (0, _ramda.slice)(0, 1, tokenList)
    });
  },
  test: (context, tokenList) => tokenList.get(0).type === _constants.TokenTypes.OPERATOR_DOT,
  type: _constants.ParserTypes.OPERATOR
};
var _default = DotOperator;
exports.default = _default;
//# sourceMappingURL=DotOperator.js.map