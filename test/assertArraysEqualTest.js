const assertArrayEqual = require('../asserArraysEqual');


assertArrayEqual([1, 2, 3], [1, 2, 3]); //  true
assertArrayEqual([1, 2, 3], [3, 2, 1]);  // false