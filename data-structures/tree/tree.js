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

  add(val) {
    if(!this.root) {
      let newNode = new Node(val);
      this.root = newNode;
    } else {
      this.insertNode(val, this.root);
    }
  }

  insertNode(val, root) {
    let newNode = new Node(val);
    
    if (!root.left) {
      root.left = newNode;
      return;
    }
    
    if(!root.right) {
      root.right = newNode;
      return;
    }
    
  }

  preOrder() {
    return this.pre(this.root, []);
  }

  pre(root, array) {
    array.push(root.val);

    if(root.left) {
      array.concat(pre(root.left, array));
    }

    if(root.right) {
      array.concat(pre(root.right, array));
    }

    console.log('Array:', array);
    return array;
  }

  inOrder(root, array) {
  }

  postOrder(root, array) {
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

  add(val) {
    try {
      if(typeof val !== 'number') throw Error('Added value must be a number');
  
      if (!this.root) {
        let newNode = new Node(val);
        this.root = newNode;
      } else {
        this.insertNode(val, this.root);
      }
    } catch(e) {
      console.log(e);
      return 'Value added must be a number';
    }
  }

  insertNode(val, root) {
    let newNode = new Node(val);

    if (val < root.val) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertNode(val, root.left);
      }
    }

    if(val > root.val) {
      if(!root.right) {
        root.right = newNode;
      } else {
        this.insertNode(val, root.right);
      }
    }
  }

  contains(val) {
    return this.includes(val, this.root);
  }

  includes(val, root) {

    if(!root) return false;

    if(val === root.val) {
      return true;
    }

    if (val < root.val) {
      return this.includes(val, root.left);
    }

    if(val > root.val) {
      return this.includes(val, root.right);
    }
  }
}



module.exports = { BinaryTree, BinarySearchTree };