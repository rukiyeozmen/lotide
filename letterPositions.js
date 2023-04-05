const letterPositions = function(sentence) {
  const result = {};
  for (i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (!result[letter]) {
        result[letter] = [i];
      }
      else {
        result[letter].push(i);
      }
    }
  }
  return result;
};
const result = letterPositions("hello");
console.log(result);

