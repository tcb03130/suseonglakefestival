document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide-content img");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("middle");
      if (i === index) {
        slide.classList.add("middle");
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.remove("active");
      if (i === index) {
        dot.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  document.querySelector(".slide-button.next").addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  document.querySelector(".slide-button.prev").addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoSlide();
      currentIndex = index;
      showSlide(currentIndex);
      startAutoSlide();
    });
  });

  // Initialize
  showSlide(currentIndex);
  startAutoSlide();
});
