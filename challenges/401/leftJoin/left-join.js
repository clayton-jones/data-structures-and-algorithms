'use strict';

function leftJoin(left, right) {
  let joinedArray = [];

  // loop over left table to find existing keys
  for ( let i = 0; i < left.length; i++ ) {

    // when we find one, look in other table for a match
    if (left[i]) {
      let leftCurrent = left[i];

      // in case multiple keys were hashed to the same index, loop over list left index (table created with suboptimal hash)
      while(leftCurrent) {

        // does that index exist in the other table?
        if (right[i]) {
          let rightCurrent = right[i];

          // in case there is a key (or keys) at the index, but we don't find a match (table created with suboptimal hash)
          let noMatch = true;

          // loop over linked list at current index to find possible match
          while(rightCurrent) {
            if (leftCurrent.key === rightCurrent.key) {
              joinedArray.push({key: leftCurrent.key, values: [leftCurrent.value, rightCurrent.value]});
              noMatch = false;
            }
            rightCurrent = rightCurrent.next;
          }

          // if we never found a match at the index we were searching in, we still want to add the left key:value to our array
          if (noMatch) {
            joinedArray.push({ key: leftCurrent.key, values: [leftCurrent.value, null]});
          }
          
        // if there wasn't anything in the right table at this index, we want to add the left key:value to the array  
        } else {
          joinedArray.push({ key: leftCurrent.key, values: [leftCurrent.value, null]});
        }
        leftCurrent = leftCurrent.next;
      }
    }
  }

  return joinedArray;
}

module.exports = leftJoin;