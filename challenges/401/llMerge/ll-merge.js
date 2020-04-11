'use strict';

const LinkedList = require('../../../data-structures/linkedList/linked-list.js').LinkedList;

function mergeLists(list1, list2) {
  let newLL = new LinkedList();

  let nodeOne = list1.head;
  let nodeTwo = list2.head;

  while(nodeOne.next && nodeTwo.next) {
    newLL.append(nodeOne.val);
    newLL.append(nodeTwo.val);

    nodeOne = nodeOne.next;
    nodeTwo = nodeTwo.next;
  }

  while(nodeOne) {
    newLL.append(nodeOne.val);
    nodeOne = nodeOne.next;
  }

  while(nodeTwo) {
    newLL.append(nodeTwo.val);
    nodeTwo = nodeTwo.next;
  }

  return newLL.head;
};

// let testLL1 = new LinkedList();
// let testLL2 = new LinkedList();

// testLL1.append(1);
// testLL1.append(3);
// testLL1.append(5);

// testLL2.append(2);
// testLL2.append(4);
// testLL2.append(6);
// testLL2.append(8);

// mergeLists(testLL1, testLL2);

module.exports = mergeLists;