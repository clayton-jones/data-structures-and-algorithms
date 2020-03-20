'use strict';

const shiftTest = require('../array-shift.js');

describe('testing arrLength method', () => {
  it('good input test 1', () => {
    expect(shiftTest.arrLength([1, 2, 3])).toStrictEqual(3);
  });

  it('good input test 2', () => {
    expect(shiftTest.arrLength([1, 2, 3, 4, 5, 6, 2, 3, 4])).toStrictEqual(9);
  });

  it('bad input', () => {
    expect(shiftTest.arrLength('TEST')).toBeFalsy();
  });
});

describe('testing insertShiftArray method', () => {
  it('good input test 1', () => {
    const arr = [1, 2, 3, 4];
    expect(shiftTest.insertShiftArray(arr, 9)).toStrictEqual([1, 2, 9, 3, 4]);
  });

  it('good input test 2', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shiftTest.insertShiftArray(arr, 10)).toStrictEqual([1, 2, 3, 10, 4, 5]);
  });
});

describe('testing stretch goal removeFromMIddle method', () => {
  it('good input test 1', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shiftTest.removeFromMiddle(arr)).toStrictEqual([1, 2, 4, 5]);
  });

  it('good input test 2', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(shiftTest.removeFromMiddle(arr)).toStrictEqual([1, 2, 4, 5 ,6]);
  });
});
