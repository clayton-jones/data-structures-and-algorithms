'use strict';

const BinaryTree = require('../../../data-structures/tree/tree.js').BinaryTree;
const Queue = require('../../../data-structures/stacksAndQueues/stacks-and-queues.js').Queue;

class BreadthFirstTree extends BinaryTree {
  constructor() {
    super();
  }

/**
 * This function adds values in a tree to an array in a breadth first order
 * @function
 *
 * @example
 *
 *     tree.breadthFirst()
 */

  breadthFirst(root = this.root) {
    if (!this.root) {
      return [];
    }

    let arr = [];
    let queue = new Queue();
    queue.enqueue(root);

    while(!queue.isEmpty()) {
      let node = queue.dequeue();
      let index = 0;
      while(arr[index]) {
        index++
      };
      // console.log('NODE VAL:', node.val);
      arr[index] = node.val;
      
      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
    }
    return arr;
  }
}


module.exports = BreadthFirstTree;