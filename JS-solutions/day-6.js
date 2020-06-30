function encloseInBrackets(str) {
  //* Method 1: Using regex (Passed the test: true);
  //   const regex = /\w+/gi;
  //   return str.replace(regex, `(${str})`);
  
  //* Method 2: Using array methods (Passed the test: true but expensive);
  //   const array = [...str];
  //   array.push(')');
  //   array.unshift('(');
  //   return array.join('');


  //* Method 3: Using template literals (Passed the test: true);
   return `(${str})`;
}

console.log(encloseInBrackets('aakgjkh'));
