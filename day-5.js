function caseInsensitivePalindrome(str) {
  // reverse the passed string
  const reversed = str.split('').reverse().join('').toLowerCase();
  // return true if it's the same when reversed. otherwise, return false.
  return str.toLowerCase() === reversed ? true : false;
}

console.log(caseInsensitivePalindrome('AaBaa'));
