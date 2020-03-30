# Linked List Implementation
A Linked List is a data structure comprised of objects linked to one another via "pointer" properties, typically `next` and/or `previous`.
    
## Links
[Pull Request]()

## Challenge
This application will be the implementation of a Linked List class, and any important methods related to that.  

## Approach & Efficiency
Created two classes, `Node` and `LinkedList`, and created methods on `LinkedList` to insert, read, and print the list.  
Big-O:  
- `insert()`: O(1)
- `includes()`: O(n)
- `toString()`: O(n)
## API
- `insert(value)`
  - creates a new node with the given value, and adds it to the head (beginning) of the linked list
- `includes(value)`
  - searches linked list for the given value, returns true if found, false if not
- `toString()`
  - creates and logs (and returns) a string of the values contained in the linked list
    
## Testing
`npm test`