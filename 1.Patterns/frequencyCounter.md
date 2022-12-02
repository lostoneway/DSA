- This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(n<sup>2</sup>) operations with arrays/strings.
- This helps us make it linear O(n)

## Example: 
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. 



```javascript
    function same(arr1,arr2){
        //base case 
        if(arr1.length !== arr2.length){
            return false;
        }
        //for loop
        for(let i = 0; i < arr1.length; i++){
            //checks to see if the indexOf arr2 is squared result of arr1[i]
            let correctIndex = arr2.indexOf(arr1[i] ** 2)
            if(correctIndex === -1){
                return false;
            }
            arr2.splice(correctIndex,1)
        }
        return true
    }
```

- What's the problem here? This is a quadratic. We can refactor it to be O(n)! 