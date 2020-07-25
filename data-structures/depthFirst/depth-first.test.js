'use strict';

const Graph = require('../graph/graph');
const depthFirst = require('./depth-first');

describe('Depth First Traversal', () => {
  
  it('returns a list of nodes in the order they were visited', () => {
    let graph = new Graph();
  
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
  
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('D', 'C');
    graph.addEdge('C', 'E');

    let nodes = depthFirst(graph.adjacencyList);

    expect(nodes).toEqual(['A', 'B', 'D', 'C', 'E']);
  });

  it('returns a list of one node when only one node exists', () => {
    let graph = new Graph();

    graph.addNode('A');

    let nodes = depthFirst(graph.adjacencyList);

    expect(nodes).toEqual(['A']);

  });

  it('returns an empty list when no nodes exist in the graph', () => {
    let graph = new Graph();

    let nodes = depthFirst(graph.adjacencyList);

    expect(nodes).toEqual([]);
  })
});