'use strict';

const { Stack } = require('../stacksAndQueues/stacks-and-queues');

function depthFirst(list) {
  let stack = new Stack();
  let visited = new Map();
  let first = Object.keys(list)[0];
  let output = [];

  if (first) {
    output.push(first);
    stack.push(first);
    visited.set(first, true);
  }


  while(!stack.isEmpty()) {

    let current = stack.peek();
    let connections = Object.keys(list[current].connections);

    let allVisited = true;
    
    for( let i = 0; i < connections.length; i++) {
      let node = connections[i];
      if (!visited.get(node)) {
        allVisited = false;
        visited.set(node, true);
        output.push(node);
        stack.push(node);
        break;
      }
    }

    if (allVisited) {
      stack.pop();
    }
  }

  return output;
}

module.exports = depthFirst;