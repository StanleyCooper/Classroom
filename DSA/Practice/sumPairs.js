// Given an array of distinct numbers, find all pairs in the array that sum to a given number
// EXAMPLE:
// You are given array = [3, 2, 4, 6, 7, 5]
// You wish to find all pairs that sum = 10
// Return should = [[3, 7], [4, 6]]

//~~         ALGORITHM         ~~//
// inputs: an array of numbers named A
//        a target value named N
//
// initialize a new Map named numbers
// initialize a new Map named solution
//
// for each element e in A do:
//   add e to numbers
//
// for each element e in A do;
//  calculate diff = N - e
//  if diff is not equal to e then  (1)
//     look up diff in numbers
//     if diff is in numbers then
//       add [e, diff] to solution (2)
//
// convert solution to an array and return it


function sumPairs(A, N) {
    const numbers = new Map();
    const solution = new Map();
    for (let e of A) {
      numbers.set(e, e);
    }
    for (let e of A) {
      let diff = N - e;
      if (diff !== e) {
        if (numbers.has(diff)) {
          solution.set(Math.min(e, diff), Math.max(e, diff));
        }
      }
    }
  
    return Array.from(solution);
}

module.exports = sumPairs;