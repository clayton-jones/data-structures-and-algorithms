'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const BinaryTree = require('../maximumValueTree.js');

describe('happy path', () => {
  it('returns correct max value', () => {
    let tree = new BinaryTree();
    tree.root = new Node(4);
    tree.root.left = new Node(9);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(17);
    tree.root.left.right = new Node(8);
    tree.root.right.left = new Node(98);
    tree.root.right.right = new Node(45);

    expect(tree.findMaximumValue()).toStrictEqual(98);
  });
});

describe('edge case', () => {
  it('returns null when tree is empty', () => {
    let tree = new BinaryTree();

    expect(tree.findMaximumValue()).toBeFalsy();
  });

  it('correctly handles imbalanced tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(7);
    tree.root.left = new Node(9);

    expect(tree.findMaximumValue()).toStrictEqual(9);
  });

  it('correctly handles duplicate highest value', () => {
    let tree = new BinaryTree();
    tree.root = new Node(9);
    tree.root.left = new Node(15);
    tree.root.right = new Node(15);

    expect(tree.findMaximumValue()).toStrictEqual(15);
  });
});