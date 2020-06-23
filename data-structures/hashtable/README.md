# Hashtables

## Challenge
Implement a Hashtable with the following methods:

`add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.  
`get`: takes in the key and returns the value from the table.  
`contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.  
`hash`: takes in an arbitrary key and returns an index in the collection.  

## Approach & Efficiency
BigO: O(1) for both adding and retreiving

## API
`new Hashtable(size)`: creates a new Hashtable with an array of the given size.

`add(key, value)`: adds the key/value pair into a Node in a Linked List at a specific index in the Hashtable array, with a format `{ key: key, value: value }`  

`get(key)`:returns the value associated with the key if it exists in the table, and `null` if not.  

`contains(key)`: returns `true` if the key exists in the table, `false` if not.  

`hash(key)`: returns an index value within the range of the size of the Hashtable array