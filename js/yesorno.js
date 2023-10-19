//fetching yes or no from the API using promises

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
    const response = await fetch('https://yesno.wtf/api');
    if (!response.ok) {
        throw new Error("There was a problem with the network response")
    }
}
}
