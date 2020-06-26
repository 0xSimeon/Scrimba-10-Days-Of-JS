# 10 Days of Javascript by Scrimba

This is an ongoing 10 Days of Javascript challenge by the guys at [scrimba](https://scrimba.com).

All solutions available [here](./JS-solutions/).

## Day 1 
```Javascript
// A function to add 2 numbers 
// taking advantage of implicit returns in arrow functions. 
const addNum = (a, b) => a + b; 
// example 
console.log(addNum(5, 6))

// A functions that returns the sum of all numbers regardless of the number of parameters.
const sum = (...numbers) => {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// example
console.log(sum(1,5,6,9, 19)); 
```

