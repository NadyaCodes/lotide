const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tailArray = [];
const tail = function(array) {
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
//console.log(tailArray);
assertEqual(words.length, 3);