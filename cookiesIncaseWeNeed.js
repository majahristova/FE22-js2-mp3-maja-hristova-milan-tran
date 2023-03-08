import { fetchingProducts } from "../firebase.js";
import Cookies from "../node_modules/js-cookie/dist/js.cookie.mjs"
const date = new Date(); //Dagens datum
date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);


let firebase = await fetchingProducts()
console.log(firebase);
Cookies.set('currentfirebase', JSON.stringify(firebase), 200000000)



let i=0;
firebase.forEach(element => {
    console.log(element.name , element.saldo);
    Cookies.set('currentfirebase'+i++, JSON.stringify([element.name , element.saldo]), 200000000)

});

console.log(JSON.parse(Cookies.get('currentfirebase1')))


console.log(JSON.parse(Cookies.get('currentfirebase')))


let plantName= data[i].name;
// let obj ={[data[i].name]: { price: "100", saldo: 99}};
// console.log(obj,"?????");
let array =JSON.parse(Cookies.get("cart"))
//array.push(data[i].name)



// let j = array.indexOf("Semira");  // delete array
// array.splice( j , 1);
// console.log(array,"deleted");  

Cookies.set("cart",  JSON.stringify(array), 34567897654); 

console.log(JSON.parse(Cookies.get("cart")));