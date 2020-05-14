'use strict';

/**
 * Node class for Binary Trees
 * @class
 *
 * @param {*} val - Any value to be stored in the node
 * @example
 *
 *     new Node(val)
 */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


/**
 * Binary Tree class
 * @class
 *
 * @example
 *
 *     new BinaryTree()
 */
class BinaryTree {
  constructor() {
    this.root = null;
  }


/**
 * Adds values to an array in a root >> left >> right order
 *
 * @return {array} An array of values
 *
 * @example
 *
 *     preOrder()
 */
  preOrder(root = this.root, array = []) {
    array.push(root.val);

    if(root.left) {
      array.concat(this.preOrder(root.left, array));
    }

    if(root.right) {
      array.concat(this.preOrder(root.right, array));
    }

    return array;
  }

/**
 * Adds values to an array in a left >> root >> right order
 *
 * @return {array} An array of values
 *
 * @example
 *
 *     inOrder()
 */
  inOrder(root = this.root, array = []) {
    
    if(root.left) {
      array.concat(this.inOrder(root.left, array));
    }

    array.push(root.val);

    if(root.right) {
      array.concat(this.inOrder(root.right, array));
    }

    return array;
  }


/**
 * Adds values to an array in a left >> right >> root order
 *
 * @return {array} An array of values
 *
 * @example
 *
 *     postOrder()
 */
  postOrder(root = this.root, array = []) {
    if(root.left) {
      array.concat(this.postOrder(root.left, array));
    }
    
    if(root.right) {
      array.concat(this.postOrder(root.right, array));
    }
    
    array.push(root.val);

    return array;

  }


  /**
 * Traverses the tree and returns the largest numerical value
 *
 * @return {number} The largest number in the tree
 *
 * @example
 *
 *     findMaximumValue()
 */

  findMaximumValue(root = this.root, maxVal = this.root ? this.root.val : null) {
    // this is the "easy" version, but takes 2 * O(n)
    // where the other version not commented out is only O(n)
    // not sure if that would matter
    
    // let valArr = this.preOrder();

    // let maxVal = valArr[0];
    // for(let i = 1; i < valArr.length; i++) {
    //   if(valArr[i] > maxVal) {
    //     maxVal = valArr[i];
    //   }
    // }

    // return maxVal;

    if(!root) return null;
    

    let leftMax;
    let rightMax;

    if (root.val > maxVal) {
      maxVal = root.val;
    }

    if (root.left) {
      leftMax = this.findMaximumValue(root.left, maxVal);
    }

    if (root.right) {
      rightMax = this.findMaximumValue(root.right, maxVal);
    }

    if (rightMax && leftMax) {
      if (leftMax === rightMax && leftMax > maxVal) maxVal = leftMax;

      if (rightMax > maxVal && rightMax > leftMax) maxVal = rightMax;
      
      if (leftMax > maxVal && leftMax > rightMax) maxVal = leftMax;
    } else if (leftMax) {
      if (leftMax > maxVal) maxVal = leftMax;
    } else if (rightMax) {
      if (rightMax > maxVal) maxVal = rightMax;
    }

    return maxVal;
  }
}

module.exports = BinaryTree;