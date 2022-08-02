# Big O Notation 

## Objectives: 
- Motivate the need for it 
- Describe what Big O Notation is
- Simplify Big O Expressions
- Define "time complexity" and "space complexity" 
- Evaluate the time complexity and space complexity of different algorithms using Big O Notation 
- Describe what a logarithm is 

---

How do we determine what's best? That's what Big O is for. Think of it as a "scale" to determine what's best. Like a numeric representation. 


### The problem with time: 
- Different machines will record different times 
- The *same* machine will record different time!
- For fast algos, speed measure may not be precise enough? 
**This is where Big O comes into play**

- Let's count the # of simple operations the computer has to perform rather than counting seconds. 

```
function addUptTo(n) {
    return n * (n + 1) / 2
}
//1-multiplication, 1-addition, 1-division ; 3 simple operations, regardless of the size of n 
```


