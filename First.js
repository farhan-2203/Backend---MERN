const { addToCart, changeQty, name } = require("./app"); // ---> Use of require("./app")

// console.log("Welcome Farhan!");
let l=[10,20,30,40,50];
l.forEach((val,idx)=>{
    console.log(`At idx= ${idx} the value=${val}`);
});
console.log(`Welcome ${name}!`);
console.log(addToCart());
console.log(changeQty());