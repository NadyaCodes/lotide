const findKey = (object, callback) => {
  for (let i in object) {
    let keyValue = object[i];
    if (callback(keyValue)) {
      return i;
    }
  }
};

module.exports = findKey;

// //Parameters1:

// const assertEqual = require('./assertEqual');
// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3},
//   "noma": { stars: 2},
//   "elBulli": { stars: 3},
//   "Ora": { stars: 2},
//   "Akelarra": { stars: 3 }
// }, x => x.stars === 2);

// //Check 1
// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3},
//   "noma": { stars: 2},
//   "elBulli": { stars: 3},
//   "Ora": { stars: 2},
//   "Akelarra": { stars: 3 }
// }, x => x.stars === 2), 'noma');


// //Parameters2:
// findKey({
//   "Blue Hill": { moons: 1 },
//   "Akaleri": { moons: 3},
//   "noma": { moons: 2},
//   "elBulli": { moons: 3},
//   "Ora": { moons: 2},
//   "Akelarra": { moons: 3 }
// }, x => x.moons === 3);

// //Check 2
// assertEqual(findKey({
//   "Blue Hill": { moons: 1 },
//   "Akaleri": { moons: 3},
//   "noma": { moons: 2},
//   "elBulli": { moons: 3},
//   "Ora": { moons: 2},
//   "Akelarra": { moons: 3 }
// }, x => x.moons === 3), 'Akaleri');