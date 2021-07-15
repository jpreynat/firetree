"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _constants = require("../../constants");

var _parseCommaOperator = _interopRequireDefault(require("./parseCommaOperator"));

var _parsePermission = _interopRequireDefault(require("./parsePermission"));

var _parseWhitespaceAndComments = _interopRequireDefault(require("./parseWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parsePermissionAndWhitespace = (0, _ramda.pipe)(_parseWhitespaceAndComments.default, _parsePermission.default, _parseWhitespaceAndComments.default);
const parseCommaPermissionAndWhitespace = (0, _ramda.pipe)(_parseCommaOperator.default, parsePermissionAndWhitespace);

const parsePermissions = props => {
  let {
    children,
    context,
    tokenList
  } = props;
  let permissions = [];
  let first = true;
  let nextToken = tokenList.get(0);

  while (tokenList.size > 0 && (first && nextToken.type === _constants.TokenTypes.IDENTIFIER || !first && nextToken.type === _constants.TokenTypes.OPERATOR_COMMA)) {
    let permission;

    if (first) {
      first = false;
      ({
        children,
        context,
        permission,
        tokenList
      } = parsePermissionAndWhitespace({
        children,
        context,
        tokenList
      }));
    } else {
      ;
      ({
        children,
        context,
        permission,
        tokenList
      } = parseCommaPermissionAndWhitespace({
        children,
        context,
        tokenList
      }));
    }

    permissions = (0, _ramda.append)(permission, permissions);
    nextToken = tokenList.get(0);
  }

  return _objectSpread(_objectSpread({}, props), {}, {
    children,
    context,
    permissions,
    tokenList
  });
};

var _default = parsePermissions;
exports.default = _default;
//# sourceMappingURL=parsePermissions.js.map