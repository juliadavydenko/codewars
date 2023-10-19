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
