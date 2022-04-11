const findKeyByValue = (object, value) => {
  let sameKey = '';

  for (let i in object) {
    if (object[i] === value) {
      sameKey = i;
      return sameKey;
    }
  }
};

module.exports = findKeyByValue;
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };


// const assertEqual = require('./assertEqual');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Tha"), undefined);