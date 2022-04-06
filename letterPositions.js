const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let equalCounter = 0;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        equalCounter++;
      }
    }

    if (equalCounter === arr1.length) {
      return true;
    }
  }
  return false;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`🎉🎉🎉 Assertion Passed 🎉🎉🎉 ${arr1} === ${arr2}`);
  }
  return console.log(`👀 Nope - ${arr1} !== ${arr2}`);
  
};


const letterPositions = function(sentence) {
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

console.log(letterPositions('hello'));
console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions("hello").e, [1]);
