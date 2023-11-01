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

// Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console.

async function rejected() {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Promise rejected"));
      }, 4000);
    });
  } catch (error) {
    console.error("Error", error.message);
  }
}

rejected();

// Create a function that returns a promise, that you can use like this:

// YesNoFail4Seconds should wait 4 seconds before it does one of the following 3 things:
// resolves with a yes
// resolves with a no
// or rejects
// Look into Math.random()

function YesNoFail4Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve("yes");
      } else if (randomNumber >= 0.5 && randomNumber < 0.9) {
        resolve("no");
      } else {
        reject("Promise failed");
      }
    }, 4000);
  });
}

YesNoFail4Seconds()
  .then((data) => {
    console.log(`The answer is ${data}`);
  })
  .catch((error) => {
    console.log(error);
  });

// consuming this func using async await

async function asyncAwaitYesNo() {
  try {
    const data = await YesNoFail4Seconds();
    console.log(`The answer is ${data}`);
  } catch (error) {
    console.log(error);
  }
}
asyncAwaitYesNo();

// ex 5:
// Using async await

// Fetch the astronauts
// After the astronauts has been fetched, fetch movies using this api
// Log out the movies

async function fetchAstronauts() {
  try {
    const response = await fetch("http://api.open-notify.org/astros.json");
    if (!response.ok) {
      throw new Error("Failed to fetch astronauts");
    }
    const astronauts = await response.json();
    return astronauts;
  } catch (error) {
    console.error("Error fetching astronauts", error);
    throw error;
  }
}

async function fetchMovies(astronauts) {
  try {
    const moviePromises = astronauts.map(async (astronaut) => {
      const response = await fetch(
        "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json/${astronaut.id}"
      );
      if (!response.ok) {
        throw new Error(
          "Failed to fetch movies for astronaut ${astronaut.name}"
        );
      }
      return response.json();
    });
    const movies = await Promise.all(moviePromises);
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}
async function main() {
  try {
    const astronauts = await fetchAstronauts();
    const movies = await fetchMovies(astronauts);
    console.log("Movies:", movies);
  } catch (error) {
    console.error("An error occured", error);
  }
}
main();
