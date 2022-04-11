const eqObjects = require("./eqObjects");

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  let output = `👀 Nope - ${inspect(actual)} !== ${inspect(expected)}`;

  if (eqObjects(actual, expected) === true) {
    output = `🎉🎉🎉 Assertion Passed 🎉🎉🎉 ${inspect(actual)} === ${inspect(expected)}`;
  }

  return console.log(output);
  
};

module.exports = assertObjectsEqual;

// const object1 = { 1: "1", 2: "2", 3: "3"};
// const object2 = { 1: "1", 2: "2", 3: "3"};
// const object3 = { 1: "1", 2: "2", 3: "4"};
// assertObjectsEqual(object1, object2);
// assertObjectsEqual(object1, object3);