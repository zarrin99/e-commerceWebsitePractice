let slideIndex = 1;
showSlides(slideIndex);

let isPlaying = true; // Auto-play initially enabled

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    //if we reach the end restart loop
    if (n > slides.length) slideIndex = 1;
    //if we want to go a slide before slide one, we start at the end -> loop
    if (n < 1) slideIndex = slides.length;
    //hide all other slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Toggle pause/play
function togglePause() {
  const pauseBtn = document.getElementById("pauseBtn");
  isPlaying = !isPlaying;

  if (isPlaying) {
    pauseBtn.textContent = "◼"; // Pause icon
    slideInterval = setInterval(() => moveSlide(1), 3000); // Resume
  } else {
    pauseBtn.textContent = "▶"; // Play icon
    clearInterval(slideInterval); // Pause
  }
}

// Reset interval when manually navigating
function moveSlide(n) {
  showSlides(slideIndex += n);
  if (!isPlaying) {
    clearInterval(slideInterval); // Prevent duplicates
  }
}