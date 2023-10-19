//fetching yes or no from the API using promises

const { response } = require("express");

fetch("https://yesno.wtf/api")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.image, data.answer);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

//fetching yes or no from the API using async await

async function yesOrNo() {
  try {
    const response = await fetch("https://yesno.wtf/api");
    if (!response.ok) {
      throw new Error("There was a problem with the network response");
    }
    const data = await response.json();
    console.log(data.answer);
  } catch (error) {
    console.error("An error occurred", error);
  }
}
yesOrNo();

// Try fetching a url that rejects fx https://knajskdskj.jasdk. Log out the error message

async function fetchWithError() {
  try {
    const response = await fetch("https://knajskdskj.jasdk");
    if (!response.ok) {
      throw new Error("There was a problem fetching data", error);
    }
    const data = response.json();
  } catch (error) {
    console.error("There was an error", error);
  }
}
fetchWithError();

// Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds.

const delay = (millisec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millisec);
  });
};

delay(4000)
  .then(() => {
    console.log("Hello");
  })
  .catch((error) => {
    console.error("Error", error);
  });

//or, preffered

function delayed(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedHello() {
  await delayed(4000);
  console.log("Delayed hello");
}

delayedHello();
