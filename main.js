const products = [
    {
        image: "images/plant1.avif",
        name: "Monstera",
        price: 1099
    },{
        image: "images/plant2.avif",
        name: "Fern",
        price: 599
    },{
        image: "images/plant3.avif",
        name: "Calathea",
        price: 2099
    },{
        image: "images/plant4.avif",
        name: "Succulent",
        price: 1499
    }

];

function toggleMenu(){
    const menu = document.querySelector('.dropdown-menu');
    menu.classList.toggle('show');
}
/*
function moveCurrencyDropdown(){
    const menu = document.querySelector('.dropdown-menu'); // menu on the right
    const currencyDropdown = document.querySelector('.currency-container select'); //currency selector

    if (window.innerWidth <= 768){
        if(!originalParent){
            originalParent = currencyDropdown.parentNode;
            menu.appendChild(currencyDropdown);
        }
    }
    else {
        if (originalParent && currencyDropdown.parentNode !== originalParent){
            originalParent.appendChild(currencyDropdown);
        }
    }
}

window.addEventListener('load', moveCurrencyDropdown);
window.addEventListener('resize', moveCurrencyDropdown); */

let productsHTML = '';
products.forEach((product) => {
    productsHTML += 
    `<div class="products-grid">
            <div class="products-container">
                <div class="product-image-container">
                    <img class="product-image" src="${product.image}">
                </div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${(product.price/100).toFixed(2)}</div>
            </div>
        </div>`
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

//slideshow

