"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

var _immutable = require("immutable");

var _lodash = require("lodash");

const makeCacheChain = () => ({
  strongMap: new _immutable.Map(),
  weakMap: new WeakMap()
});

const makeCacheLink = () => ({
  cacheChain: makeCacheChain(),
  ref: {}
});

const isWeakKey = value => (0, _lodash.isObject)(value) && !(0, _immutable.isImmutable)(value);

const setCacheKey = (cacheChain, key, value) => {
  if (isWeakKey(key)) {
    cacheChain.weakMap.set(key, value);
  } else {
    cacheChain.strongMap = cacheChain.strongMap.set(key, value);
  }
};

const getCacheKey = (cacheChain, key) => {
  if (isWeakKey(key)) {
    return cacheChain.weakMap.get(key);
  }

  return cacheChain.strongMap.get(key);
};

const linkCacheKey = (cacheChain, key) => {
  let link = getCacheKey(cacheChain, key);

  if (!link) {
    link = makeCacheLink();
    setCacheKey(cacheChain, key, link);
  }

  return link;
};

const cache = makeCacheChain();
/**
 * This method generates a specific object instance for use in a WeakMap cache.
 * The object instance is unique based upon the parameters that are passed to
 * the this method.
 *
 * The main use of this method is for generating cache keys for memoization and
 * automatically clearing the cache when a value no longer exists in memory.
 *
 * When a non immutable object is passed as an argument it will be stored into a
 * WeakMap as part of a chain. If that object is ever removed from memory all
 * cache chains connected to the object will automatically be removed from the cache.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {...*} args The arguments to generate a cache key for
 * @returns {Object} The cache key
 * @example
 *
 *
 */

const cacheChain = (...args) => {
  let chain = cache;
  let link = linkCacheKey(chain);
  args.forEach(arg => {
    link = linkCacheKey(chain, arg);
    chain = link.cacheChain;
  });
  return link.ref;
};

var _default = cacheChain;
exports.default = _default;
//# sourceMappingURL=cacheChain.js.map