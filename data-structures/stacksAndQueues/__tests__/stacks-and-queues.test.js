'use strict';

const Stack = require('../stacks-and-queues.js').Stack;
const Queue = require('../stacks-and-queues.js').Queue;

describe('stack operations', () => {
  it('Can successfully push onto a stack', () => {
    let myStack = new Stack();
    myStack.push('green');

    expect(myStack.isEmpty()).toStrictEqual(false);
    expect(myStack.peek()).toStrictEqual('green');
  });

  it('Can successfully push multiple values onto a stack', () => {
    let myStack = new Stack();
    myStack.push('green');
    myStack.push('blue');

    expect(myStack.isEmpty()).toStrictEqual(false);
    expect(myStack.peek()).toStrictEqual('blue');

  });

  it('Can successfully pop off the stack', () => {
    let myStack = new Stack();
    myStack.push('green');
    myStack.push('blue');

    expect(myStack.pop()).toStrictEqual('blue');
    expect(myStack.peek()).toStrictEqual('green');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let myStack = new Stack();
    myStack.push('green');
    myStack.push('blue');
    myStack.push('yellow');

    myStack.pop();
    myStack.pop();
    myStack.pop();

    expect(myStack.isEmpty()).toStrictEqual(true);
    expect(myStack.top).toBe(null);

  });

  it('Can successfully peek the next item on the stack', () => {
    let myStack = new Stack();
    myStack.push('green');
    myStack.push('blue');
    myStack.push('yellow');

    expect(myStack.peek()).toStrictEqual('yellow');

  });

  it('Can sucessfully instantiate an empty stack', () => {
    let myStack = new Stack();

    expect(myStack.isEmpty()).toStrictEqual(true);
  });

  it('Raises an exception when calling pop or peek on an empty stack', () => {
    let myStack = new Stack();

    expect(() => {myStack.pop()}).toThrow();
    expect(() => {myStack.peek()}).toThrow();
  });
});

describe('queue operations', () => {
  it('can successfully enqueue', () => {
    let myQueue = new Queue();

    myQueue.enqueue('green');

    expect(myQueue.isEmpty()).toStrictEqual(false);
    expect(myQueue.front.val).toStrictEqual('green');
  });

  it('can successfully enqueue multiple values', () => {
    let myQueue = new Queue();

    myQueue.enqueue('green');
    myQueue.enqueue('blue');
    myQueue.enqueue('yellow');

    expect(myQueue.isEmpty()).toStrictEqual(false);
    expect(myQueue.front.val).toStrictEqual('green');
    expect(myQueue.rear.val).toStrictEqual('yellow');
  });

  it('can successfully dequeue', () => {
    let myQueue = new Queue();

    myQueue.enqueue('green');
    myQueue.enqueue('blue');
    myQueue.enqueue('yellow');

    expect(myQueue.dequeue()).toStrictEqual('green');
  });

  it('can successfully peek into a queue', () => {
    let myQueue = new Queue();

    myQueue.enqueue('green');
    myQueue.enqueue('blue');
    myQueue.enqueue('yellow');

    expect(myQueue.peek()).toStrictEqual('green');
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    let myQueue = new Queue();

    myQueue.enqueue('green');
    myQueue.enqueue('blue');
    myQueue.enqueue('yellow');

    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();

    expect(myQueue.isEmpty()).toStrictEqual(true);
    expect(myQueue.front).toBe(null);
    expect(myQueue.rear).toBe(null);
  });

  it('can successfully instantiate an empty queue', () => {
    let myQueue = new Queue();

    expect(myQueue.isEmpty()).toStrictEqual(true);
    expect(myQueue.front).toBe(null);
    expect(myQueue.rear).toBe(null);
  });

  it('throws an error when calling peek or dequeue on empty Queue', () => {
    let myQueue = new Queue();

    expect(() => { myQueue.dequeue()}).toThrow();
    expect(() => { myQueue.peek()}).toThrow();
  });
});

/*
Calling dequeue or peek on empty queue raises exception
*/