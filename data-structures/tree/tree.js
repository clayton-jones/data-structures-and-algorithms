'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(val, root = this.root) {
    if (!root) {
      let newNode = new Node(val);
      this.root = newNode;
      return;
    }

    if (root.left && root.right) {
      if (root.left.left && root.left.right) {
        this.add(val, root.right);
      } else {
        this.add(val, root.left);
      }
    }

    if (!root.left) {
      root.left = newNode;
      return;
    }

    if (!root.right) {
      root.right = newNode;
      return;
    }


    return;
  }

  preOrder(root = this.root, array = []) {
    array.push(root.val);

    if(root.left) {
      array.concat(preOrder(root.left, array));
    }

    if(root.right) {
      array.concat(preOrder(root.right, array));
    }

    console.log('Array:', array);
    return array;
  }


  inOrder(root, array) {
    
    if(root.left) {
      array.concat(inOrder(root.left, array));
    }

    array.push(root.val);

    if(root.right) {
      array.concat(inOrder(root.right, array));
    }

    console.log('Array:', array);
    return array;
  }

  postOrder(root, array) {
    if(root.left) {
      array.concat(postOrder(root.left, array));
    }
    
    if(root.right) {
      array.concat(postOrder(root.right, array));
    }
    
    array.push(root.val);

    console.log('Array:', array);
    return array;

  }
}

/*
Pre-order: root >> left >> right
In-order: left >> root >> right
Post-order: left >> right >> root
*/

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

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