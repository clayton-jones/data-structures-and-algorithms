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

  append(value) {
    let currentNode = this.head;
    
    if (!currentNode) {
      this.insert(value);
    }

    // loops until currentNode.next doesn't exist
    // meaning we've reached the end of the list
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    let newNode = new Node(value);
    currentNode.next = newNode;

    return newNode;
  }

  insertBefore(listValue, newValue) {
    let currentNode = this.head;
    let newNode = new Node(newValue);

    // if the value being search for is the first node in the list
    if (currentNode.val === listValue) {
      newNode.next = currentNode;
      this.head = newNode;
  
      return newNode;
    }

    // otherwise:
  
    // loops until the value of the node after the current is the listValue
    // being searched for, if we get to a null next node, the value doesn't exist
    while (currentNode.next.val !== listValue) {
      currentNode = currentNode.next;

      if (!currentNode.next) {
        console.error('ERROR! No Node with given value found in list.');
        return false;
      }
    }
    
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return newNode;
  }

  insertAfter(listValue, newValue) {
    let currentNode = this.head;

    while (currentNode && currentNode.val !== listValue) {
      currentNode = currentNode.next;
    }

    if (!currentNode) {
      console.error('ERROR! No Node with given value found in list.');
      return false;
    }

    let newNode = new Node(newValue);
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return newNode;
  }
}

let newLL = new LinkedList();

newLL.insert('A');

newLL.toString();

newLL.append('B');

newLL.toString();

newLL.append('C');

newLL.toString();

newLL.insertBefore('A', 'Before A');

newLL.toString();

module.exports = { LinkedList, Node };

