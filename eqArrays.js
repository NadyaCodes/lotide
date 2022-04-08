const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  let isItTrue = true;

  if (arr1.length !== arr2.length) {
    isItTrue = false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isItTrue = false;
    }
  }

  return isItTrue;
};

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     let equalCounter = 0;

//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         equalCounter++;
//       }
//     }

//     if (equalCounter === arr1.length) {
//       return true;
//     }
//   }
//   return false;
// };

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);