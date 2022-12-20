# Sliding Window 
- This pattern involves creating a *window* which can be either an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). 
- You are basically looping only once, at the beginning you'll take the num and sum up the numbers up to num and hold it in a variable.
- Very useful for keeping track of a subset of data in an array/string etc. 

## Example
- Write a function called maxSubarraySum which accepts an array of integers and a number called *n*. The function should calculate the maximum sum of *n* consecutive elements in the array. 

```javascript
function maxSubarraySum(arr,num){
    if(num > arr.length){
        return null 
    }
    var max = -Infinity;// accounts for neg nums!
    for(let i = 0; i < arr.length - num +1; i++){
        temp = 0; //stores our sum each time through
        for(let j =0; j < num; j++){
            temp += arr[i + j];
        }
        if(temp > max){
            max = temp; 
        }
    }
    return max; 
}
```
- What's wrong? Well sure if the num is small like 3 it wouldn't be too bad but what if it were a large array and num is 20. Yikes. Nested loops, quadratic.. oof. 

```javascript
function maxSubarraySum(arr,num){
    let maxSum = 0; 
    let tempSum = 0; 
    if(arr.length < num) return null; 
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum; 
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum; 
}
```
- This refactor is O(n) time complexity! We only loop once, and use our Math objects to help compare the max and temp sums! 

```javascript
maxSubarraySum([1,2,5,2,8,1,5],2)//10
maxSubarraySum([1,2,5,2,8,1,5],4)//17
maxSubarraySum([4,2,1,6],1)//6
maxSubarraySum([4,2,1,6,2],4)//13
maxSubarraySum([],4)//null
```



