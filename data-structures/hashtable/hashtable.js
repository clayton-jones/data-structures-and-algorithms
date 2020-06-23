'use strict';

const LinkedList = require('../linkedList/linked-list').LinkedList;

class Hashtable {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
  }

  add(key, val) {
    let index = this.hash(key);

    if (this.contains(key)) return;

    if (!this.arr[index]) {
      // create linkedlist to be added to array
      let list = new LinkedList();

      // add key:value pair to linked list
      list.insert({key: key, value: val});

      // add linked list to array
      this.arr[index] = list;

    } else {
      // a linked list exists at that array index, so add it to the list
      this.arr[index].insert({key: key, value: val});
    }
  }

  get(key) {
    let index = this.hash(key);

    if (this.arr[index]) {
      let list = this.arr[index];

      let currentNode = list.head;

      while(currentNode) {
        if (currentNode.val.key === key) return currentNode.val.value;
        currentNode = currentNode.next;
      }
      // return this.findValInList(key, index);
    }

    return null;
  }

  contains(key) {
    let index = this.hash(key);

    if (!this.arr[index]) { return false; }

    else {
      let currentNode = this.arr[index].head;

      while(currentNode) {
        if(currentNode.val.key === key) return true;
        currentNode = currentNode.next;
      }

      return false;
    }
  }

  hash(key) {
    // turn key string into an array of single characters
    let arr = Array.from(key);

    // add up the ASCII values of each character
    let sum = arr.reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0);

    // multiply by prime number
    let multiply = sum * 599;

    // modulo by the size of the array to get the remainder, which will be the index
    // that it is inserted at in the array
    let index = multiply % this.size;

    return index;
  }

  // findValInList(key, index) {
  //   let list = this.arr[index];

  //   let currentNode = list.head;

  //   while(currentNode) {
  //     if (currentNode.val.key === key) return currentNode.val.value;
  //     currentNode = currentNode.next;
  //   }
  // }
}


module.exports = Hashtable;