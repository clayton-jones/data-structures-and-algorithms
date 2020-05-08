# Challenge Summary
Conduct “FizzBuzz” on a tree while traversing through it. Change the values of each of the nodes dependent on the current node’s value

## Challenge Description
- Write a function called FizzBuzzTree which takes a tree as an argument.
- Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:  
    - If the value is divisible by 3, replace the value with “Fizz”
    - If the value is divisible by 5, replace the value with “Buzz”
    - If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
    - If the value is not divisible by 3 or 5, simply turn the number into a String.

## Approach & Efficiency
BigO: O(n);

`FizzBuzzTree` calls a recursive function on the root of the given tree which is called upon each node in the tree.

## Solution
![fizzBuzzTree whiteboard image](./assets/fizzBuzzTree.jpg)