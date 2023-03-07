import Cookies from "./node_modules/js-cookie/dist/js.cookie.mjs"
import "./modules/cart.js";


export async function fetchingProducts() {
    const baseUrl = 'https://plantstore-efd58-default-rtdb.europe-west1.firebasedatabase.app/';
    const url = baseUrl + 'productinfo.json';
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    displayProduct(data);
    return data
}

fetchingProducts();

function displayProduct(data) {

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
        // Attach a click event handler to the button
        addToCartButton.addEventListener('click', () => {
            // Add the product to the cart
            console.log('Adding product to cart:', data[i].name);
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
         

        });
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

