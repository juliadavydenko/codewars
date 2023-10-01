const assets = {
  fruits: ["mango", "banana", "passionfruit"],
  liquid: ["water", "ice"],
};

const is_shop_open = true;

const order = (time, work) => {

    return new Promise( (resolve, reject)={

        if(is_shop_open){
            resolve( work() )
        }

        else{
            reject(console.log("the shop is closed"))
        }
    } )

}