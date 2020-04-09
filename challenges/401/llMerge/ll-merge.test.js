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

    expect(mergeLists(llOne, llTwo).val).toBe(1);

  });
});