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
