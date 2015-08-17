/**
 * @description Lazy-evaluated infinite fibonacci sequence
 *
 * Use a generator and array destructuring to create an infinite sequence
 * of fibonacci numbers. The sequence is lazily evaluated so that next number in
 * the sequence is only created when it is needed.
 */


function* fib() {
  let a = 0, b = 1, t;
  for(;;) {
    t = a;
    a = b;
    b += t;
    yield a;
  }
}

const [a, b, c, d, e] = fib();
console.log(a, b, c, d, e); // 1 1 2 3 5
