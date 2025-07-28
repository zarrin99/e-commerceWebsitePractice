const reviews = [
    {
        name: "Amanda Piere",
        image: "images/review1.jpg",
        comment: "healthy plant cutting",
        star: "★★★★★"
    },{
        name: "Ava Wilson",
        image: "images/review2.jpg",
        comment: "delivered with care",
        star: "★★★★★"
    },{
        name: "William Smith",
        image: "images/review3.jpg",
        comment: "contaminated with aphids",
        star: "★★"
    },{
        name: "Greta Thunburg",
        image: "images/review4.jpg",
        comment: "save the plants save the world",
        star: "★★★★★"
    }
];

function generateReviewsHTML(){
    const reviewsContainer = document.querySelector('.js-reviews-grid');
    
    reviewsContainer.innerHTML = ''; // Clear existing content

    reviews.forEach(review => {
        const reviewsHTML = `
            <div class="review-block">
                <img src="${review.image}" alt="${review.name}" class="customer-image">
                <h3>${review.name}</h3>
                <div class="stars">${review.star}</div>
                <p class="comment">"${review.comment}"</p>
            </div>`;
            
            reviewsContainer.innerHTML += reviewsHTML;
    });

}

// Initialize slideshow
function initSlideshow() {
    const slider = document.querySelector('.reviews-slider');
    const slides = document.querySelectorAll('.review-block');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const slidesToShow = 3;
    let autoplayInterval;
    
    function updateSlider() {
        const slideWidth = slides[0].offsetWidth + 30; // width + gap
        const newPosition = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${newPosition}px)`;
    }
    
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % (slides.length - slidesToShow + 1);
            updateSlider();
        }, 5000);
    }
    
    // Initial setup
    updateSlider();
    startAutoplay();
    
    // Navigation controls
    prevBtn.addEventListener('click', () => {
        clearInterval(autoplayInterval);
        currentIndex = Math.max(0, currentIndex - 1);
        updateSlider();
        startAutoplay();
    });
    
    nextBtn.addEventListener('click', () => {
        clearInterval(autoplayInterval);
        currentIndex = Math.min(slides.length - slidesToShow, currentIndex + 1);
        updateSlider();
        startAutoplay();
    });
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    slider.addEventListener('mouseleave', startAutoplay);
    
    // Handle window resize
    window.addEventListener('resize', updateSlider);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generateReviewsHTML();
    initSlideshow();
});

console.log('yo');