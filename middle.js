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

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  const middleArray = [];
  // ! it should return the middle numbers of the arrray 
  // [x] 1) Check if the array is even or odd
  // [x]  2) if the array has even number of arrays return the middle 2 elements
  // [x]  3) if the array has odd number of arrays return the middle element 
  // [x]  Edge case 1: if there is only one element return empty 
  // [x]  Edge case 2: if there is only two element return empty 

  if (array.length <= 2) {
    return [];
  }

  const half = Math.floor(array.length / 2);

  // if odd number return the middle one itemm
  if (array.length % 2) {
    return [array[half]];
  }
  // here it must be even
  return [array[half], array[half + 1]];
};

// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2]));
console.log(middle([1]));