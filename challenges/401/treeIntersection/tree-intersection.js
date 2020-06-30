'use strict';

function treeIntersection(tree1, tree2) {
  let table = new Array(1024);

  populateTable(table, tree1);

  let array = [];

  findValues(table, tree2, array);

  return array;
}

function populateTable(table, node) {

  let index = hash(node.val);

  addToTable(table, index, node.val);

  if (node.left) {
    populateTable(table, node.left);
  }

  if (node.right) {
    populateTable(table, node.right);
  }
}

function findValues(table, node, array) {

  let index = hash(node.val);

  if (table[index]) {
    let bucket = table[index]

    while(bucket) {
      if (bucket.val === node.val) {
        if (!arrayContains(array, node.val)) {
          array.push(node.val);
        }
      }
      bucket = bucket.next;
    }
  }

  if (node.left) {
    findValues(table, node.left, array);
  }

  if (node.right) {
    findValues(table, node.right, array);
  }
}

function addToTable(table, index, value) {
  if (table[index]) {
    let bucket = table[index];

    while(bucket.next) {
      bucket = bucket.next;
    }

    bucket.next = { val: value, next: null };
  } else {
    table[index] = { val: value, next: null };
  }
}

function arrayContains(array, value) {
  if (array.length < 1) return false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }

  return false;
}

function hash(value) {
  value *= 599;
  value %= 1024;

  return value;
}

module.exports = treeIntersection;