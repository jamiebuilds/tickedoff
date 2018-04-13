// @flow
'use strict';

var defer;

if (typeof process === 'object' && typeof process.nextTick === 'function') {
  defer = process.nextTick;
} else if (typeof Promise === 'function') {
  var resolve = Promise.resolve();
  defer = resolve.then.bind(resolve);
} else if (typeof setImmediate === 'function') {
  defer = setImmediate;
} else {
  defer = setTimeout;
}

function tickedoff(cb /*: () => mixed */) /*: void */ {
  defer(cb);
}

module.exports = tickedoff;
