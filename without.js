
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// function takes 2 arrays
// loop over the first array
// nested loop with second array
// create new array 
// push the matching element into the new array

const without = function(arr1, arr2) {
  let withoutArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        withoutArray.push(arr1[i]);
      }
    }
  }
  return withoutArray;
};

console.log(without([1, 2, 3], [1])); // [2,3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));