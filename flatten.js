const flatten = (array) => {
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

module.exports = flatten;

// const assertArraysEqual = require('./assertArraysEqual');
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
