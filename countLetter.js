const assertEqual = function(actual, expected) {
  return actual === expected;
};

const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (letter === ' ') {
      continue;
    }
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter]++;
  }
  return result;
};
const result = countLetters("lighthouse in the house");
console.log(result);
