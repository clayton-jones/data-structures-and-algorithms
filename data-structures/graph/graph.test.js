'use strict';

const Graph = require('./graph');

describe('Graphs', () => {

  let graph = new Graph();

  graph.addNode('test');
  graph.addNode('potato');

  it('can add a node to the graph and retrieve a list of nodes', () => {

    let nodes = graph.getNodes();

    expect(nodes).toEqual(['test', 'potato']);
  });

  it('can add an edge to the graph, and get a list of all neighbors of a node', () => {

    graph.addEdge('test', 'potato', 1);

    expect(graph.getNeighbors('test')[0][0]).toBe('potato');
    expect(graph.getNeighbors('test')[0][1]).toBe(1);

  });

  it('can retrieve the size of the graph', () => {
    let size = graph.size();
    expect(size).toBe(2);
  });

});

