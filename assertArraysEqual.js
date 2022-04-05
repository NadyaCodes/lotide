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
    console.log(`🎉🎉🎉 Assertion Passed 🎉🎉🎉 ${arr1} === ${arr2}`);
  } else {
    console.log(`👀 Nope - ${arr1} !== ${arr2}`);

  }
  
};

assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual([1, 2, 3, 4], [2, 3, 4, 1]);