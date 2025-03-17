document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const nav = document.querySelector("nav ul");
    const heroSection = document.querySelector(".hero");
    const menuToggle = document.querySelector(".menu-toggle");

    document.addEventListener("click", function (event) {
        let menu = document.querySelector(".nav-links");
        let toggle = document.querySelector(".menu-toggle");
    
        if (!menu.contains(event.target) && !toggle.contains(event.target)) {
            menu.style.display = "none"; // Sembunyiin menu
        }
    });
    

    // Event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", adjustLayout);
    menuToggle.addEventListener("click", toggleNav);

    function handleScroll() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const isScrolled = heroBottom <= 0; // Cek apakah sudah melewati hero section

        header.classList.toggle("scrolled", isScrolled);
        header.style.padding = isScrolled ? "10px 30px" : "15px 50px";
        header.style.background = isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.9)";

        // Sembunyikan tombol hamburger jika user sudah melewati Hero Section
        if (window.innerWidth <= 768) {
            menuToggle.style.display = isScrolled ? "none" : "block";
        }
    }

    function toggleNav() {
        const isVisible = nav.style.display === "block";
        nav.style.display = isVisible ? "none" : "block";
    }

    function adjustLayout() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const isMobile = window.innerWidth <= 768;
        const inHeroSection = heroBottom > 0; // Masih dalam hero section

        // Menampilkan menu toggle hanya di mobile
        menuToggle.style.display = isMobile && inHeroSection ? "block" : "none"; 

        // Menampilkan nav hanya di desktop
        nav.style.display = isMobile ? "none" : "flex";
        nav.classList.toggle("mobile", isMobile);
    }

    // Panggil saat awal
    adjustLayout();
});

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
            768: { slidesPerView: 1, centeredSlides: true },
            1024: { slidesPerView: 1, centeredSlides: true }
        }
    });
});