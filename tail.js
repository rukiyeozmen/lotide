const tail = function(arr) {
  return arr.slice(1);
};
const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); 