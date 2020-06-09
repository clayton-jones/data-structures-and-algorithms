# Insertion Sort

## Psuedocode
```
InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```

## Trace
Sample Array:  
`[8,4,23,42,16,15]`

### Pass 1
`i = 1` | `j = 0` | `temp = 4`  

`temp` is less than `arr[j]` so they swap  

Current array: `[4, 8, 23, 42, 16, 15]`  
  
### Pass 2
`i = 2` | `j = 1` | `temp = 23`  

`temp` is greater than `arr[j] (8)` so nothing happens  

Current array: `[4, 8, 23, 42, 16, 15]`  

### Pass 3
`i = 3` | `j = 2` | `temp = 42`  

`temp` is greater than `arr[j] (23)` so nothing happens  

Current array: `[4, 8, 23, 42, 16, 15]`  

### Pass 4
`i = 4` | `j = 3` | `temp = 16`  

`temp` is less than `arr[j] (42)` so `arr[j + 1] = arr[j]`

`j--`

Current array: `[4, 8, 23, 42, 42, 15]`  

`j = 2` and `temp` is still less than `arr[j] (23)` so `arr[j + 1] = arr[j]`  

Current array: `[4, 8, 23, 23, 42, 15]`

`j--`

`j = 1` and now `temp` is no longer less than `arr[j] (8)` so we break the while loop.  

`arr[j + 1] = temp`

Current array: `[4, 8, 16, 23, 42, 15]`  

### Pass 5
`i = 5` | `j = 4` | `temp = 15`  

Much like Pass 4, the 15 will work its way down the array being compared to each value, shifting over the target value one index, until it gets to one that it is greater than. THen it will replace the index after it.

Final array `[4, 8, 15, 16, 23, 42]`  