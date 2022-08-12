# Space Complexity (aka Auxilliary Space Complexity)

- How much additional memory do we need to allocate in order to run the code in our algorithm?

## Rules of Thumb
- Most primitives (booleans, numbers, `undefined` and `null`) are constant space 
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is `.length` (for arrays) and the number of keys (for objects)

```
Constant space - O(1): 

EXAMPLE:
function sum (arr){
    let total = 0; 
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
//2 declarations let total = 0; and let i = 0
//They exist no matter what, we aren't making a new variable so 
``` 
---
```
Linear Space - O(n): 

EXAMPLE: 
function double(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i])
    }
    return newArr; 
}
//yes we have 2 declarations let newArr = 0 and let i = 0 
//BUT they aren't our concern because of newArr.push(2 * arr [i])
//but the length of that array is determined by (n) which in this case is the input (arr)
```
