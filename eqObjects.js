const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
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

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));

// const abc = {a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc));

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc));

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2));