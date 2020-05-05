'use strict';

const tree = require('../tree.js');
const BinaryTree = tree.BinaryTree;
const BinarySearchTree = tree.BinarySearchTree;

describe('Tree tests', () => {
  it('can instantiate an empty tree', () => {
    let BST = new BinarySearchTree();

    expect(BST.root).toBeFalsy();
  });

  it('can add a single root node', () => {
    let BST = new BinarySearchTree();

    BST.add(50);
    expect(BST.root.val).toStrictEqual(50);
  });

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

  it('returns correct preOrder array', () => {
    let BST = new BinarySearchTree();
    BST.add(30);
    BST.add(20);
    BST.add(35);

    let array = BST.preOrder();
    expect(array[0]).toStrictEqual(30);
    expect(array[1]).toStrictEqual(20);
    expect(array[2]).toStrictEqual(35);
  });

  it('returns correct inOrder array', () => {
    let BST = new BinarySearchTree();
    BST.add(30);
    BST.add(20);
    BST.add(35);

    let array = BST.inOrder();

    expect(array[0]).toStrictEqual(20);
    expect(array[1]).toStrictEqual(30);
    expect(array[2]).toStrictEqual(35);
  });

  it('returns correct postOrder array', () => {
    let BST = new BinarySearchTree();
    BST.add(30);
    BST.add(20);
    BST.add(35);

    let array = BST.postOrder();
    
    expect(array[0]).toStrictEqual(20);
    expect(array[1]).toStrictEqual(35);
    expect(array[2]).toStrictEqual(30);

  });
});