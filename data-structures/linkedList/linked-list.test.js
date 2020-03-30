'use strict';

const testLL = require('./linked-list.js');
let newLL = new testLL.LinkedList();

describe('testing LinkedList creation', () => {
  it('doesn\'t throw error when created', () => {
    expect(() => {
      new testLL.LinkedList();
    }).not.toThrow();    
  });

  it('accurately sets head to null', () => {
    expect(newLL.head).toBeFalsy();
  });
});

describe('testing LInkedList insert method', () => {
  it('creates new node and adds it to head', () => {
    newLL.insert('TEST');
    expect(newLL.head.val).toStrictEqual('TEST');
  });

  it('points newly created node to null', () => {
    expect(newLL.head.next).toBeFalsy();
  });

  it('adding second node', () => {
    newLL.insert('TEST 2');
    expect(newLL.head.val).toStrictEqual('TEST 2');
  });

  it('points new node to previous head', () => {
    expect(newLL.head.next).toBeTruthy();
  });
});

describe('testing LinkedList includes method', () => {
  it('returns true if value exists in list', () => {
    expect(newLL.includes('TEST')).toStrictEqual(true);
  });

  it('returns false if value does not exist in list', () => {
    expect(newLL.includes(87654)).toStrictEqual(false);
  });
});

describe('testing LinkedList toString method', () => {
  it('prints correct values', () => {
    expect(newLL.toString()).toStrictEqual('{TEST 2} => {TEST} => null');
  });
});

let newNode = new testLL.Node('TEST Value');

describe('testing Node creation', () => {
  it('stores value correctly', () => {
    expect(newNode.val).toStrictEqual('TEST Value');
  });

  it('points to null', () => {
    expect(newNode.next).toBeFalsy();
  });
});