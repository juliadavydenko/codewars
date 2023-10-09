// 3 - async/await
//
const assets = {
  fruits: ["mango", "banana", "passionfruit"],
  liquid: ["water", "ice"],
};

const is_shop_open = true;

const toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("please choose a topping");
    }, 3000);
  });
};

async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("C");
  console.log("D");
  console.log("E");
}
