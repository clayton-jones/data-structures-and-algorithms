'use strict';

class Graph {
  constructor() {
    this.nodeCount = 0;

    // object with properties in the format "value": { connections: {} }
    this.adjacencyList = {}; 
  }

  addNode(val) {
    if (!this.adjacencyList[val]) {
      this.adjacencyList[val] = { connections: {} };
      this.nodeCount++;
    }
  }

  addEdge(node1, node2, weight = null) {
    // if the nodes exixt in the graph
    if (this.adjacencyList[node1] && this.adjacencyList[node2]) {

      // if the nodes don't already have a connection
      if (!this.adjacencyList[node1].connections[node2]) {
        this.adjacencyList[node1].connections[node2] = weight;
        this.adjacencyList[node2].connections[node1] = weight;
      }
    }
  }

  getNodes() {
    return Object.keys(this.adjacencyList);
  }

  getNeighbors(node) {
    if (this.adjacencyList[node]) {
      return Object.entries(this.adjacencyList[node].connections);
    }
  }

  size() {
    return this.nodeCount;
  }

}



module.exports = Graph;