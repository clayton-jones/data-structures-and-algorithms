'use strict';

const BinaryTree = require('../../../../data-structures/tree/tree.js').BinaryTree;
const BinarySearchTree = require('../../../../data-structures/tree/tree.js').BinarySearchTree;

const fizzBuzzTree = require('../fizz-buzz-tree.js');

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

describe('fizzBuzzTree', () => {
  it('changes the values in the correct order', () => {
    let tree = new BinaryTree();
    tree.root = new Node(15);
    tree.root.left = new Node(3);
    tree.root.right = new Node(5);
    tree.root.right.left = new Node(17);

    let newTree = fizzBuzzTree(tree);
    let newTreeVals = newTree.preOrder();

    expect(newTreeVals).toStrictEqual(['FizzBuzz', 'Fizz', 'Buzz', '17']);
  });

  it('works on BST too', () => {
    let tree = new BinarySearchTree();
    tree.add(35);
    tree.add(20);
    tree.add(47);
    tree.add(90);

    let newTree = fizzBuzzTree(tree);
    let treeVals = newTree.preOrder();

    expect(treeVals).toStrictEqual(['Buzz', 'Buzz', '47', 'FizzBuzz']);
  });
});