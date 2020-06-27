function alternatingSums(array) {
	let evenSum = 0,
		oddSum = 0,
		sumArray = [];
	//  add all numbers in even and odd indexes separately
	array.forEach((element, index) =>
		index % 2 !== 0 ? (evenSum += element) : (oddSum += element)
	);
	sumArray.push(oddSum, evenSum);
	console.log(sumArray);
	return sumArray;
}

const nums = [50, 60, 60, 45, 70];
alternatingSums(nums);
