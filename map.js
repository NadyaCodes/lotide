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

const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//test 1
const words = ["ground", "control", "to", "major", "tom"];
const findFirstLetter = word => word[0]
console.log(map(words, findFirstLetter));
assertArraysEqual((map(words, findFirstLetter)), [ 'g', 'c', 't', 'm', 't' ]);

//test 2
const arrays = [[1, 2], [2, 3], [3, 4]]
const findFirstNum = arr => arr[0];
console.log(map(arrays, findFirstNum));
assertArraysEqual((map(arrays, findFirstNum)), [ 1, 2, 3 ]);

//test 3
const topsAndTails = word => word.slice(0, 1) + word.slice(-1);
console.log(map(words, topsAndTails));
assertArraysEqual((map(words, topsAndTails)), [ 'gd', 'cl', 'to', 'mr', 'tm' ]);

