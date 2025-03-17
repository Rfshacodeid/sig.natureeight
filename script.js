// Initialize Swiper
document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".swipertest", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1,
        centeredSlides: true,
        breakpoints: {
            576: { slidesPerView: 1, centeredSlides: true }, // Untuk HP
            768: { slidesPerView: 2, centeredSlides: false }, // Untuk Tablet
            1024: { slidesPerView: 3, centeredSlides: false }, // Untuk Desktop
            1440: { slidesPerView: 4, centeredSlides: false } // Untuk Layar Lebih Besar
        }
    });
});

// Accessibility improvements
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.addEventListener("click", function() {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
});  

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
