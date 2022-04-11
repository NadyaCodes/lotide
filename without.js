const without = (source, itemsToRemove) => {
  let finalArray = [];

  for (let element of source) {
    finalArray.push(element);

    for (let item of itemsToRemove) {
      if (element === item) {
        finalArray.pop();
      }
    }
  }
  return finalArray;
  
};

module.exports = without;

// const assertArraysEqual = require('./assertArraysEqual');
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without([1, 2, 3, '4', 5], [4, '5']), [1, 2, 3, '4', 5]);
// assertArraysEqual(without([1], [1]), []);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);