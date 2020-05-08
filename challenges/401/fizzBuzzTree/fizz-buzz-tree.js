'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const BinaryTree = require('../../../data-structures/tree/tree.js').BinaryTree;

function fizzBuzzTree (tree) {
  let newTree = new BinaryTree();

  newTree.root = fizzBuzzRecursion(tree.root);

  return newTree;
}

function fizzBuzzRecursion(root) {
  let newNode;
  if (root.val % 15 === 0) {
    newNode = new Node('FizzBuzz');
  } else if (root.val % 3 === 0) {
    newNode = new Node('Fizz');
  } else if (root.val % 5 === 0) {
    newNode = new Node('Buzz');
  } else {
    newNode = new Node(`${root.val}`);
  }

  if(root.left) {
    newNode.left = fizzBuzzRecursion(root.left)
  }

  if(root.right) {
    newNode.right = fizzBuzzRecursion(root.right)
  }
  
  return newNode;
}

module.exports = fizzBuzzTree;
/*
If the value is divisible by 3, replace the value with “Fizz”
If the value is divisible by 5, replace the value with “Buzz”
If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
If the value is not divisible by 3 or 5, simply turn the number into a String.
*/