const letterPositions = (sentence) => {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;

// const assertArraysEqual = require('./assertArraysEqual');
// console.log(letterPositions('hello'));
// console.log(letterPositions('lighthouse in the house'));
// assertArraysEqual(letterPositions("hello").e, [1]);
