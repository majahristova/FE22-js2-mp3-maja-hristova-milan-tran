import { fetchingProducts } from "../firebase.js";
import Cookies from "../node_modules/js-cookie/dist/js.cookie.mjs"
const date = new Date(); //Dagens datum
date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);

Cookies.set(`test`, ``, 2);
console.log(Cookies.get(`test`));

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

// document.cookies = `name=${data}`;
// console.log(data);

// function fybjk(){

// }
// fybjk();