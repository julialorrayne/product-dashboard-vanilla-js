//Task 2:
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
           throw new Error(`Error! Status: ${response.status}`); 
        }
        return response.json();
    })
    .then (products => {
        products.forEach(product => {
            console.log(product.fields.name);
        });
    })
    .catch(error => {
        console.error('Error fetching products:',error);
    });
}

//call the function to get the products
fetchProductsThen();

//Task 3:
async function fetchProductAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        if (!response.ok) {
            throw new Error(`Error! Status: ${response.status}`); 
        }

        const products = await response.json();

        displayProducts(products);
    }catch (error) {
        handleError(error);
    }
}
function displayProducts(products) {
    const container = document.getElementById('product-container');

    products.forEach(product => {
        const {name, price, image} = product.fields;

        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        
        productDiv.innerHTML = `
            <img src='${image[0].url}' alt = '${name}' />
            <h3>${name}</h3>
            <p>Price: $${price}</p>
        `;
    container.appendChild(productDiv);
    });
}
function handleError(error) {
    console.error('An error occurred:', error);
}

fetchProductAsync();