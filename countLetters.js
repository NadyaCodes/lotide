const countLetters = (string) => {
  let lettersObject = {};

  for (let letter of string) {

    if (lettersObject[letter]) {
      lettersObject[letter]++;

    } else {
      lettersObject[letter] = 1;
    }
  }

  delete lettersObject[' '];
  return lettersObject;
};

module.exports = countLetters;

// console.log(countLetters("LHL"));
// console.log(countLetters("this is a very big lighthouse"));
