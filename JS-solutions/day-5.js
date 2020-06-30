function caseInsensitivePalindrome(str) {
  // make the passed string caseless
  const caselessString = str.toLowerCase();
  let reversedString = '';

  //! Refactored to a less expensive way.
  // const reversed = str.split('').reverse().join('').toLowerCase();

  // Using a reverse loop.
  for (let i = caselessString.length - 1; i >= 0; i--) {
    reversedString += caselessString[i];
  }
  return caselessString === reversedString;
}

console.log(caseInsensitivePalindrome('AaBaa'));
