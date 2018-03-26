// @flow
'use strict';
const test = require('ava');
const defer = require('./');

test.cb('defer()', t => {
  t.plan(1);
  let order = [];
  defer(() => order.push(2));
  defer(() => {
    order.push(3);
    defer(() => {
      order.push(4)
      t.deepEqual(order, [1, 2, 3, 4]);
      t.end();
    });
  });
  order.push(1);
});
