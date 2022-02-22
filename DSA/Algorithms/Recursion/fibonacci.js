/*
 * Return the nth fibonacci number
 * @param {integer} n
 */

function fibonacci(n) {
    console.log("forward case:", n);
  
    if (n === 0) {
      console.log("base case:", n);
      return 0;
    }
  
    if (n === 1) {
      return 1;
    }
  
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(fibonacci(5));
  
  module.exports = fibonacci;