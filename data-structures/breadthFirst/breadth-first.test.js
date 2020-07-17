'use strict';

const BFGraph = require('./breadth-first');

describe('Breadth First Traversal', () => {

  let graph = new BFGraph();

  graph.addNode('eggs');
  graph.addNode('bacon');
  graph.addNode('steak');
  graph.addNode('brussels');
  graph.addNode('lonely-lemon');

  graph.addEdge('eggs', 'bacon');
  graph.addEdge('eggs', 'steak');
  graph.addEdge('bacon', 'steak');
  graph.addEdge('steak', 'brussels');

  it('returns a collection of nodes connected to the given node, in order they were visited', () => {

    let collection = graph.breadthFirstTraversal('eggs');
    expect(collection).toEqual(['eggs', 'bacon', 'steak', 'brussels']);
  });

  it('returns a differently ordered collection when given a different node', () => {
    let collection = graph.breadthFirstTraversal('steak');

    expect(collection).toEqual(['steak', 'eggs', 'bacon', 'brussels']);
  })

  it('returns an empty collection if node does not exist in the graph', () => {
    let collection = graph.breadthFirstTraversal('doesnotexist');

    expect(collection).toEqual([]);
  });

  it('returns a list with a single item for a node that has no connections to traverse', () => {
    let collection = graph.breadthFirstTraversal('lonely-lemon');
    expect(collection).toEqual(['lonely-lemon']);
  })
});