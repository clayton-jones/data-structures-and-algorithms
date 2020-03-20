'use strict';

// returns the length of the input array
function arrLength (arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  let length = 0;
  while(arr[length]) {
    length++;
  }
  return length;
}

// returns an array that has had a value added into the middle of the input array
function insertShiftArray (arr, num) {
  let length = arrLength(arr);
  let newArr = new Array(length + 1);
  let middleIndex = Math.ceil(length / 2);
  for (let i = 0; i < length + 1; i++) {
    if (i === middleIndex) {
      newArr[i] = num;
    } else if (i > middleIndex) {
      newArr[i] = arr[i - 1];
    } else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}

// Stretch goal: returns an array that has the middle index removed
function removeFromMiddle (arr) {
  let length = arrLength(arr);
  let newArr = new Array(length - 1);
  let middleIndex = Math.ceil(length / 2);
  if (middleIndex % 2 === 1) {
    middleIndex--;
  }
  for (let i = 0; i < length - 1; i++) {
    if (i >= middleIndex) {
      newArr[i] = arr[i + 1];
    } else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}

// console.log('arrayShift:', arrayShift(arr2, 9));
// console.log('removeFromMiddle:', removeFromMiddle(arr2));


module.exports = { arrLength, insertShiftArray, removeFromMiddle };
