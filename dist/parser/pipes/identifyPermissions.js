"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _CommaOperator = _interopRequireDefault(require("../nodes/CommaOperator"));

var _Identifier = _interopRequireDefault(require("../nodes/Identifier"));

var _expectCommaOperator = _interopRequireDefault(require("./expectCommaOperator"));

var _identifyPermission = _interopRequireDefault(require("./identifyPermission"));

var _skipWhitespaceAndComments = _interopRequireDefault(require("./skipWhitespaceAndComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const identifyPermissionAndWhitespace = (0, _ramda.pipe)(_skipWhitespaceAndComments.default, _identifyPermission.default, _skipWhitespaceAndComments.default);
const identifyCommaPermissionAndWhitespace = (0, _ramda.pipe)(_expectCommaOperator.default, identifyPermissionAndWhitespace);

const identifyPermissions = props => {
  let {
    children,
    context
  } = props;
  let permissions = [];
  let first = true;
  let nextChild = (0, _ramda.head)(children);

  while ((0, _ramda.length)(children) > 0 && (first && _Identifier.default.is(nextChild) || !first && _CommaOperator.default.is(nextChild))) {
    let permission;

    if (first) {
      first = false;
      ({
        children,
        context,
        permission
      } = identifyPermissionAndWhitespace({
        children,
        context
      }));
    } else {
      ;
      ({
        children,
        context,
        permission
      } = identifyCommaPermissionAndWhitespace({
        children,
        context
      }));
    }

    permissions = (0, _ramda.append)(permission, permissions);
    nextChild = (0, _ramda.head)(children);
  }

  return _objectSpread(_objectSpread({}, props), {}, {
    children,
    context,
    permissions
  });
};

var _default = identifyPermissions;
exports.default = _default;
//# sourceMappingURL=identifyPermissions.js.map