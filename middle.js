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

const middle = function(array) {
  const howLong = array.length;
  let middleValue = [];
  const middleIndex = Math.floor((howLong / 2));

  if (howLong <= 2) {
    return middleValue;
  }

  if (howLong % 2 !== 0) {
    middleValue.push(array[middleIndex]);
    return middleValue;
  }

  middleValue.push(array[middleIndex - 1]);
  middleValue.push(array[middleIndex]);

  return middleValue;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
