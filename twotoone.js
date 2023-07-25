// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//My solution:

function longest(s1, s2) {
  let combinedString = s1 + s2;
  let uniqueLetters = {};
  for (let char of combinedString) {
    uniqueLetters[char] = true;
  }
  let uniqueSortedLetters = Object.keys(uniqueLetters);
  uniqueSortedLetters.sort();
  let result = uniqueSortedLetters.join("");
  return result;
}
