// Function receives a parameter (data). Function must return a promise.
// If data is not a number - return promise rejected instantly and give the data error in a string.
// If data is an odd number, return a promise resolved in 1 second and return "odd" in a string.
// If data is even, return "even" after 2 seconds

function job(data) {
  return new Promise(function (resolve, reject) {
    if (typeof data !== "number" || isNaN(data)) {
      reject("error");
    } else if (data % 2 === 0) {
      setTimeout(() => reject("even"), 2000);
    } else {
      setTimeout(() => resolve("odd"), 1000);
    }
  });
}
job(5);
