# 10 Days of Javascript by Scrimba

This is an ongoing 10 Days of Javascript challenge by the guys at [scrimba](https://scrimba.com).

All solutions available [here](./JS-solutions/).

## Day 1
`see file`: [day-1.js](./JS-solutions/day-1.js)

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

## Day 2
`see file`: [day-2.js](./JS-solutions/day-2.js)

Return the longest strings in an array

```Javascript
function allLongestStrings(array) {
    // Create a copy of the array using the length of each string
    const getLengths = array.map((string) => string.length);
    // get the length of the longest string
    const longestString = Math.max(...getLengths);
    return array.filter((element) => {
        // filter and get all elements that has same length as longest string
        if (element.length === longestString) return element;
    });

    // Test
    const testArray = ["aba", "aa", "ad", "vcd", "aba", "a"];
allLongestStrings(testArray);
}
```

## Day 3
`see file`: [day-3.js](./JS-solutions/day-3.js)

Return alternating sums of even and odd indexes.

```Javascript
function alternatingSums(array) {
	let evenSum = 0,
		oddSum = 0,
		sumArray = [];

// loop through and grab each element
  array.forEach((element, index) =>
  //  add all numbers in even and odd indexes separately using the tenary operator
		index % 2 !== 0 ? (evenSum += element) : (oddSum += element)
	);
	sumArray.push(oddSum, evenSum);
	console.log(sumArray); 
	return sumArray;
}

const nums = [50, 60, 60, 45, 70];
alternatingSums(nums);

// result
[180, 105]

```
