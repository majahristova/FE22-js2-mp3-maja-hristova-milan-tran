

export function getCartItems(){
    const cartItemString = localStorage.getItem('cartItems');
    return  cartItemString? JSON.parse(cartItemString):null; 
}

export function addToCart(data) {
    const cartItemsString = localStorage.getItem('cartItems')
    if (cartItemsString) {
        const cartItems = JSON.parse(cartItemsString);
        cartItems.push(data)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        console.log( 'cartItems',cartItems)
        const cartCount = document.getElementById('cart-count')
        cartCount.innerText = cartItems.length
    }
    else {
        const cartItems = [data];
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        const cartCount = document.getElementById('cart-count')
        cartCount.innerText = cartItems.length
        console.log('cartItemsInElse', cartItems);
    }
}
