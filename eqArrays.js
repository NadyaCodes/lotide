const eqArrays = (arr1, arr2) => {
  let isItTrue = true;

  if (arr1.length !== arr2.length) {
    isItTrue = false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isItTrue = false;
    }
  }

  return isItTrue;
};

module.exports = eqArrays;