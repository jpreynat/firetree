"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ast = require("./ast");

Object.keys(_ast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ast[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ast[key];
    }
  });
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _context = require("./context");

Object.keys(_context).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _context[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _context[key];
    }
  });
});

var _generator = require("./generator");

Object.keys(_generator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _generator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generator[key];
    }
  });
});

var _parser = require("./parser");

Object.keys(_parser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _parser[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parser[key];
    }
  });
});

var _token = require("./token");

Object.keys(_token).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _token[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _token[key];
    }
  });
});

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});
//# sourceMappingURL=index.js.map