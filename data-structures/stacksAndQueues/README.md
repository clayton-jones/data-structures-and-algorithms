# Stacks and Queues

## Challenge
The challenge was to implement a Stack, and Queue class, each with their own methods, and utilizing a Node class.

## Approach & Efficiency
The time for each method of a Stack and Queue class is O(1) because you only ever need to look at a single node that you always have a reference for.

## API

### Stack
- `push(val)`  
    - adds a node to the top of the stack  

- `pop()`  
    - removes the node at the top of the stack
    - returns the node's value
    - throws an error if the stack is empty

- `peek()`  
    - returns the value of the node at the top of the stack
    - does not alter the stack
    - throws an error if the stack is empty

- `isEmpty()`  
    - determines if the stack is empty
    - returns a boolean  

### Queue
- `enqueue(val)`  
    - adds a node to the end of the list

- `dequeue()`  
    - removes a node from the front of the list
    - returns the node's value
    - throws an error if the queue is empty

- `peek()`  
    - returns the value of the node at the front of the queue
    - does not alter the queue
    - throws an error if the queue is empty

- `isEmpty()`  
    - determines if the stack is empty
    - returns a boolean