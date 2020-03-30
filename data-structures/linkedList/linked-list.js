'use strict';

/**
 * Node
 * @module Node
 * @params value - any data
 */

/**
 * LinkedList
 * @module LinkedList
 */

/**
 * insert(value) - created new node and inserts it into the beginning of the linked list, at the head
 * @function insert
 * @params value - any data
 */

/**
 * includes(value) - returns true or false if value is in linked list
 * @function includes
 * @params value - any data
 * @returns { boolean }
 */

/**
 * toString() - takes all values in the linked list and creates and returns a string containing those values
 * @function toString
 * @returns { string }
 */


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constuctor () {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);

    newNode.next = this.head;

    this.head = newNode;
  }

  includes(value) {
    let currentNode = this.head;

    while(currentNode) {
      if (currentNode.val === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let str = '';

    while(currentNode) {
      str += `{${currentNode.val}} => `;
      currentNode = currentNode.next;
    }

    str += 'null';
    console.log(str);
    return str;
  }
}



module.exports = { LinkedList, Node };

