const takeUntil = (array, callback) => {
  let finalArray = [];

  for (let item of array) {
    if (callback(item) === true) {
      return finalArray;
    }
    finalArray.push(item);
  }
  //just in case it's never true
  return finalArray;
};

module.exports = takeUntil;

// //TEST CASES
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// const assertArraysEqual = require('./assertArraysEqual');
// assertArraysEqual((results1), [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual((results2), [ "I've", 'been', 'to', 'Hollywood' ]);