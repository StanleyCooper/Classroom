// Given an array of distinct numbers, you wish to find all pairs of 
// numbers in the array that sum to a given number.

// initialize a new Map
// initialize a new Set
// for each element e of a do:
// add e to the Map
// for each element e of b do:
// lookup e in the Map
// convert the Set to an array and return

function intersection(a, b) {
    const map = new Map();
    const result = new Set();
    for (let e of a) {
        map.set(e, e);
    }
    for (let e of b) {
        if (map.has(e)) {
            result.add(e);
        }
    }
    return Array.from(result);
}

module.exports = intersection;
