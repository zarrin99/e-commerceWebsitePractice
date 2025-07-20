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

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function moveSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail/dot controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all slides
  slides.forEach(slide => slide.style.display = "none");

  // Deactivate all dots
  dots.forEach(dot => dot.classList.remove("active"));

  // Show current slide and activate dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Auto-slide (optional)
setInterval(() => moveSlide(1), 5000);
