/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//chaining methods 
function reverseString(text) {
    return text.split('').reverse().join('');
}

//chaining methods using ES6 syntax with spread operator
function reverseString(text) {
    return [...text].reverse().join('')
}

// //for loop way 
function reverseString(text) {
    let result = '';
    for(let i = text.length - 1; i >= 0; i--){
        result += text[i]
    }
    return result
}

// //for...of loop used to execute a certain piece of code for each distinct item(property) of an iterable object 
function reverseString(text){
    let result = '';
    for(let char of text){
        //as we loop through we take each char from the end of the string and append it to the START of the string
        result = char + result // l+a
    }
    return result
}

// //recursive way 
function reverseString(text){
    //terminal case - case that ends recurson
    if (text === ''){
        return ''
    }else {
        return reverseString(text.substr(1))+ text[0]
    }
}

// //reduce() takes our character and adds it to the START of our result, similar to our for...of loop
function reverseString(text){
    return text.split('')
    .reduce((acc,char) => char + acc, '')
}

// //ES6 syntax spread operator
function reverseString(text){
    return [...text]
    .reduce((acc,char) => char + acc, '')
}

module.exports = reverseString