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

  // attempting to write add function for regular binary tree to be balanced

  // add(val, root = this.root) {
  //   if (!root) {
  //     let newNode = new Node(val);
  //     this.root = newNode;
  //     return;
  //   }

  //   if (root.left && root.right) {
  //     if (root.left.left && root.left.right) {
  //       this.add(val, root.right);
  //     } else {
  //       this.add(val, root.left);
  //     }
  //   }

  //   if (!root.left) {
  //     root.left = newNode;
  //     return;
  //   }

  //   if (!root.right) {
  //     root.right = newNode;
  //     return;
  //   }
  //   return;
  // }


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
}

/*
Pre-order: root >> left >> right
In-order: left >> root >> right
Post-order: left >> right >> root
*/


/**
 * Binary Search Tree class
 * @class
 *
 * @example
 *
 *     new BinarySearchTree()
 */
class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

/**
 * Adds a numerical value to a binary search tree, in a sorted order, small values to the left of root, larger to the right.
 *
 * @param {number} val - A number to add to the tree
 * @return {string} If something other than a number is added, an error will log to the console, and return a string.
 * @throws Error if value is not a number
 * @example
 *
 *     add(24)
 */
  add(val, root = this.root) {
    try {
      if(typeof val !== 'number') throw Error('Added value must be a number');
  
      let newNode = new Node(val);

      if (!this.root) {
        this.root = newNode;
      } else {
        if (val < root.val) {
          if (!root.left) {
            root.left = newNode;
          } else {
            this.add(val, root.left);
          }
        }

        if(val > root.val) {
          if(!root.right) {
            root.right = newNode;
          } else {
            this.add(val, root.right);
          }
        }
      }

    } catch(e) {
      console.log(e);
      return 'Value added must be a number';
    }
  }

/**
 * Returns true/false if the number is in the binary search tree
 *
 * @param {number} val - A number to search for in the tree
 * @return {boolean} true/false
 *
 * @example
 *
 *     contains(24)
 */

  contains(val, root = this.root) {
    if(!root) return false;

    if(val === root.val) {
      return true;
    }

    if (val < root.val) {
      return this.contains(val, root.left);
    }

    if(val > root.val) {
      return this.contains(val, root.right);
    }
  }
}



module.exports = { BinaryTree, BinarySearchTree };