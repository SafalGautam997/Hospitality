    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });


    let slideIndex = 0;
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slider img");
const totalSlides = slides.length;

function moveSlide(direction) {
  slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto Slide every 4s
setInterval(() => {
  moveSlide(1);
}, 4000);
