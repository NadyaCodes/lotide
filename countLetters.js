// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
//   return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

const countLetters = function(string) {
  let lettersObject = {};

  for (let letter of string) {
    if (lettersObject[letter]) {
      lettersObject[letter]++;
      // console.log("lettersObject:", lettersObject);
    } else {
      lettersObject[letter] = 1;

    }
  }
  delete lettersObject[' '];
  return lettersObject;
};

console.log(countLetters("LHL"));
console.log(countLetters("this is a very big lighthouse"));
//assertEqual was copied in, but it doesn't help...it can't compare objects