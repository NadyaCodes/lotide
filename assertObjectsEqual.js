//tests to see if arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let equalCounter = 0;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        equalCounter++;
      }
    }

    if (equalCounter === arr1.length) {
      return true;
    }
  }
  return false;
};

//tests to see if objects are equal
const eqObjects = function(object1, object2) {
  
  //truth counter
  let objectTrue = 0;

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //if keys are same length
  if (keys1.length === keys2.length) {

    //loop through both sets of keys
    for (let key1 of keys1) {
      for (let key2 of keys2) {

        //if values are arrays, proceed
        if ((Array.isArray(object1[key1])) && (Array.isArray(object2[key2]))) {
          let arr1 = object1[key1];
          let arr2 = object2[key2];

          //if values match, the truth counter goes up
          if (eqArrays(arr1, arr2) === false) {
            return false;
          }

          objectTrue++;

        } else {

          //if not an array, and if values match, the counter goes up
          if (key1 === key2) {
            if (object1[key1] === object2[key2]) {
              objectTrue++;
            }
          }
        }

        //at the end, if the counter is the same value as the number of keys, it's good to go!
        if (objectTrue === keys1.length) {
          return true;
        }
      }
    }
  } return false;
};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    return console.log(`🎉🎉🎉 Assertion Passed 🎉🎉🎉 ${inspect(actual)} === ${inspect(expected)}`);
  }

  return console.log(`👀 Nope - ${inspect(actual)} !== ${inspect(expected)}`);
  
};

const object1 = { 1: "1", 2: "2", 3: "3"};
const object2 = { 1: "1", 2: "2", 3: "3"};
const object3 = { 1: "1", 2: "2", 3: "4"};
assertObjectsEqual(object1, object2);
assertObjectsEqual(object1, object3);