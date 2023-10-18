// 3 - async/await
//
const assets = {
  fruits: ["mango", "banana", "passionfruit"],
  liquid: ["water", "ice"],
};

const is_shop_open = true;

// const order = () =>{

//     return new Promise( (resolve, reject)=>{
//         if(true){
//             resolve
//         }
//         else {
//             reject()
//         }
//     } )
// }

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

async function order() {
  try {
    await abc;
  } catch (error) {
    console.log("abc doesn't exist", error);
  } finally {
    console.log("runs anyway");
  }
}

order().then(() => {
  console.log("sequence");
});

async function getAstronauts() {
  // await waits until we have data from fetch before it runs the next line. No need for callbacks 🤯
  console.log("Before we fetch data");
  const astronautsResponse = await fetch(
    "http://api.open-notify.org/astros.json"
  );
  console.log(
    "This is logged out after some time, even though the code looks synchronous! 🤯"
  );
  const astronauts = await astronautsResponse.json();
  console.log("This is logged out after some time! 🤯");
  console.log(astronauts);
  return astronauts;
}

getAstronauts();
