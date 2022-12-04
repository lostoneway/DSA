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

- What's the problem here? This is a quadratic. We have a for loop as well as indexOf() which is also iterating over the array. So as n grows as does these. We can refactor it to be O(n)! 

- Remember 2 separate loops is much better than 1 nested loop! 

```javascript 
    function same(arr1, arr2){
        //base case are arrays the same length?
        if(arr1.length !== arr2.length){
            return false;
        }
        //frequency counter, set two obj to compare
        let frequencyCounter1 = {};
        let frequencyCounter2 = {};
        //loop over first array 
        for(let value of arr1){
            frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
        }
        for(let value of arr2){
            
        }
    }

