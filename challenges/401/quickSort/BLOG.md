# Quick Sort

## Psuedo Code
```JS
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

## Sample Array
```JS
[8,4,23,42,16,15]
```

## Pass 1
We define a pivot variable by calling the `partition` function. Using the value of the array at the right most index as our starting point, the `partition` function sort the array so that all values left of that value are lesser, and all values right are greater.  

We end up with this array: `[8, 4, 15, 42, 16, 23]`  
Now our pivot is `15` and we call our quickSort function two times giving it references to the boundaries of each "sub-array" to the left, and to the right of the pivot.

## Pass 2 A
We are now start the process over again given an effective array (with the boudaries provided) of `[8, 4]`  
With a starting value of `8` we swap values until everything left if lesser, and right greater which results in `[4, 8]` which reflects in the whole array: `[4, 8, 15, 42, 16, 23]`  

## Pass 2 B
At the same time as *Pass 2 A*, we begin the process with an effective array of `[42, 16, 23]`  
With a starting value of `23`, we swap values until each index left of `23` contains a value that is lesser, and each index right greater. This results in `[16, 23, 42]` which reflects in the whole array as `[4, 8, 15, 16, 23, 42]`  

## END

For this sample array, this is as many steps as is needed. If the array were larger, the process would continue, breaking down the array into smaller and smaller sections, sorting each as it went, changing the values of the starting array in-place.

