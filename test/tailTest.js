const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('returns [3, 1] for [2, 3, 1]', () => {
    assert.deepEqual(tail([2, 3, 1]), [3, 1]);
  });
  it('returns [] for ["Hello]', () => {
    assert.deepEqual(tail(["Hello"]), []);
  });
  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
  it('original array length remains the same', () => {
    const array = [1, 2, 3];
    tail([1, 2, 3]);
    assert.strictEqual(array.length, 3);
  });

});

