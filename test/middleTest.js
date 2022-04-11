const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("reutrns [] with input [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] with input [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] with input [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2, 3] with input [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3] with input [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [3, 4] with input [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});