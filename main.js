const products = [
    {
        id: 1,
        image: "images/plant1.avif",
        name: "Monstera",
        price: 1099
    },{
        id: 2,
        image: "images/plant2.avif",
        name: "Fern",
        price: 599
    },{
        id: 3,
        image: "images/plant3.avif",
        name: "Calathea",
        price: 2099
    },{
        id: 4,
        image: "images/plant4.avif",
        name: "Succulent",
        price: 1499
    }

];

function toggleMenu(){
    const menu = document.querySelector('.dropdown-menu');
    menu.classList.toggle('show');
}


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

            <button class="add-to-cart-button js-add-to-cart" 
            data-product-id="${product.id}">
                <i class="fa-solid fa-cart-plus"></i>
            </button>
        </div>
    </div>`
});
const cart = [];


document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        console.log("added");
        const productId = button.dataset.productId;

        let matchingItem;

        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        });

        if(matchingItem){
            matchingItem.quantity += 1;
        }
        else{
            cart.push({
            productId : productId,
            quantity: 1
            });
        }

        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

        console.log(cartQuantity);
        console.log(cart);
        
    });
});

