"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MultiplyOperator = _interopRequireDefault(require("../nodes/MultiplyOperator"));

var _parseMultiplyOperator = _interopRequireDefault(require("./parseMultiplyOperator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parseOptionalMultiplyOperator = props => {
  const {
    context,
    tokenList
  } = props;

  if (!_MultiplyOperator.default.test(context, tokenList)) {
    return props;
  }

  return (0, _parseMultiplyOperator.default)(props);
};

var _default = parseOptionalMultiplyOperator;
exports.default = _default;
//# sourceMappingURL=parseOptionalMultiplyOperator.js.map