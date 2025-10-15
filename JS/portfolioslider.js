document.querySelectorAll('.portfolio-slider').forEach(slider => {
  const slides = slider.querySelectorAll('li');
  let index = 0;

  function showSlides() {
    let visibleCount = 1;
    if (window.innerWidth >= 1200) visibleCount = 5;
    else if (window.innerWidth >= 768) visibleCount = 3;

    slides.forEach((slide, idx) => {
      slide.classList.remove('visible');
      if (window.innerWidth < 768) {
        slide.classList.toggle('visible', idx === index);
      } else {
        // Для tablet/desktop показуємо visibleCount фото, починаючи з index
        if (idx >= index && idx < index + visibleCount) {
          slide.classList.add('visible');
        }
      }
    });
  }

  function nextSlide() {
    let visibleCount = 1;
    if (window.innerWidth >= 1200) visibleCount = 5;
    else if (window.innerWidth >= 768) visibleCount = 3;

    if (window.innerWidth < 768) {
      index = (index + 1) % slides.length;
    } else {
      index = (index + visibleCount) % slides.length;
      // Якщо залишилось менше фото, показуємо з початку
      if (index + visibleCount > slides.length) index = 0;
    }
    showSlides();
  }

  showSlides();
  window.addEventListener('resize', () => {
    index = 0;
    showSlides();
  });

  setInterval(nextSlide, 4000);
});