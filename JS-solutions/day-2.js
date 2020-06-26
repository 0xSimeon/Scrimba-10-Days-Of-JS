function allLongestStrings(array) {
	//  write code here.
	const getLengths = array.map((string) => string.length);
	const longestString = Math.max(...getLengths);
	return array.filter((element) => {
		if (element.length === longestString) return element;
	});
}

const testArray = ["aba", "aa", "ad", "vcd", "aba", "a"];
allLongestStrings(testArray);
