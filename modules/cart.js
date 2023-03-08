
export function getCartItems(){
    const cartItemString = localStorage.getItem('cartItems');
    return  cartItemString? JSON.parse(cartItemString):null; 
}

export function addToCart(data){
    const cartItemsString = localStorage.getItem('cartItems')
    console.log( 'cartitemstring ',cartItemsString)
    if(cartItemsString){
        const cartItems = JSON.parse(cartItemsString);
        console.log( 'cartItems',cartItems)
        cartItems.push(data)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))

    }
    else{
        const cartItems = [data];
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        console.log('cartItemsInElse', cartItems);
    }
}