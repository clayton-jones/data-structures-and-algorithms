'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  
  push(val) {
    let newNode = new Node(val);

    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if(!this.top) {
      throw Error('NullReferenceException: Can not pop from an empty Stack');
    }

    let tempNode = this.top;
    this.top = this.top.next;
    tempNode.next = null;

    return tempNode.val;
  }

  peek() {
    if (!this.top) {
      throw Error('NullReferenceException: Can not peek an empty Stack');
    }

    return this.top.val;
  }

  isEmpty() {
    return !this.top;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      return;
    } 

    this.rear.next = newNode;
    this.rear = newNode;
    return;
  }

  dequeue() {
    if (this.isEmpty()) throw Error('NullReferenceException: Can not dequeue from an empty Queue.');

    let tempNode = this.front;
    this.front = this.front.next;
    tempNode.next = null;

    if(!this.front) this.rear = null;

    return tempNode.val;
  }

  peek() {
    if (this.isEmpty()) throw Error('NullReferenceException: Can not peek empty Queue.');

    return this.front.val;
  }

  isEmpty() {
    return !this.front;
  }
}

module.exports = { Stack, Queue };