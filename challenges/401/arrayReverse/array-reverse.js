'use strict';


function arrLength(arr) {
  let length = 0;
  while (arr[length]) {
    length++;
  };
  return length;
}

function reverseArray(arr) {
  let length = arrLength(arr);
  let newArr = new Array(length);
  let j = 0;
  for (let i = length - 1; i >= 0; i--) {
     newArr[j] = arr[i];
     j++;
  }
  return newArr;
};
