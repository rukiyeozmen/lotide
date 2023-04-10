// const { asserArraysEqual, eqArray, middle } = require('../middle');


// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2]));
// console.log(middle([1]));

const assert = require('chai').assert;
const { middle } = require('../middle');

describe('middle', () => {
  it('returns an empty array when given an empty array', () => {
    assert.deepEqual(middle([]), []);
    assert.deepEqual(middle([1, 2]), []);
    assert.deepEqual(middle([1]), []);
  });

  it('returns the middle element of an array with an odd number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('returns the middle two elements of an array with an even number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});