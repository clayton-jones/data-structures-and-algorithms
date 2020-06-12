const mergeSort = require('./mergeSort.js');

describe('mergeSort', () => {
  it('sorts arrays', () => {
    let arr = [8,4,23,42,16,15];
    mergeSort(arr);
    expect(arr).toEqual([4, 8, 15, 16, 23,42]);
  });

  it('sorts reverse sorted arrays', () => {
    let arr = [20,18,12,8,5,-2];
    mergeSort(arr);
    expect(arr).toEqual([-2, 5, 8, 12,18,20]);
  });

  it('sorts arrays with few uniques', () => {
    let arr = [5,12,7,5,5,7];
    mergeSort(arr);
    expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('sorts almost sorted arrays', () => {
    let arr = [2,3,5,7,13,11];
    mergeSort(arr);
    expect(arr).toEqual([2, 3, 5, 7, 11, 13]);
  });

  it('handles a single element array', () => {
    let arr = [5];
    mergeSort(arr);
    expect(arr).toEqual([5]);
  });

  it('handles empty array', () => {
    let arr = [];
    mergeSort(arr);
    expect(arr).toEqual([]);
  });
});
