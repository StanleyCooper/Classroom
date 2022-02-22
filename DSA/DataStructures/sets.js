// Set: A collection of unique values

//Construct using Set();
const numbers = new Set();

//Add values using add().
numbers.add(3);
numbers.add(7);
numbers.add(5);
console.log("Added numbers");
console.log(numbers);

// Duplicated will remain unchanges
numbers.add(3);
console.log("Try to add duplicate");
console.log(numbers);

// To remove from a set, use delete()
numbers.delete(3);
console.log("Delete number");
console.log(numbers);

// Find the sum of each item in a set
let sum = 0;
for (let num of numbers.values()) {
    sum = sum + num;
}
console.log("Iterate to sum");
console.log(sum);

// forEach() works similar as with arrays
let sum2 = 0;
numbers.forEach((e) => (sum2 = sum2 + e));
console.log("forEach method");
console.log(sum2);

// Working with arrays
const studentGrades = ["B", "F", "A", "A", "D", "B", "A", "F"];
const uniqueGrades = new Set(studentGrades) // Dupes will be removed
for (let grade of uniqueGrades.values()) {
    console.log(grade); // "B", "F", "A", "D"
}

// Create an array from a set
const distinctGrades = [...uniqueGrades];
console.log(distinctGrades);

// removing dupes (string example)
// How many unique characters are in 'Date Structures'
const word = "Data Structures";
const set = new Set(word.toLowerCase());
console.log(set);
console.log(set.size);

//DESCRIPTION - NOTATION
// add()          O(1)
// delete()       O(1)
// forEach()      O(n)
// has()          O(1)  