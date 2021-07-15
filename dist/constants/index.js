"use strict";

require("core-js/modules/es.array.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenTypes = exports.ParserTypes = exports.Operators = exports.OperatorTypes = exports.NodeTypes = exports.Keywords = void 0;

var Keywords = _interopRequireWildcard(require("./Keywords"));

exports.Keywords = Keywords;

var NodeTypes = _interopRequireWildcard(require("./NodeTypes"));

exports.NodeTypes = NodeTypes;

var OperatorTypes = _interopRequireWildcard(require("./OperatorTypes"));

exports.OperatorTypes = OperatorTypes;

var Operators = _interopRequireWildcard(require("./Operators"));

exports.Operators = Operators;

var ParserTypes = _interopRequireWildcard(require("./ParserTypes"));

exports.ParserTypes = ParserTypes;

var TokenTypes = _interopRequireWildcard(require("./TokenTypes"));

exports.TokenTypes = TokenTypes;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map