/**
 * @description Use Symbols to quickly iterate over an object
 *
 * Symbols have a unqiue characteristc wherein they are skipped over when using
 * a for-in loop. If we use a symbol as an object key, it will be skipped
 * over allowing us store arbitraily large amounts of data on an object
 * without any sort of iteration penalty.
 *
 *
 * Time to iterate over 10,000,000 keys:
 *  Chrome:
 *    Standard keys: 2295.003ms
 *    Symbol keys: 389.066ms
 *
 *  Firefox:
 *  Standard keys: 2270.73ms
 *  Symbol keys: 41.96ms
 */

(function() {
  'use strict';

  let obj = {};
  // Build object with standard keys
  for (var i = 0; i < 1e7; i++) {
    obj[i] = 1;
  }

  console.time('Standard keys');
  for (let x in obj) {}
  console.timeEnd('Standard keys');

})();

(function() {
  'use strict';

  let obj = {};
  // Build object with Symbol keys
  for (var i = 0; i < 1e7; i++) {
    obj[Symbol()] = 1;
  }

  console.time('Symbol keys');
  for (let x in obj) {}
  console.timeEnd('Symbol keys');
})();
