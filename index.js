// @flow
'use strict';

module.exports = (
    (typeof process === 'object' && process.nextTick) ||
    (typeof Promise === 'function' && Promise.resolve().then.bind(Promise)) ||
    (typeof setImmediate === 'function' && setImmediate) ||
    setTimeout
);
