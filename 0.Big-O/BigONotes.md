# Big O Notation 

## Objectives: 
- Motivate the need for it 
- Describe what Big O Notation is
- Simplify Big O Expressions
- Define "time complexity" and "space complexity" 
- Evaluate the time complexity and space complexity of different algorithms using Big O Notation 
- Describe what a logarithm is 

---
Big O
: We say that an algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than the constant times **f(n)**, as **n** increases

How do we determine what's best? That's what Big O is for. Think of it as a "scale" to determine what's best. Like a numeric representation. 


### The problem with time: 
- Different machines will record different times 
- The *same* machine will record different time!
- For fast algos, speed measure may not be precise enough? 
**This is where Big O comes into play**

- Let's count the # of simple operations the computer has to perform rather than counting seconds. 

```
EXAMPLE:
function addUpTo(n) {
    return n * (n + 1) / 2
}
//1-multiplication, 1-addition, 1-division
//3 simple operations, regardless of the size of n, remains constant O(1)

Constant - O(1) :

function addUpTo(n){
	return n * (n+1) / 2
}

  t|
  i|
  m|______________________
  e|_________________________
        input size

```
---
```
EXAMPLE: 
function addUpTo(n){
    let total = 0; 
    for(let i =1; i <= n; i++){
        total += i; 
    }
    return total 
}
//notice the loop here! regards of the exact number, the number of operations grows roughly in proportion with n so O(n)

Linear - O(n)
function addUpTo(n){
    let total = 0; 
    for(let i =1; i <= n; i++){
        total += i; 
    }
    return total 
}
  t|    /
  i|   /
  m|  /
  e| /
   |/_______________
         input size
```
---

## Key Takeaways
- Constants don't matter! 
- O(2n) -> O(n)
- O(500) -> O(1)
- O(13nX^2^) -> O(nX^2^)
- o(nX^2^ + 5n + 8) -> O(nX^2^)

## Big O Shorthands (usually not always true):
1. Arithmetic ops are constant 
2. Variable assignments are constant
3. Accessing elements in an arr (by index) or object (by key) is constant
4. In a loop the complexity is the length of the loop times the complexity of whatever happens inside the loop.

