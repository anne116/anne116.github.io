/*
Assignment 2: Function, Array, and Object
Complete the function below to calculate the average price of all the products.
*/

function avg(data) {
    // your code here
    const productInfo = data.products;
    let sumPrice = 0;
    productInfo.forEach( product => {
        sumPrice += product.price;
    });

const avgPrice = sumPrice / productInfo.length;
return avgPrice;
}        


    
    console.log(
        avg({
        size: 3,
        products: [
        {
        name: 'Product 1',
        price: 100,
        },
        {
        name: 'Product 2',
        price: 700,
        },
        {
        name: 'Product 3',
        price: 250,
        },
        ],
        })
        ); // should print the average price of all products