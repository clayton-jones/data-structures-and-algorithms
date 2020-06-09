'use strict';

const insertionSort = require('./insertionSort.js');

let arr1 = [8, 4, 23, 42, 16, 15];
let arr2 = [20,18,12,8,5,-2];
let arr3 = [5,12,7,5,5,7];
let arr4 = [2,3,5,7,13,11];

describe('insertionSort', () => {
  it('array one', () => {
   insertionSort(arr1);

   expect(arr1).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });

  it('array two', () => {
    insertionSort(arr2);

    expect(arr2).toStrictEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('array three', () => {
    insertionSort(arr3);

    expect(arr3).toStrictEqual([5, 5, 5, 7, 7, 12]);
  });

  it('array four', () => {
    insertionSort(arr4);

    expect(arr4).toStrictEqual([2, 3, 5, 7, 11, 13]);
  });
});