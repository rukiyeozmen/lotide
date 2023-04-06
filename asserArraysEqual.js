// function assertArraysEqual (array1, array2)
// console.log("message")
// first check if the length of the array are equal 
// check if the array is the same



function assertArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("The length of  the arrays are not equal");
    return; //end
  }


  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("The arrays are not equal");
      return;
    }
  }
  console.log("The arrays are equal");
};


assertArrayEqual([1, 2, 3], [1, 2, 3]); //  true
assertArrayEqual([1, 2, 3], [3, 2, 1]);  // false