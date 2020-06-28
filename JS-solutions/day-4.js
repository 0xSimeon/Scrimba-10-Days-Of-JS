// 10 Days of JS - Day 4  (Replacing items in arrays).
function arrayReplace(array, elemToReplace, substitutionElem) {
  return array.map((element) => {
    if (element === elemToReplace) return (element = substitutionElem);
    // just return the element if it's not the one to be matched.
    return element;
  });
}

const array = [1, 2, 1];
arrayReplace(array, 1, 3);
