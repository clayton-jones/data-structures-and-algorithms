'use strict';

const LinkedList = require('../../../data-structures/linkedList/linked-list.js').LinkedList;

const mergeLists = require('./ll-merge.js');

describe('testing mergeLists function', () => {
  it('merges lists of same size', () => {
    let llOne = new LinkedList();
    let llTwo = new LinkedList();

    llOne.append(1);
    llOne.append(3);
    llOne.append(5);

    llTwo.append(2);
    llTwo.append(4);
    llTwo.append(6);

    let mergeHead = mergeLists(llOne, llTwo);
    let newArr = [];
    while(mergeHead) {
      newArr.push(mergeHead.val);
      mergeHead = mergeHead.next;
    };
    expect(newArr).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  it('merges lists of different sizes', () => {
    let llOne = new LinkedList();
    let llTwo = new LinkedList();

    llOne.append(1);
    llOne.append(3);
    llOne.append(5);

    llTwo.append(2);
    llTwo.append(4);
    llTwo.append(6);
    llTwo.append(8);

    let mergeHead = mergeLists(llOne, llTwo);
    let newArr = [];
    while(mergeHead) {
      newArr.push(mergeHead.val);
      mergeHead = mergeHead.next;
    };
    expect(newArr).toStrictEqual([1, 2, 3, 4, 5, 6, 8]);
  });
});