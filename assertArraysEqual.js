const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  let output = `👀 Nope - ${arr1} !== ${arr2}`;

  if (eqArrays(arr1, arr2)) {
    output = `🎉🎉🎉 Assertion Passed 🎉🎉🎉 ${arr1} === ${arr2}`;
  }
  
  return console.log(output);
};

module.exports = assertArraysEqual;

