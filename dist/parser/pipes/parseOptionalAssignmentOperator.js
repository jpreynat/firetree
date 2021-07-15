"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AssignmentOperator = _interopRequireDefault(require("../nodes/AssignmentOperator"));

var _parseAssignmentOperator = _interopRequireDefault(require("./parseAssignmentOperator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parseOptionalAssignmentOperator = props => {
  const {
    context,
    tokenList
  } = props;

  if (!_AssignmentOperator.default.test(context, tokenList)) {
    return props;
  }

  return (0, _parseAssignmentOperator.default)(props);
};

var _default = parseOptionalAssignmentOperator;
exports.default = _default;
//# sourceMappingURL=parseOptionalAssignmentOperator.js.map