// 10 Days of JS - Day 4  (Replacing items in arrays).
function arrayReplace(array, elemToReplace, substitutionElem) {
  return array.map((element) => {
    if (element === elemToReplace) return (element = substitutionElem);
    // just return the element if it's not the one to be matched.
    return element;
  });

  // Or - using the tenary operator (One line approach)
  // return array.map((element) => element === elemToReplace ? substitutionElem : element);
}

const array = [1, 2, 1];
console.log(arrayReplace(array, 1, 3));
