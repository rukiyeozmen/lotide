const head = function head(arr) {
  return arr[0];
};
const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
};
const words = ["Yo-Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); 