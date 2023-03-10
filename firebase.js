import { addToCart } from "./modules/cart.js";

export const baseUrl = 'https://plantstore-efd58-default-rtdb.europe-west1.firebasedatabase.app/';
 async function fetchingProducts() {
    
    const url = baseUrl + 'productinfo.json';
    const response = await fetch(url);
    const data = await response.json();
    
    localStorage.setItem("dataOfProducts",JSON.stringify(data) )
    if(!localStorage.getItem("products")){
        localStorage.setItem("products", "[]");
    }    
    displayProduct(data);
    
}    
// export async function purchaseBtnfunc(){
//     let object = {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//       }
//     }
  
//     const response = await fetch('https://plantstore-efd58-default-rtdb.europe-west1.firebasedatabase.app/')
//     const cartItemsData = await response.json(); 
//     //let currentStock = cartItemsData.saldo; 
  
// //    const purchaseButton = document.querySelector("#purchase-btn")
// //    purchaseButton.addEventListener('click', ()=>{
// //     console.log(purchaseButton ,'hello')
// //     console.log(currentStock)
  
// //    })
  
//   return cartItemsData;
//   }

function displayProduct(data) {

    // fetchingProducts();


    const maincontainer = document.querySelector('#plant-container');

    for (let i = 0; i < data.length; i++) {
        // Create elements for product info
        const smallDivForProduct = document.createElement('div');
        smallDivForProduct.classList.add('smalldiv');
        const nameForProduct = document.createElement('h1');
        const priceForProduct = document.createElement('h3');
        const showImage = document.createElement('img');
        const leftInStorage = document.createElement('h5');
        // Create an "Add to cart" button element
        const addToCartButton = document.createElement('button');
        addToCartButton.innerText = 'Add to cart';
        addToCartButton.addEventListener('click', () => {
            // Add the product to the cart
            console.log('Adding product to cart:', data[i]);
            addToCart(data[i]);
            
        });    
        // Attach a click event handler to the button
        // Add the product info and button to the page

       maincontainer.appendChild(smallDivForProduct) 
        smallDivForProduct.appendChild(nameForProduct);
        smallDivForProduct.appendChild(priceForProduct);
        smallDivForProduct.appendChild(showImage);
        smallDivForProduct.appendChild(leftInStorage);
        smallDivForProduct.appendChild(addToCartButton);
        // Set the content of the product info elements
        nameForProduct.innerText = data[i].name;
        priceForProduct.innerText = data[i].price + ' kr';
        showImage.src = data[i].img;
        leftInStorage.innerText = 'Left in storage = ' + data[i].saldo;
    }    
}    



fetchingProducts()