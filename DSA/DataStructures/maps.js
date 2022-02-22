// Map: A collection of key-value pairs that remembers the insertion order of the keys

// To create a new map, use the Map() constructor
const addressBook = new Map();

// to add an entry, use the set() method.
// Takes two arguments: a key and a value.
addressBook.set("sherlock", {
    email: "holes@scotlandyard.com",
    address: "221B Baker Street, London",
});
addressBook.set("hercule", {
    email: "poirot@scotlandyard.com",
    address: "Flat 203 at 56B Whitehaven Mansions",
  });
console.log("create a map with a value");
console.log(addressBook);

// Attempting to add a second entry with the same key results in replacing the original value
// Keys are never duplicated.
addressBook.set("sherlock", {
    email: "jones@nypd.com",
    address: "13 5th Avenue, Queens",
});
console.log("Attempt to add a value at an existing key");
console.log(addressBook);

// Maps are like objects... with a few key differences
// - Maps only have the keys you add explicitly yourself
// - keys of maps may be of any type of value, including functions and objects
// - maps remember the insertion order of keys, when iterating keys, they are always in order of insertion
// - you can get the number of enteries in a Map by it's size property

// Retrieve map size
console.log("Map size:");
console.log(addressBook.size);

// To retrieve a value, use the get() method
console.log("Get hercule");
const poirot = addressBook.get("hercule");
console.log(poirot);

// To remove an entry, use delete()
console.log("delete sherlock");
addressBook.delete("sherlock");
console.log(addressBook);

// Iterating using keys(), values(), or entries()
// To print list of usernames using for... of loop
for (let key of addressBook.keys()) {
    console.log(key);
}

// to just print values of Map, you can run...
for (let value of addressBook.values()) {
    console.log(value);
}

// months map
const months = new Map();
months.set(0, "January");
months.set(1, "February");
months.set(2, "March");
months.set(3, "April");
months.set(4, "May");
months.set(5, "June");
months.set(6, "July");
months.set(7, "August");
months.set(8, "September");
months.set(9, "October");
months.set(10, "November");
months.set(11, "December");

// use entries() method on months
for (let [key, value] of months.entries()) {
    console.log(`${key + 1} : ${value}`);
}

// maps also have built in forEach()
months.forEach((value, key) => console.log(`${key + 1} : ${value}`));

// arrays can be turned into a map...
const days = [
    [0, "Sunday"],
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
    [4, "Thursday"],
    [5, "Friday"],
    [6, "Saturday"],
  ];
  const dayMap = new Map(days);
  console.log(dayMap);

  // and maps into arrays...
  const dayArray = [...dayMap];
  console.log(dayArray);

//DESCRIPTION - NOTATION
// set()          O(1)
// delete()       O(1)
// get()          O(1)
// has()          O(1)  