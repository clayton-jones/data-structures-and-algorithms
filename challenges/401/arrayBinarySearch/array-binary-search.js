'use strict';

function arrayBinarySearch(arr, target) {

  // if array has no values, return -1
  if (arr.length === 0) {
    return -1;
  }

  let midIndex = Math.floor((arr.length) / 2);

  // while the target is not at the current middle index...
  while (arr[midIndex] !== target) {

    // checking to see if target is next to middle index
    if (arr[midIndex - 1] === target) {
      return midIndex - 1;
    }

    if (arr[midIndex + 1] === target) {
      return midIndex + 1;
    }

    // if the target is between the value @ middle index and either values next to middle index, it is not in the array
    // or if the middle index is currently at the first or last value, we are finished, and the target is not in the array
    if (arr[midIndex - 1] < target && arr[midIndex + 1] > target || midIndex === 0 || midIndex === arr.length - 1) {
      return -1;
    }
    
    // if the target is larger than the middle index value, shift middle index to larger half of array
    if (arr[midIndex] < target) {
      midIndex = Math.floor((arr.length + midIndex + 1) / 2);
    }

    // if target is smaller than the middle index value, shift middle index to smaller half of array
    if (arr[midIndex] > target) {
      midIndex = Math.floor((midIndex / 2));
    }

  }

  return midIndex;

}


module.exports = arrayBinarySearch;
