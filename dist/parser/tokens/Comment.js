"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _TokenTypes = require("../../constants/TokenTypes");

const REGEX_COMMENT_TEST = /^\/\//;
const REGEX_COMMENT_TOKEN = /^\/\/.*(\r\n?|\n)/;
const Comment = {
  parse: (context, data) => {
    const [match] = data.match(REGEX_COMMENT_TOKEN);
    return {
      length: match.length,
      type: _TokenTypes.COMMENT,
      value: match
    };
  },
  test: (context, data) => REGEX_COMMENT_TEST.test(data)
};
var _default = Comment;
exports.default = _default;
//# sourceMappingURL=Comment.js.map