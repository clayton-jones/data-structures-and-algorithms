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

describe('testing LinkedList append method', () => {
  it('can successfully add a node to the end of the list', () => {
    let LL = new testLL.LinkedList();

    LL.insert(1);
    LL.insert(2);
    LL.insert(3);

    LL.append(0);

    expect(LL.toString()).toBe('{3} => {2} => {1} => {0} => null');
  });

  it('can successfully add multiple nodes to the end of the list', () => {
    let LL = new testLL.LinkedList();

    LL.insert(1);
    LL.append(2);
    LL.append(3);

    expect(LL.toString()).toBe('{1} => {2} => {3} => null');
  });
});

describe('testing LinkedList insertBefore method', () => {
  it('can successfully insert a node before another node located in the middle of the list', () => {
    let LL = new testLL.LinkedList();

    LL.insert('A');
    LL.insert('B');
    LL.insert('C');

    LL.insertBefore('B', 'Before B');

    expect(LL.toString()).toBe('{C} => {Before B} => {B} => {A} => null');
  });

  it('can successfully insert a node before the first node of a linked list', () => {
    let LL = new testLL.LinkedList();

    LL.insert('A');

    LL.insertBefore('A', 'Before A');
    expect(LL.toString()).toBe('{Before A} => {A} => null');
  });
});

describe('testing LinkedList insertAfter method', () => {
  it('can successfully insert a node after one that is in the middle of the list', () => {
    let LL = new testLL.LinkedList();

    LL.insert('A');
    LL.insert('B');
    LL.insert('C');

    LL.insertAfter('B', 'After B');

    expect(LL.head.next.next.val).toBe('After B');
  });

  it('can successfully insert a node after the last node of the list', () => {
    let LL = new testLL.LinkedList();

    LL.insert('A');
    LL.insert('B');

    LL.insertAfter('A', 'After A');

    expect(LL.head.next.next.val).toBe('After A');

  });
});

