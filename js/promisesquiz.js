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

// Chaining promises

var promise = job1();

promise

  .then(function (data1) {
    console.log("data1", data1);
    return job2();
  })

  .then(function (data2) {
    console.log("data2", data2);
    return "Hello world";
  })

  .then(function (data3) {
    console.log("data3", data3);
  });

function job1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("result of job 1");
    }, 1000);
  });
}

function job2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("result of job 2");
    }, 1000);
  });
}

job2();
