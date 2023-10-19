fetch("https://yesno.wtf/api")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.image, data.answer);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
