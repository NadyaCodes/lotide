const map = (array, callback) => {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


// const assertArraysEqual = require('./assertArraysEqual');
// //test 1
// const words = ["ground", "control", "to", "major", "tom"];
// const findFirstLetter = word => word[0]
// console.log(map(words, findFirstLetter));
// assertArraysEqual((map(words, findFirstLetter)), [ 'g', 'c', 't', 'm', 't' ]);

// //test 2
// const arrays = [[1, 2], [2, 3], [3, 4]]
// const findFirstNum = arr => arr[0];
// console.log(map(arrays, findFirstNum));
// assertArraysEqual((map(arrays, findFirstNum)), [ 1, 2, 3 ]);

// //test 3
// const topsAndTails = word => word.slice(0, 1) + word.slice(-1);
// console.log(map(words, topsAndTails));
// assertArraysEqual((map(words, topsAndTails)), [ 'gd', 'cl', 'to', 'mr', 'tm' ]);

