/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
//Iterative Approach with a for..of loop 
//* jsbench says this is the slower approach 

const vowels = ['a','e','i','o','u']
function vowelsCounter(text) {
    let vowelNum = 0;
    //loop through text to check if each character is a vowel and change to lowercase
    for(let letter of text.toLowerCase()){
        if(vowels.includes(letter)){
            vowelNum++
        }
    }
    //return number of vowels
    return vowelNum
}

//! using regex (yikes)
//* jsbench says this is the faster more optimum approach
function vowelsCounter(text){
    //* .match returns an array of matches foun after comparing the regex passed in as an arguement with the text
    let matchingInstances = text.match(/[aeiou]/gi);

    //check if matching instances exist then calculate length
    if(matchingInstances){
        //return # of vowels
        return matchingInstances.length
    }else{
        return 0
    }
}


module.exports = vowelsCounter;
