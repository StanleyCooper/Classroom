// Various Search Algorithms

// Linear Search Algorithm
function indexOf(value, elements) {
    for (let index = 0; index < elements.length; index++) {
      if (elements[index] === value) {
        return index;
      }
    }
    return -1;
}

// Better Search Algorithm (Can handle objects)
function indexOf(isMatch, elements) {
    if (Array.isArray(elements)) {
      for (let index = 0, length = elements.length; index < length; index++) {
        if (isMatch(elements[index], index, elements)) {
          return index;
        }
      }
    }
    return -1;
}

// Example of an isMatch() function
function personIs81(person) {
    return person.age === 81;
}
