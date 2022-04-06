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

const without = function(source, itemsToRemove) {
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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3, '4', 5], [4, '5']), [1, 2, 3, '4', 5]);
assertArraysEqual(without([1], [1]), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);