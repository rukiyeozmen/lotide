const head = function(arr) {
  return arr[0];
};
const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");