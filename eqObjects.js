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

const eqObjects = function(object1, object2) {
  const negativeOutput = `👀 👀 👀 Assertion Failed!`;
  const positiveOutput = `😀😀😀 Assertion Passed!`;

  let output = negativeOutput;

  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) {

    let arraysEqual = false;

    for (let key1 of keys1) {
      if (Array.isArray(object1[key1])) {
        let arr1 = object1[key1];

        for (let key2 of keys2) {
          if (Array.isArray(object2[key2])) {
            let arr2 = object2[key2];

            if (eqArrays(arr1, arr2)) {
              arraysEqual = true;
            }
          }
        }

        if (arraysEqual === false) {
          return output;
        }
      }
    }

    for (let key1 of keys1) {
      for (let key2 of keys2) {
        if (key1 === key2) {
          if ((object1[key1] === object2[key2])) {
            output = positiveOutput;
            return output;
          }
        }
      }

    }

  }

  return output;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

const abc = {a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));