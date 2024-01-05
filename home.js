var currentIndex = 0;
var totalImages = document.querySelectorAll('.slider-img').length;

function showImage(index) {
    document.querySelectorAll('.slider-img').forEach(function(img, i) {
        img.style.opacity = (i === index) ? 1 : 0;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

function autoSlide() {
    nextSlide();
}

setInterval(autoSlide, 6000); // Change image every 5 seconds automatically
