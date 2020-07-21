'use strict';

const getEdge = require('./get-edge');
const Graph = require('../../../data-structures/graph/graph');

describe('getEdge', () => {
  let graph;

  graph = new Graph();
  graph.addNode('Seattle');
  graph.addNode('Vancouver');
  graph.addNode('Portland');
  graph.addNode('Spokane');

  graph.addEdge('Seattle', 'Vancouver', 75);
  graph.addEdge('Seattle', 'Portland', 100);
  graph.addEdge('Vancouver', 'Portland', 25);
  graph.addEdge('Seattle', 'Spokane', 150);


  it('returns true when path exists, one edge', () => {
    expect(getEdge(graph, ['Seattle', 'Vancouver'])).toBe('True, $75');
  });

  it('returns true when path exists, two edges', () => {
    expect(getEdge(graph, ['Seattle', 'Vancouver', 'Portland'])).toBe('True, $100');
  });

  it('returns false when a path does not exist', () => {
    expect(getEdge(graph, ['Vancouver', 'Spokane'])).toBe('False, $0');
  });

  it('returns false when first city does not exist in graph', () => {
    expect(getEdge(graph, ['Eugene', 'Seattle'])).toBe('False, $0');
  });

});