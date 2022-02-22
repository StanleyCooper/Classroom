// Taken from my sets, maps, and arrays assignment
// My own solutions, perhaps there are better ones out there?
// Thinkful.com - Engineering Flex

/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
 function anagram(s1, s2) {
    // split into an array, sort, then rejoin 
    const sorted1 = s1.split("").sort().join("").toLowerCase();
    const sorted2 = s2.split("").sort().join("").toLowerCase();
    
    // Check if they are the same
    if (sorted1 == sorted2) {
      return true;
    }
    return false;
}

/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
 function anagramGroups(words) {
    // solution map
    const solution = new Map();
    // for each word in words
    for (word of words) {
      // split, sort, and rejoin
      let sortedWord = word.split("").sort().join("").toLowerCase();
      
      // Is sorted word represented in our map?
      if (solution.has(sortedWord)) {
        // add our sorted word to the list
        solution.get(sortedWord).push(word);
      } else {
        // Otherwise, create a new key for the word
        solution.set(sortedWord, [word]);
      }
    }
    console.log(Array.from(solution));
    // return an array of solutions
    return Array.from(solution.values());
}
  
// Out of curiosity...
const words = ["tepo", "hello", "poly", "fact"] // no anagrams
console.log(anagramGroups(words));

/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
 function permutationPalindrome(word) {
    // create a set to hold values
    let letters = new Set();
    // split our word into letters and for each letter...
    word.split("").forEach(letter => {
      // check if we have that letter present in our set
      if (letters.has(letter)) {
        // if so, we delete that letter from the set (cancels eachother out)
        letters.delete(letter)
      } else {
        // otherwise, we add that letter to our set to see if it will be canceled out
        letters.add(letter);
      }
    })
    // Now we check to see the size of our remaining letters
    if (letters.size <= 1) {
      // if only 1 or less letters remain, our word was a palindrome in desquise
      return true;
    }
    // sounds like it wasn't a palindrome...
    return false;
}
  
/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
 function firstSingleCharacter(word) {
    // distinct letter map
    const letters = new Map();
    
    // Fill up our map with letters from word
    for (let letter of word) {
      console.log(letter);
      // Check if map has letter as a key
      if (letters.has(letter)) {
        // Overwrite key with "X" flag
        letters.set(letter, "X");
      } else {
        // Create a key for letter with "O" flag
        letters.set(letter, "O")
      }
    }
    
    console.log("Our map!", letters); // IT WORKS! :)
    
    // Now loop through that map until we find the first key with only 1 value
    for (let key of letters) {
      console.log("key of", key);
      // Check size of value
      if (key.includes("O")) {
        return key[0];
      }
    }
    return null;
}
  
