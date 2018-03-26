// @flow
'use strict';

var defer;

if (typeof setImmediate === 'function') {
  defer = setImmediate;
} else if (typeof process === 'object') {
  defer = process.nextTick;
} else if (typeof Promise === 'function') {
  var resolve = Promise.resolve();
  defer = resolve.then.bind(resolve);
} else {
  defer = setTimeout;
}

function tickedoff(cb /*: () => mixed */) /*: void */ {
  defer(cb);
}

module.exports = tickedoff;
