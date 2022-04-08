const assertEqual = function(actual, expected) {
  let output = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  if (actual === expected) {
    output = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
 
  console.log(output);
};

const eqArrays = function(arr1, arr2) {
  let stillTrue = true;

  if (arr1.length !== arr2.length) {
    stillTrue = false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      stillTrue = false;
    }
  }

  return stillTrue;
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