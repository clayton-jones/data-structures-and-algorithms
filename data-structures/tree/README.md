# Tree Implementation
    
Trees are similar to linked lists, but have branched nodes instead of a single line of nodes.
    
## Links
    
[GitHub PR](https://github.com/clayton-jones/data-structures-and-algorithms/pull/38)
[GitHub Actions](https://github.com/clayton-jones/data-structures-and-algorithms/actions)
    
## Challenge
    
This application will be the implementation of a BinaryTree and BinarySearchTree class, and any important methods related to that.
    
## Approach & Efficiency
    
Big O:
`preOrder`: O(n)
`inOrder`: O(n)
`postOrder`: O(n)

`add`: O(n)
`contains`: O(n)
    
## API
    
`preOrder` - returns an array of values in the order of left >> right >> root
`inOrder` - returns an array of values in the order of left >> root >> right
`postOrder` - returns an array of values in the order of left >> right >> root

`add` - adds a number to the tree in a sorted manner, left or right or each root if it is smaller or larger, respectively
`contains` - searches tree for value, returns a boolean
    
## Testing
    
`npm test tree.test.js`