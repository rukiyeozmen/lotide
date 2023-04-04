const assertEqual = function(actual, expected) {
  return actual === expected;
};

console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
console.assert(assertEqual(1, 1));
console.assert(assertEqual('assert', 'assert'));
console.assert(assertEqual('learning', 'assert'));
console.assert(assertEqual(1, 5));