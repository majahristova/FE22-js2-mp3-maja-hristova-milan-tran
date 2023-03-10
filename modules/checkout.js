import { getCartItems } from "./cart.js";
// import { baseUrl ,purchaseBtnfunc} from "../firebase.js";



function renderSingleCartItem(cartItem){
    console.log(`renderOneCartItem`, cartItem);
    const div = document.querySelector("#checkoutContainer")
    const nameForProduct = document.createElement('h1');
    div.append(nameForProduct);
    nameForProduct.innerText = cartItem.name;

    const priceForProduct = document.createElement('h3');
    div.append(priceForProduct);
    priceForProduct.innerText = cartItem.price +'kr'
}

function renderCartItems(){
    const cartItems = getCartItems();

    if(!cartItems){
        return;
    }
    let totalPrice = 0;
    for(let i = 0; i<cartItems.length; i++){
        let currentCartItem = cartItems[i];
        renderSingleCartItem(currentCartItem);
        totalPrice += parseInt(currentCartItem.price);
    }
    const totalElement = document.createElement('h3');
    totalElement.innerText = `Total Price: ${totalPrice} kr`;
    document.querySelector("#checkoutContainer").appendChild(totalElement);
   
    const clearCartButton = document.createElement('button');
    clearCartButton.innerText = 'Clear Cart';
    clearCartButton.addEventListener('click', function clearCart(){
        localStorage.clear();
        const checkoutContainer = document.querySelector("#checkoutContainer");
        checkoutContainer.innerHTML = "";
        const totalElement = document.createElement('h3');
        totalElement.innerText = `Total Price: 0 kr`;
        checkoutContainer.appendChild(totalElement);
      }
      );

    document.querySelector("#checkoutContainer").appendChild(clearCartButton);
}

renderCartItems();

function getTotal(){
    const cartItems = getCartItems();
    if(!cartItems){
      return;
    }
    let temp = cartItems.map(function(cartItem){
      return parseInt(cartItem.price);
    });
    let sum = temp.reduce(function(prev, next){
      return prev + next;
    }, 0);
    console.log(sum);
  }
getTotal();  

 

// async function purchaseBtnfunc(baseUrl){
  // let object = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //   }
  // }

//   const response = await fetch(baseUrl,object)
//   const cartItemsData = await response.json(); 
//   let currentStock = cartItemsData.saldo; 

//  const purchaseButton = document.querySelector("#purchase-btn")
//  purchaseButton.addEventListener('click', ()=>{
//   console.log(purchaseButton ,'hello')
//   console.log(currentStock)

//  })


// }


// purchaseBtnfunc();

//  const baseUrl = 'https://plantstore-efd58-default-rtdb.europe-west1.firebasedatabase.app/';

// async function fetchingProducts() {
    
//   const url = baseUrl + 'productinfo.json';
//   const response = await fetch(url);
//   const data = await response.json();
  
//   localStorage.setItem("dataOfProducts",JSON.stringify(data) )
//   if(!localStorage.getItem("products")){
//       localStorage.setItem("products", "[]");
//   }    
//   displayProduct(data);
  
// }  

// fetchingProducts()

const baseUrl = 'https://plantstore-efd58-default-rtdb.europe-west1.firebasedatabase.app/';
async function fetchingProducts() {
    
  const url = baseUrl + 'productinfo.json';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  // localStorage.setItem("dataOfProducts",JSON.stringify(data) )
  // if(!localStorage.getItem("products")){
  //     localStorage.setItem("products", "[]");
  // }    
//  displayProduct(data);
}    

fetchingProducts()



async function purchasebuttonFunc(){
  let object = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
  }

}
const response = await fetch(baseUrl,object);
const newDataForSaldo = await response.json();




}
