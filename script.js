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


// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

// Select all gallery images
const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Close button
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
