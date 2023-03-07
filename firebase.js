const baseUrl ='https://plantstore-efd58-default-rtdb.europe-west1.firebasedatabase.app/';

async function fetchingProducts(){
    const url = baseUrl + 'productinfo.json';
    const response = await fetch(url);
    const data = await response.json();
    displayProduct(data)
}

fetchingProducts();

function displayProduct(data){
    for(let i=0; i< data.length; i++){
        // Create elements for product info
        const nameForProduct = document.createElement('h1');
        const priceForProduct = document.createElement('h3');
        const showImage = document.createElement('img');
        const leftInStorage = document.createElement('h5');
        // Create an "Add to cart" button element
        const addToCartButton = document.createElement('button');
        addToCartButton.innerText = 'Add to cart';
        // Attach a click event handler to the button
        addToCartButton.addEventListener('click', () => {
            // Add the product to the cart
            console.log('Adding product to cart:', data[i].name);
        });
        // Add the product info and button to the page
        document.body.appendChild(nameForProduct);
        document.body.appendChild(priceForProduct);
        document.body.appendChild(showImage);
        document.body.appendChild(leftInStorage);
        document.body.appendChild(addToCartButton);
        // Set the content of the product info elements
        nameForProduct.innerText = data[i].name;
        priceForProduct.innerText = data[i].price + ' kr';
        showImage.src = data[i].img;
        leftInStorage.innerText = 'Left in storage = ' + data[i].saldo;
    }
}

