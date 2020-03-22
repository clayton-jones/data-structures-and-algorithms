'use strict';

const arrayBinarySearch = require('../array-binary-search.js');

const arr = [2, 5, 6, 8, 9];

const bigArr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 34, 36,38,41,43,45,46,48,53,54,57,58,65,66,69,76,77,78,79,80,82,84,86,87, 110, 123,132,142,154,166, 167, 168, 189, 190, 191, 200];

const smallArr = [4];

const emptyArr = [];

describe('testing arrayBinarySearch function', () => {
  
  it('testing: target does not exist', () => {
    expect(arrayBinarySearch(arr, 4)).toStrictEqual(-1);
  });

  it('testing: target exists at first index', () => {
    expect(arrayBinarySearch(arr, 2)).toStrictEqual(0);
  });

  it('testing: target exists at last index', () => {
    expect(arrayBinarySearch(arr, 9)).toStrictEqual(4);
  });

  it('testing large array, target exists', () => {
    expect(arrayBinarySearch(bigArr, 87)).toStrictEqual(33);
  });

  it('testing large array, target does not exists', () => {
    expect(arrayBinarySearch(bigArr, 68)).toStrictEqual(-1);
  });

  it('testing single value array, target exists', () => {
    expect(arrayBinarySearch(smallArr, 4)).toStrictEqual(0);
  });

  it('testing single value array, target does not exists', () => {
    expect(arrayBinarySearch(smallArr, 10)).toStrictEqual(-1);
  });

  it('testing empty array', () => {
    expect(arrayBinarySearch(emptyArr, 10)).toStrictEqual(-1);
  });

});