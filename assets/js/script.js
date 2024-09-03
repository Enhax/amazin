const slides = document.querySelectorAll('.header-img');
const prevSlideButton = document.querySelector('.control-prev');
const nextSlideButton = document.querySelector('.control-next');
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlider)

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    slides[slideIndex].classList.add('displaySlide');
}

function nextSlide() {
    slideIndex++
    showSlide(slideIndex);
}

if(prevSlideButton != null){
    prevSlideButton.addEventListener('click', () => {
        clearInterval(intervalId);
        slideIndex--;
        showSlide(slideIndex);
        intervalId = setInterval(nextSlide, 5000);
    });
}

if(nextSlideButton != null){
    nextSlideButton.addEventListener('click', () => {
        clearInterval(intervalId);
        slideIndex++;
        showSlide(slideIndex);
        intervalId = setInterval(nextSlide, 5000);
    });
    
}

const scrollContainer = document.querySelectorAll('.products');

if(scrollContainer != null){
    for(const item of scrollContainer){
        item.addEventListener('wheel', (event)=>{
            event.preventDefault();
            item.scrollLeft += event.deltaY;
        })
    }
}


