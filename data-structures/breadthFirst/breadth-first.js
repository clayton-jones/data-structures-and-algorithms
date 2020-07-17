'use strict';

const Graph = require('../graph/graph');
const { Queue } = require('../stacksAndQueues/stacks-and-queues');

class BFGraph extends Graph {
  constructor() {
    super();
  }

  breadthFirstTraversal(node) {
    let collection = [];

    if (this.adjacencyList[node]) {

      let queue = new Queue();
      let visited = new Map();
  
      queue.enqueue(this.adjacencyList[node]);
      visited.set(node, true);
  
      while(!queue.isEmpty()) {

        let front = queue.dequeue();
        collection.push(front.value);
        
        Object.keys(front.connections).forEach(node => {
          if (!visited.get(node)) {
            queue.enqueue(this.adjacencyList[node]);
            visited.set(node, true);
          }
        });
      }
    }
    
    return collection;
  }
}

module.exports = BFGraph;