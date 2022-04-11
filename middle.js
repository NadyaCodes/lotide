const middle = (array) => {
  const howLong = array.length;
  let middleValue = [];
  const middleIndex = Math.floor((howLong / 2));

  //if input is less or equal to two
  if (howLong <= 2) {
    return middleValue;
  }

  //if input is even
  if (howLong % 2 !== 0) {
    middleValue.push(array[middleIndex]);
    return middleValue;
  }

  //if input isn't even
  middleValue.push(array[middleIndex - 1]);
  middleValue.push(array[middleIndex]);

  return middleValue;
};

module.exports = middle;

