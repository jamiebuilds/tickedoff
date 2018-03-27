// @flow
'use strict';

var defer;

if (typeof process === 'object') {
  defer = process.nextTick;
} else if (typeof Promise === 'function') {
  var resolve = Promise.resolve();
  defer = resolve.then.bind(resolve);
} else if (typeof setImmediate === 'function') {
  defer = setImmediate;
} else {
  defer = setTimeout;
}

module.exports = defer;
