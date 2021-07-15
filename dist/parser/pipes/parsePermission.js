"use strict";

require("core-js/modules/es.array.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _util = require("../util");

var _parseIdentifier2 = _interopRequireDefault(require("./parseIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// https://firebase.google.com/docs/reference/rules/rules#firestore
const PERMISSION_NAMES = {
  create: 'create',
  delete: 'delete',
  get: 'get',
  list: 'list',
  read: 'read',
  update: 'update',
  write: 'write'
};

const isPermissionName = name => !!PERMISSION_NAMES[name];

const parsePermission = props => {
  const _parseIdentifier = (0, _parseIdentifier2.default)(props),
        {
    identifier
  } = _parseIdentifier,
        rest = _objectWithoutProperties(_parseIdentifier, ["identifier"]);

  if (!isPermissionName(identifier.name)) {
    const {
      context,
      tokenList
    } = props;
    const {
      lastLineCharacterCount,
      lineCount
    } = (0, _util.getTokenListPosition)(context, tokenList);
    throw new Error(`Expected permission name (one of ${(0, _ramda.join)(',', (0, _ramda.map)(permissionName => `'${permissionName}'`, (0, _ramda.values)(PERMISSION_NAMES)))}). Instead was given '${tokenList.get(0).value}' at ${lineCount}:${lastLineCharacterCount}`);
  }

  return _objectSpread(_objectSpread({}, rest), {}, {
    permission: identifier
  });
};

var _default = parsePermission;
exports.default = _default;
//# sourceMappingURL=parsePermission.js.map