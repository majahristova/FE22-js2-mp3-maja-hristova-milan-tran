
export const baseUrl = 'https://plantstore-efd58-default-rtdb.europe-west1.firebasedatabase.app/';
const url = baseUrl + 'productinfo.json';

export async function fetchingProducts() {
    console.log('fetchingProducts')
    const response = await fetch(url);
    const data = await response.json();

    localStorage.setItem("dataOfProducts", JSON.stringify(data))
    if (!localStorage.getItem("products")) {
        localStorage.setItem("products", "[]");
    }
    return data

}


export async function updatePurchaseItems(cartItems) {

    try {
        const firstItem = {
            ...cartItems[0],
            saldo:1337 ,
    
        }
        const newUrl = `${baseUrl}productinfo/${firstItem.id}.json`;
        let object = {
            method: 'PATCH',
            body: JSON.stringify(firstItem),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(firstItem)
        const response = await fetch(newUrl, object);
        const newDataForSaldo = await response.json();
        console.log(newDataForSaldo)



        // for(let i=0; i<newDataForSaldo.length; i++){

        //     console.log(newDataForSaldo[i].saldo)
        // }
    } catch (error) {
        console.log(error)
    }
}
