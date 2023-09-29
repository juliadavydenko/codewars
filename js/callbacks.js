const assets = {
  fruits: ["mango", "banana", "passionfruit"],
};

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${assets.fruits[fruit_name]} was chosen`);
    call_production();
  }, 2000);
};

const production = () => {
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("the fruit is preparing");
    }, 2000);
  }, 0000);
};

order(0, production);