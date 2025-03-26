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
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: "coverflow",
        coverflowEffect: {
            rotate: 30,
            slideShadows: true,
            depth: 100,
            modifier: 1,
            stretch: 0,
        },
        parallax: true,
        slidesPerView: 1,
        centeredSlides: true,
        fadeEffect: {
            crossFade: true, // Crossfade antara slide
        },
        breakpoints: {
            576: { 
                slidesPerView: 1, 
                centeredSlides: true 
            }, // Untuk HP
            768: { 
                slidesPerView: 2, 
                centeredSlides: false 
            }, // Untuk Tablet
            1024: { 
                slidesPerView: 3, 
                centeredSlides: false 
            }, // Untuk Desktop
            1440: { 
                slidesPerView: 4, 
                centeredSlides: false 
            } // Untuk Layar Lebih Besar
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

  const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
