const slides = document.querySelectorAll(".herosection__images-container li");
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === i);
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 5000); 
