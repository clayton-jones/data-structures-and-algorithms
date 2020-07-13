'use strict';

const Graph = require('./graph');

describe('Graphs', () => {

  let graph = new Graph();

  graph.addNode('test');
  graph.addNode('potato');

  it('A node can be successfully added to the graph', () => {

    let nodes = graph.getNodes();

    let size = graph.size();

    expect(nodes).toEqual(['test', 'potato']);
    expect(size).toBe(2);
  });

  it('can add an edge to the graph', () => {

    graph.addEdge('test', 'potato', 1);

    expect(graph.getNeighbors('test')[0][0]).toBe('potato');
    expect(graph.getNeighbors('test')[0][1]).toBe(1);

  });

});

