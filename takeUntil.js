const takeUntil = function(array, callback) {
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

//TEST CASES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//CHECKER CODE TAKEN FROM ELSEWHERE - TRYNG IT BELOW INSTEAD OF THE TOP
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

assertArraysEqual((results1), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual((results2), [ "I've", 'been', 'to', 'Hollywood' ]);