'use strict';

const BinaryTree = require('../breadth-first.js');

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

describe('happy path', () => {
  it('returns correctly ordered array of small tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(7);
    tree.root.left = new Node(12);
    tree.root.right = new Node(5);

    let arr = tree.breadthFirst();
    expect(arr).toStrictEqual([7, 12, 5]);
  });

  it('returns correctly ordered array of large tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(7);
    tree.root.left = new Node(12);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(27);
    tree.root.left.right = new Node(2);
    tree.root.right.left = new Node(98);
    tree.root.right.right = new Node(76);


    let arr = tree.breadthFirst();
    expect(arr).toStrictEqual([7, 12, 5, 27, 2, 98, 76]);
  });
});

describe('expected failures', () => {
  it('returns an empty array on an empty tree', () => {
    let tree = new BinaryTree();

    let arr = tree.breadthFirst();
    expect(arr).toStrictEqual([]);
  });
});