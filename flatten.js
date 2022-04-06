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

const flatten = function(array) {
  let newArray = [];
  for (let arrayElement of array) {
    if (Array.isArray(arrayElement)) {
      for (let arrayPiece of arrayElement) {
        newArray.push(arrayPiece);
      }
    } else {
      newArray.push(arrayElement);
    }
  }
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);