document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-slider img");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = index;
    lightboxImage.src = images[index].src;
    lightbox.classList.remove("hidden");
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => showImage(index));
  });

  closeBtn.addEventListener("click", () => lightbox.classList.add("hidden"));

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("hidden")) return;
    if (e.key === "Escape") lightbox.classList.add("hidden");
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });
});