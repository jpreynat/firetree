"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _generateTokenList = _interopRequireDefault(require("../../generator/generateTokenList"));

var _createAssignmentExpression = _interopRequireDefault(require("../pipes/createAssignmentExpression"));

var _identifyAssignmentOperator = _interopRequireDefault(require("../pipes/identifyAssignmentOperator"));

var _identifyLeftIdentifier = _interopRequireDefault(require("../pipes/identifyLeftIdentifier"));

var _identifyRight = _interopRequireDefault(require("../pipes/identifyRight"));

var _parseAssignmentOperator = _interopRequireDefault(require("../pipes/parseAssignmentOperator"));

var _parseRight = _interopRequireDefault(require("../pipes/parseRight"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("../pipes/parseWhitespaceAndComments"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("../pipes/skipWhitespaceAndComments"));

var _util = require("../util");

var _Identifier = _interopRequireDefault(require("./Identifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// NOTE BRN: The left of an AssignmentExpression MUST be an identifier
const parseLeft = props => {
  const {
    children,
    context,
    prevExpression,
    tokenList
  } = props;

  if (prevExpression) {
    return _objectSpread(_objectSpread({}, props), {}, {
      children: (0, _ramda.append)(prevExpression, children),
      left: prevExpression
    });
  }

  const left = _Identifier.default.parse(context, tokenList);

  const parsedTokenList = (0, _generateTokenList.default)(context, {
    ast: left
  });
  return _objectSpread(_objectSpread({}, props), {}, {
    children: (0, _ramda.append)(left, children),
    left,
    tokenList: (0, _ramda.slice)(parsedTokenList.size, tokenList.size, tokenList)
  });
};

const parseAssignmentExpressionTokens = (0, _ramda.pipe)(parseLeft, _parseWhitespaceAndComments.default, _parseAssignmentOperator.default, _parseWhitespaceAndComments.default, _parseRight.default, _createAssignmentExpression.default);
const identifyAssignmentExpressionChildren = (0, _ramda.pipe)(_identifyLeftIdentifier.default, _skipWhitespaceAndComments.default, _identifyAssignmentOperator.default, _skipWhitespaceAndComments.default, _identifyRight.default);
const AssignmentExpression = {
  identify: (context, node) => (0, _createAssignmentExpression.default)(_objectSpread(_objectSpread({}, identifyAssignmentExpressionChildren(_objectSpread(_objectSpread({}, node), {}, {
    context
  }))), {}, {
    children: node.children
  })),
  is: value => value && value.type === _constants.NodeTypes.ASSIGNMENT_EXPRESSION,
  // TODO BRN: Might be able to insert methods here for assoc, remove, etc
  // these methods would need to recalculate the values of the node. This is not
  // the same as an original parse, instead,
  parse: (context, tokenList, prevExpression = null) => parseAssignmentExpressionTokens({
    children: [],
    context,
    prevExpression,
    tokenList
  }),
  test: (context, tokenList, prevExpression = null) => {
    if (!prevExpression) {
      // The first real token will be the identifier (can only be a single identifier
      // in firestore rules)
      const identifierToken = (0, _util.findNextRealToken)(tokenList);

      if (!identifierToken || identifierToken.type !== _constants.TokenTypes.IDENTIFIER) {
        return false;
      }
    }

    const operatorToken = (0, _util.findNextRealToken)(tokenList, (0, _util.findNextRealTokenIndex)(tokenList) + (prevExpression ? 0 : 1));
    return operatorToken && operatorToken.type === _constants.TokenTypes.OPERATOR_ASSIGNMENT;
  },
  // NOTE BRN: The first token of a Statement cannot be Whitespace or a Comment
  type: _constants.ParserTypes.EXPRESSION
};
var _default = AssignmentExpression;
exports.default = _default;
//# sourceMappingURL=AssignmentExpression.js.map