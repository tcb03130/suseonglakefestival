let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } // Reset index if it exceeds the number of slides
  slides[slideIndex - 1].style.display = "block"; // Show the current slide
  setTimeout(showSlides, 3000); // Change slide every 3 seconds (3000 milliseconds)
}

// 도트 업데이트 함수
function updateDot() {
  $(".dot").removeClass("active");
  $(".dot").eq(currentIndex).addClass("active");
}
