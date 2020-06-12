'use strict';

function mergeSort(arr) {
  let n = arr.length;

  // if array has only 1 element, nothing to do, return
  if( n < 2 ) return;

  // finding mid point of array
  let mid = Math.ceil(n / 2);

  let left = [];

  // adding left half of array to left array
  for(let i = 0; i < mid; i++) {
    left.push(arr[i]);
  }

  let right = [];
  // adding right half of array to right array
  for(let i = mid; i < arr.length; i++) {
    right.push(arr[i]);
  }
  
  // sort left half of array
  mergeSort(left);
  
  // sort right half of array
  mergeSort(right);

  // merge sorted halves, modifying original array
  merge(left, right, arr);
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {

    if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
    } else {
        arr[k] = right[j];
        j++;
    }

    k++;
  }

  while(i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while(j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

module.exports = mergeSort;