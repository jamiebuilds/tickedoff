// @flow
'use strict';

function run(name, fn, times) {
  let start = Date.now();
  function next(curr) {
    if (curr >= times) {
      let end = Date.now();
      console.log(`${name} x ${times} = ${end - start}ms`);
    } else {
      fn(() => next(curr + 1));
    }
  }
  next(0);
}

run('process.nextTick', process.nextTick, 10000);
run('setImmediate', setImmediate, 10000);
run('Promise#then', Promise.resolve().then.bind(Promise.resolve()), 10000);
run('setTimeout', setTimeout, 10000);
