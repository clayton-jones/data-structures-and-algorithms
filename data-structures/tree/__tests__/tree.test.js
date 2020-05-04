'use strict';

const tree = require('../tree.js');
const BinaryTree = tree.BinaryTree;
const BinarySearchTree = tree.BinarySearchTree;

describe('Binary Search Tree tests', () => {
  it('can add a value to the tree', () => {
    let BST = new BinarySearchTree();
    BST.add(30);

    expect(BST.root.val).toStrictEqual(30);
  });

  it('can add multiple values in sorted order', () => {
    let BST = new BinarySearchTree();
    BST.add(30);
    BST.add(20);
    BST.add(35);

    expect(BST.root.val).toStrictEqual(30);
    expect(BST.root.left.val).toStrictEqual(20);
    expect(BST.root.right.val).toStrictEqual(35);
  });

  it('can search for a value and get correct true/false', () => {
    let BST = new BinarySearchTree();
    BST.add(30);
    BST.add(20);
    BST.add(35);

    expect(BST.contains(20)).toStrictEqual(true);
    expect(BST.contains(123)).toStrictEqual(false);
  });

  it('throws an error if value other than a number is added', () => {
    let BST = new BinarySearchTree();

    expect(BST.add('NAN')).toStrictEqual('Value added must be a number');
  });
});

/*
You can successfully instantiate an empty tree
You can successfully instantiate a tree and add a single root node
You can successfully add a left and right child to a single root node
You can successfully do a preOrder traversal
You can successfully do an inOrder traversal
You can successfully do a postOrder traversal
You can successfully add a value to a binary search tree
You can search a binary search tree for a value and get the correct true/false result
*/