"use strict";

require("core-js/modules/es.array.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _immutable = require("immutable");

var _ramda = require("ramda");

var _utils = require("../utils");

var Tokens = _interopRequireWildcard(require("./tokens"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TokenParsers = (0, _ramda.map)(name => {
  // eslint-disable-next-line import/namespace
  const TokenParser = Tokens[name];
  TokenParser.name = name;
  return TokenParser;
}, (0, _ramda.keys)(Tokens));

const getDataFromStream = async stream => {
  let data = '';
  stream.on('data', chunk => {
    data = data += chunk.toString();
  });
  return new Promise((resolve, reject) => {
    stream.on('end', () => resolve(data));
    stream.on('error', reject);
  });
};

const parseNextToken = (context, data) => {
  const tokenParser = (0, _ramda.find)(parser => parser.test(context, data), TokenParsers);

  if (!tokenParser) {
    const {
      originalData
    } = context;
    const {
      lastLineCharacterCount,
      lineCount
    } = (0, _utils.countLinesAndCharacters)(originalData.substring(0, originalData.length - data.length));
    throw new Error(`Do not know how to parse '${data.substring(0, data.search(/\n/))}' at ${lineCount}:${lastLineCharacterCount}`);
  }

  return tokenParser.parse(context, data);
};

const tokenizeStream = async (context, {
  stream
}) => {
  let data = await getDataFromStream(stream);
  let list = (0, _immutable.List)([]);
  context = (0, _ramda.assoc)('originalData', data, context);

  while (data.length > 0) {
    try {
      const token = parseNextToken(context, data);
      list = list.push(token);
      data = data.substring(token.length);
    } catch (error) {
      // console.log('error:', error)
      throw error;
    }
  } // let log = '['
  // list.forEach((listToken) => {
  //   log += `  ${listToken.type} length: ${listToken.length},\n`
  // })
  // log += ']'
  // console.log(log)


  return list;
};

var _default = tokenizeStream;
exports.default = _default;
//# sourceMappingURL=tokenizeStream.js.map