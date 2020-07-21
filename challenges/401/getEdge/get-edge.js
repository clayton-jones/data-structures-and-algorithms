'use strict';

function getEdge(graph, cities) {
  let cost = 0;


  if (!graph.adjacencyList[cities[0]]) {
    return 'False, $0';
  }
  
  for (let i = 0; i < cities.length - 1; i++) {
    let neighbors = graph.getNeighbors(cities[i]);
    let found = false;

    for (let j = 0; j < neighbors.length; j++) {
      if (neighbors[j][0] === cities[i + 1]) {
        found = true;
        cost += neighbors[j][1];
      }
    }

    if (!found) {
      return 'False, $0'
    }
  }

  return `True, $${cost}`;
}

module.exports = getEdge;