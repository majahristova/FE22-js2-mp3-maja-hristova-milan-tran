const baseUrl =` https://plantstore-efd58-default-rtdb.europe-west1.firebasedatabase.app/`;


async function fetchingProducts(){

    const url = baseUrl + 'productinfo.json';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
displayProduct(data)

}

fetchingProducts();


function displayProduct(data){

    for(let i=0; i< data.length; i++){

        const nameForProduct = document.createElement('h1');
        document.body.appendChild(nameForProduct);
        nameForProduct.innerText = data[i].name;
        
        const priceForProduct = document.createElement('h3');
        document.body.appendChild(priceForProduct);
        priceForProduct.innerText = data[i].price + ' '+ 'kr';

        const showImage = document.createElement('img');
        document.body.appendChild(showImage);
        showImage.src = data[i].img;
    
        const leftInStorage = document.createElement('h5');
        document.body.appendChild(leftInStorage);
        leftInStorage.innerText = 'Left in storage = ' + data[i].saldo

    
    }


  
}
