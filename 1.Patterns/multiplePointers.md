# Multiple Pointers 
- Creating pointers (just a variable) or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. 

- Some sort of linear structure (array or string). We are searching for a pair of values that meets a condition. 

## Example: 
Write a function called sumZero which accepts a *sorted* array of itegers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. 

- Remember the inputs are sorted so we can come up with an efficent way! 

```javascript
function sumZero(arr){
    //i = firstArray and j = secondArray
    for(let i= 0; i < arr.length; i++){
        for(let j=0; j< arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i],arr[j]]
            }
        }
        
    }

}
```
- What's the problem here? Those pesky nested loops making this quadratic! 

```javascript
function sumZero(arr){
    //set up pointers 1 left and 1 right
    let left = 0; //start of array
    let right = arr.length -1; //end of array
    //(logic): our fail safe against falsy 0! This is why it is < instead of <=
    while(left < right){ 
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if (sum > 0){
            right--; //move in 1 from position in array
        }else{
            left++; // move up 1 from position in array
        }
    }
}
```
- Time Complexity is O(n) & Space Complexity is O(1).
```javascript
sumZero([-3,-2,-1,0,1,2,3])//[-3,3]
sumZero([-2,-0,1,3])//undefined
sumZero([1,2,3])//undefined
```

## Example 2: 
Implement a function called countUniqueValues, which accepted a *sorted* array, and counts the unique values in the array. Ther can be negative numbers in the array, but it will always be sorted. 

- Here we will have two pointers moving SOME direction. Not necessarily, 1 pointer at the beginning and 1 pointer at the end. 

```javascript
function countUniqueValues(arr){
    //catch all if array is empty
    if(arr.length === 0) return 0; 
    let i = 0; //first pointer
    for(let j = 1; j < arr.length; j++){ //j is second pointer
        if(arr[i] !== arr[j]){
            i++; 
            arr[i] = arr[j] // now i becomes j and loop continues 
        }
    }
    return i + 1 //to get length of array, take i[index] and add 1 since index starts at 0 in an array
}
```


```javascript
countUniqueValues([1,1,1,1,1,2]) //2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
countUniqueValues([]) //0
countUniqueValues([-2,-1,-1,0,1]) //4
```
- Now it is O(n) time because we are only looping once! 