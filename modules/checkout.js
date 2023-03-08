import { getCartItems } from "./cart.js";
function renderSingleCartItem(cartItem){
    console.log(`renderOneCartItem`, cartItem);
    const div = document.querySelector("#checkoutContainer")
    const nameForProduct = document.createElement('h1');
    div.append(nameForProduct);

    nameForProduct.innerText = cartItem.name;

}

function renderCartItems(){
    const cartItems = getCartItems();

    if(!cartItems){
        return;
    }
    for(let i = 0; i<cartItems.length; i++){
        let currentCartItem = cartItems[i];
        renderSingleCartItem(currentCartItem);
    }
}

renderCartItems();
