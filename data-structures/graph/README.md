# Graphs

## Challenge
Implement a Graph with the following methods:

`addNode`: takes in a value and adds a node to the graph  

`addEdge`: takes in two node values and adds an edge between them  

`getNodes`: returns a list of all nodes in the graph   

`getNeighbors`: takes in a node value and returns a list of the connections it has, weight included  

`size`: returns the number of nodes in the graph

## Approach & Efficiency
BigO: 
- O(1) for both adding nodes and edges  
- O(n) for getting nodes and neighbors since it is using Object.keys/entries to iterate through the object


## API
`new Graph()`: creates a new Graph.

`addNode(value)`: adds the node to the graph  

`addEdge(node1, node2, [weight])`: adds an edge between two nodes, weight optional. Nodes must exist in the graph.  
  
`getNodes()`: returns a list of all nodes in the graph  
  
`getNeighbors(node)`: returns a list of connections belonging to the given node. Each connection is an array with two indeces, value and weight  
  
`size()`: returns the number of nodes currently in the graph