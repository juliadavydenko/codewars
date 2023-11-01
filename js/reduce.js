const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
});
average; // 39.37

// This method goes through each number in the euros array and keeps track of a running total.  First, it sets total to 0. This is the starting point. It looks at the first number in the array, which is 29.76. It adds that to the total, which is now 29.76...
// The reduce method also keeps track of the index of the number it's currently looking at and the array itself.
// Now, here's where things get interesting. After it has gone through all the numbers, it checks if the index is equal to array.length-1. In simple terms, this checks if it's at the last number in the array. If it is, it does something special.
