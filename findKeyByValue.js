const assertEqual = function(actual, expected) {
  return actual === expected;
};

// Implement the function findKeyByValue which takes in an object and a value. 
// It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(obj, value) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));