// Base case: The solution to the "simplest" possible problem; this case provides a terminating condition for the recursive case
// Recursive case: Where you call the same function to solve increasingly simple versions of the problem

//Recusive Factorial (bottom-up)
function factorial(number) {
    console.log("Forward phase", number);
  
    // Base case
    if (number <= 1) {
      console.log("base case", number);
      return 1;
    }
  
    // Recursive case
    const numberMinusOneFactorial = factorial(number - 1);
  
    console.log("Backward phase", number, "*", numberMinusOneFactorial);
  
    return number * numberMinusOneFactorial;
}
  
console.log(factorial(5)); 

// Top down factorial
function factorial(number, total = 1) {
    console.log("Forward phase", number, "*", total);
  
    // Base case stays the same
    if (number <= 1) {
      console.log("base case", number);
      return total;
    }
  
    total = factorial(number - 1, total * number);
  
    console.log("Backward phase", number, total);
    return total;
}
  
console.log(factorial(5)); 

// Iterative factorial
function factorial(number) {
    // Base case
    if (number <= 1) {
      return 1;
    }
  
    // Penultimate means second to the last in a series.
    let penultimate = 1;
    let total = 0;
  
    // Calculate the factorial from 1 to `number`
    for (let ultimate = 1; ultimate <= number; ultimate++) {
      console.log(ultimate, "*", penultimate);
      total = ultimate * penultimate;
      penultimate = total;
    }
    return total;
}
console.log(factorial(5)); 

function sum(n) {
    // Check the base case
    if (n === 1) {
      return 1;
    }
  
    return n + sum(n - 1);
}
console.log(sum(6));

/*
PSEUDOCODE for concept string spliter
function split(text, separator):
  // Inputs: text - the string to be split
             separator - the character to be used to split the text

  search for the first occurrence of the separator in the text
  // Base case
  if no separator is found then:
     return [text]

  // Recursive case
  extract substring from character 0 to index of first occurrence of separator
  extract rest of string from first occurrence of separator + 1 to end of string
  recursively solve the rest of string
  insert the substring in the resulting array
  return the array  
*/

  function split(text, separator) {
    // Find the index of the first occurrence of separator
    let index = text.indexOf(separator);
  
    // Base case
    if (index === -1) {
      return [text];
    }
  
    // Find the substrings
    let start = text.substring(0, index);
    let rest = text.substring(index + 1);
  
    // Recursive call
    let restSolution = split(rest, separator);
  
    // Insert the first substring
    restSolution.unshift(start);
  
    return restSolution;
}
console.log(split("hello this is me", " "));






  


  
  



