const baseUrl =` https://plantstore-efd58-default-rtdb.europe-west1.firebasedatabase.app/`;


async function fetchingproducts(){

    const url = baseUrl + 'productinfo.json';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)


}

fetchingproducts();
