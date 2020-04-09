# Merge Linked Lists

## Challenge
> Write a function called `mergeLists` which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency
For this problem, I created a new linked list, and alternating appending the nodes from the given lists, until one or both were at null, and then if one of the others still had nodes left, I appended the rest of them.

## Solution
![Whiteboard]()
