'use strict';

const Stack = require('../../../data-structures/stacksAndQueues/stacks-and-queues.js').Stack;

function multiBracketValidation(input) {
if (input.length <= 1) return false;
if (typeof input !== 'string') throw Error('Invalid input.');

  let charArr = input.split('');
  let myStack = new Stack();
  let frontBracketRegex = /[\[{(]/gm;
  let endBracketRegex = /[)}\]]/gm;

  for (let i = 0; i < charArr.length; i++) {
    if (frontBracketRegex.test(charArr[i])) {
      myStack.push(charArr[i]);
    }

    if (endBracketRegex.test(charArr[i])) {
      if (myStack.isEmpty()) return false;
      
      let topBracket = myStack.pop();

      if (topBracket === '{') {
        if (charArr[i] !== '}') {
          return false;
        }
      } else

      if (topBracket === '(') {
        if (charArr[i] !== ')') {
          return false;
        }
      } else

      if (topBracket === '[') {
        if (charArr[i] !== ']') {
          return false;
        }
      }
    }
  }

  if (myStack.top) return false;

  return true;
}

module.exports = multiBracketValidation;