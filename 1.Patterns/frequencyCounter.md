# Frequency Counter 
- This pattern uses objects or sets to collect values/frequencies of values. You are building a profile to quickly compare the breakdown between the objects. This can often avoid the need for nested loops or O(n<sup>2</sup>) operations with arrays/strings.
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

- What's the problem here? This is a quadratic. We have a `for loop` as well as `indexOf()` which is also iterating over the array. So as n grows as does these. We can refactor it to be O(n)! 

- *Remember 2 separate loops is much better than 1 nested loop!*

```javascript 
    function same(arr1, arr2){
        //base case are arrays the same length?
        if(arr1.length !== arr2.length){
            return false;
        }
        //frequency counter, set two obj to compare
        let frequencyCounter1 = {};
        let frequencyCounter2 = {};
        //loop over every value in 1st arr 
        for(let value of arr1){
            //add 1 if it is already in there or initialize it
            frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
        }
        for(let value of arr2){
            frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
        }
        console.log(frequencyCounter1);
        console.log(frequencyCounter2);

        for(let key in frequencyCounter1){
            //checks if the key in frequencyCounter1 is squared in frequencyCounter2
            if(!(key ** 2 in frequencyCounter2)){
                return false
            }
            //check if there are the same number of values in frequencyCounter2 as there are in frequencyCounter1
            if(frequencyCounter2 [key ** 2] !== frequencyCounter1[key]){
                return false
            }
        }
        return true 
    }
```
```javascript
    same([1,2,3,4],[1,4,9,16]) //true 
    same([2,5,7,5],[25,25,4,49])//true
    same([3,6,9],[9,81,34])//false 
```

- This is basically 3n and constant "doesn't matter" so it narrows down to 0(n). Don't let the number of lines of code make you feel like this is too much code and would take longer!

# Anagrams using the frequency counter pattern
## Example:
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman. Assume everything is lowercase and one word and no spaces. 

```javascript
function validAnagram(str1,str2){
    //base case, are strings the same length?
    if(str1.length !== str2.length){
        return false; 
    }
    //create obj
    const lookup = {}
    //loop over every letter in first str
    for(let i = 0; i < str1.length; i++){
        let letter = str1[i];
        //if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(let i = 0; i < str2.length; i++){
        let letter = str2[i];
        //can't find letter or letter is 0 (falsy), then it's not an anagram
        if(!lookup[letter]){
            return false;
        }else{
            //looking at our lookup obj, if the letter is there we subtract 1
            lookup[letter] -= 1; 
        }
    }
    return true;
}
```
validAnagram('','') //true
validAnagram('aaz','zza') //false
validAnagram('anagram','nagaram') //true
validAnagram('rat','car') //false
validAnagram('awesome','awesom') //false
validAnagram('qwerty','qeywrt') //true
validAnagram('texttwisttime','timetwisttext') //true
