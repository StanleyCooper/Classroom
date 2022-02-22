/*
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
*/

 function power(base, exponent) {
    if (exponent < 0) throw new Error("exponent should be >= 0");
    // Forward case
    console.log("forward case:", base, "^", exponent);
  
    // Base Case - if exponent is 1, return 3
    if (exponent === 1) {
      console.log("base case:", base);
      return base;
    } else if (exponent === 0) {
      console.log("base case:", 1);
      return 1;
    }
  
    //backward case
    const totalRecursion = power(base, exponent - 1);
  
    console.log("backward case:", totalRecursion);
  
    return base * totalRecursion;
  }
  
  console.log(power(3, 5));
  
  module.exports = power;