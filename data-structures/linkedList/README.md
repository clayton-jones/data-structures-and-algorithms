# Linked List Implementation
A Linked List is a data structure comprised of objects linked to one another via "pointer" properties, typically `next` and/or `previous`.
    
## Links
[Pull Request]()
  
[Actions](https://github.com/clayton-jones/data-structures-and-algorithms/actions)

## Challenge
This application will be the implementation of a Linked List class, and any important methods related to that.  

## Approach & Efficiency
Created two classes, `Node` and `LinkedList`, and created methods on `LinkedList` to insert, read, and print the list.  

Big-O:  
- `insert`: O(1)
- `includes`: O(n)
- `toString`: O(n)
- `append`: O(n)
- `insertBefore`: O(n)
- `insertAfter`: O(n)
  
## API
- `insert(value)`
  - creates a new node with the given value, and adds it to the head (beginning) of the linked list
- `includes(value)`
  - searches linked list for the given value, returns true if found, false if not
- `toString()`
  - creates and logs (and returns) a string of the values contained in the linked list
- `append(value)`
  - adds given value to the end of the linked list
- `insertBefore(search_value, insert_value)`
  - searches for a value in the linked list and inserts a given value before it. returns false and prints an error if search value is not found.
- `insertAfter(search_value, insert_value)`
  - similar to `insertBefore` but adds the value after the value searched for. also returns false and prints an error if value is not found.
  
## Testing
`npm test`