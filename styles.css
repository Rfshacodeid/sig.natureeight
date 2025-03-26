/* General Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #eef2f5;
    color: #333;
    line-height: 1.6;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.parallax {
    background-image: url('assets/baground.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
}

/* Smooth Container Styling */
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Header Styling */
.header {
    display: flex;
    justify-content: space-between; /* Biar logo di kiri, nav di kanan */
    align-items: center;
    padding: 16px 5%;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
    transition: padding 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

/* Logo */
/* Logo */
.logo {
    flex: 1;
    text-align: left;
    font-size: clamp(16px, 3vw, 24px);
    font-weight: bold;
    color: #2D2D2D; /* Warna utama logo (dark gray) */
}

/* Styling default untuk h1 */
.logo h1 {
    font-size: clamp(14px, 3vw, 22px);
    font-weight: bold;
    margin: 0;
    color: inherit; /* Me-warisi warna dari parent .logo */
}

/* Efek hover untuk interaktivitas */
.logo:hover {
    color: #1A1A1A; /* Warna lebih gelap saat hover */
}

/* Perbesar ukuran h1 di mobile */
@media (max-width: 768px) { 
    .logo h1 {
        font-size: clamp(16px, 4vw, 24px);
        color: #2D2D2D; /* Konsisten warna di mobile */
    }
}

.logo .accent {
    animation: colorCycle 6s infinite;
    transition: color 0.5s ease;
}

@keyframes colorCycle {
    0% {
        color: #40E0D0; /* Putih bersih */
    }
    33.33% {
        color: #0072ff; /* Biru perusahaan */
    }
    66.66% {
        color: #00c6ff; /* Biru cerah */
    }
    100% {
        color: #40E0D0; /* Kembali ke putih */
    }
}

/* Navigasi */
#menu {
    z-index: 2;
    right: 0;
    left: auto;
  }
  
  #menu-bar {
    width: 32px;
    height: 30px;
    margin: 20px 15px 15px 0;
    cursor: pointer;
}
  
  .bar {
    height: 3px;
    width: 80%;
    background-color: #505050;
    display: block;
    border-radius: 5px;
    transition: 0.3s ease;
  }
  
  #bar1 {
    transform: translateY(-4px);
  }
  
  #bar3 {
    transform: translateY(4px);
  }
  
  .nav {
    transition: 0.3s ease;
    display: none;
    text-align: right;
  }
  
  .nav ul {
    padding: 0 22px;
  }
  
  .nav li {
    list-style: none;
    padding: 12px 0;
  }
  
  .nav li a {
    color: white;
    font-size: 20px;
    text-decoration: none;
  }
  
  .nav li a:hover {
    font-weight: bold;
  }
  
  .menu-bg, #menu {
    top: 0;
    right: 0;
    left: auto;
    position: absolute;
  }
  
  .menu-bg {
    z-index: 1;
    width: 0;
    height: 0;
    margin: 30px 20px 20px 0;
    background: radial-gradient(circle, #808080, #D3D3D3);
    border-radius: 50%;
    transition: 0.3s ease;
  }
  
  .change {
    display: block;
  }
  
  .change .bar {
    background-color: white;
  }
  
  .change #bar1 {
    transform: translateY(4px) rotateZ(-45deg);
  }
  
  .change #bar2 {
    opacity: 0;
  }
  
  .change #bar3 {
    transform: translateY(-6px) rotateZ(45deg);
  }
  
  .change-bg {
    width: 520px;
    height: 460px;
    transform: translate(60%,-30%);
  }

  img, video {
    max-width: 100%;
    height: auto;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

.nav-link {
    color: #333;
    text-decoration: none;
    padding: 8px 16px;
    transition: color 0.3s ease, background-color 0.3s ease;
}

.nav-link:hover {
    color: #007BFF;
    background-color: rgba(0, 123, 255, 0.1);
    border-radius: 4px;
}

:root {
    --primary: #00c6ff;
    --secondary: #0072ff;
    --accent: #ff2d55;
    --text: #f8f9fa;
    --transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Hero Section Modern */
.hero {
    height: 100vh;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), 
                url('assets/bg.jpg') no-repeat center center/cover;
    text-align: center;
    color: var(--text);
    position: relative;
    overflow: hidden;
    perspective: 1000px;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0,114,255,0.1) 0%, rgba(0,198,255,0.05) 100%);
    z-index: 1;
    animation: backgroundShift 20s infinite alternate;
}

.hero-content {
    position: relative;
    z-index: 10;
    opacity: 0;
    transform: translateY(30px);
    animation: heroEntry 1.2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
    padding: 2rem;
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.hero h2 {
    font-size: clamp(2rem, 8vw, 3.5rem); /* Update dengan clamp */
    margin-bottom: 1rem;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 4px 12px rgba(0, 198, 255, 0.2);
    animation: textGlow 2s ease-in-out infinite alternate;
}

.hero p {
    font-size: clamp(1rem, 3vw, 1.25rem);
    line-height: 1.6;
    max-width: min(600px, 90%);
    width: 100%;
    opacity: 0;
    animation: fadeInUp 0.8s 0.4s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
    
    /* Posisi ke kanan */
    text-align: center;
    margin: 0 auto 2rem; /* auto untuk margin kiri-kanan */
    position: relative;
    left: auto;
    transform: translateY(20px);
}

.hero-content {
    position: relative;
    z-index: 10;
    opacity: 0;
    transform: translateY(30px);
    animation: heroEntry 1.2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
    padding: 2rem;
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    width: 90%; /* Tambahkan width */
    max-width: 800px; /* Batasi lebar maksimum */
    margin: 0 auto; /* Pusatkan konten */
}


/* Animasi Kustom */
@keyframes heroEntry {
    0% {
        opacity: 0;
        transform: translateY(30px) rotateX(15deg);
    }
    100% {
        opacity: 1;
        transform: translateY(0) rotateX(0);
    }
}

@keyframes backgroundShift {
    0% { transform: scale(1) rotate(0deg); }
    100% { transform: scale(1.05) rotate(2deg); }
}

@keyframes textGlow {
    0% { text-shadow: 0 4px 12px rgba(0, 198, 255, 0.2); }
    100% { text-shadow: 0 8px 24px rgba(0, 198, 255, 0.4), 0 0 16px rgba(0, 198, 255, 0.3); }
}

.btn {
    display: inline-flex;
    align-items: center;
    padding: clamp(0.8rem, 3vw, 1rem) clamp(1.8rem, 6vw, 2.5rem); /* Padding responsif */
    font-size: clamp(0.875rem, 2vw, 1rem); /* Ukuran font responsif */
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: var(--text);
    text-decoration: none;
    font-weight: 600;
    border-radius: 50px;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s 0.6s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
    );
    transition: left 0.8s;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(0, 114, 255, 0.3);
}

.btn:hover::before {
    left: 100%;
}

.btn:active {
    transform: translateY(1px);
    filter: brightness(0.9);
}

/* Scroll Indicator */
.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
    40% { transform: translateY(-30px) translateX(-50%); }
    60% { transform: translateY(-15px) translateX(-50%); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero h2 {
        font-size: 2.5rem;
    }
    
    .hero p {
        font-size: 1.1rem;
    }
    
    .hero-content {
        padding: 1.5rem;
        margin: 1rem;
    }
}

@media (max-width: 480px) {
    .hero h2 {
        font-size: 2rem;
    }
    
    .btn {
        padding: 0.8rem 1.8rem;
    }
}

/* Perbaikan media query */
@media (max-width: 768px) {
    .hero-content {
        padding: 1.5rem;
        border-radius: 12px; /* Radius lebih kecil di mobile */
    }
    
    .hero p {
        line-height: 1.5; /* Sesuaikan line-height */
        margin-bottom: 1.5rem;
    }
}

@media (max-width: 480px) {
    .hero-content {
        padding: 1rem;
        border-radius: 8px;
        width: 95%; /* Lebih sempit di layar kecil */
    }
    
    .btn {
        width: 100%; /* Full width di mobile */
        justify-content: center;
    }
    
    .scroll-indicator {
        bottom: 1rem; /* Sesuaikan posisi */
    }
}

/* Updated Sections */
.section {
    padding: 120px 5%;
    text-align: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(45deg, #f8f9fa 0%, #ffffff 100%);
    transition: var(--transition);
}

.section::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
    animation: sectionGlow 3s infinite;
}

section:target {
    animation: targetHighlight 1.5s ease;
}

@keyframes targetHighlight {
    0% { background: rgba(0, 198, 255, 0.1); }
    100% { background: transparent; }
}

.section:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

/* About Section Modern */
#about p.intro {
    font-size: 1.25rem;
    line-height: 1.8;
    margin: 2rem auto 3rem;
    max-width: 800px;
    color: #4a4a4a;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s 0.2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
}

/* Skills Grid Modern */
#about .skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 3rem auto;
    padding: 2rem;
}

#about .skill-box {
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    opacity: 0;
    transform: translateY(30px);
    animation: cardEntry 0.6s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
}

#about .skill-box:nth-child(1) { animation-delay: 0.3s; }
#about .skill-box:nth-child(2) { animation-delay: 0.5s; }
#about .skill-box:nth-child(3) { animation-delay: 0.7s; }

@keyframes cardEntry {
    0% {
        opacity: 0;
        transform: translateY(30px) rotateX(-15deg);
    }
    100% {
        opacity: 1;
        transform: translateY(0) rotateX(0);
    }
}

#about .skill-box:hover {
    transform: translateY(-10px) rotateZ(1deg);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15),
               0 0 0 2px var(--primary);
}

#about .skill-box h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--secondary);
    position: relative;
    padding-bottom: 0.5rem;
}

#about .skill-box h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), transparent);
}

#about .skill-box ul {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 0.8rem;
    text-align: left;
}

#about .skill-box li {
    padding: 0.8rem;
    background: rgba(0, 198, 255, 0.05);
    border-radius: 8px;
    display: flex;
    align-items: center;
    transition: var(--transition);
}

#about .skill-box li::before {
    content: '▹';
    color: var(--primary);
    margin-right: 0.8rem;
    font-size: 1.2em;
}

#about .skill-box li:hover {
    background: rgba(0, 198, 255, 0.1);
    transform: translateX(8px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .section {
        padding: 80px 5%;
    }
    
    #about .skills {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
    
    #about .skill-box {
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    #about p.intro {
        font-size: 1.1rem;
    }
    
    #about .skill-box h3 {
        font-size: 1.3rem;
    }
}

/* Portfolio */
.portfolio-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Grid responsif */
    gap: 20px;
    justify-content: center;
    padding: 20px;
}

/* Setiap item tetap rapi */
.portfolio-item {
    background: #ffffff;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

/* Pastikan semua gambar dalam item memiliki ukuran yang sama */
.portfolio-item img {
    width: 100%;
    height: 200px; /* Sesuaikan tinggi sesuai kebutuhan */
    object-fit: cover;
    border-radius: 8px;
}

/* Efek hover */
.portfolio-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Tambahkan responsif untuk ukuran layar kecil */
@media (max-width: 768px) {
    .portfolio-gallery {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Lebih kecil di mobile */
    }
}

@media (max-width: 480px) {
    .portfolio-gallery {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Lebih kecil di layar HP */
    }

    .portfolio-item img {
        height: 150px; /* Sesuaikan biar nggak terlalu besar di HP */
    }
}

/* Shop */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-content: center;
    padding: 20px;
}

.card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-card {
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.product-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.product-card h3 {
    font-size: 1.2rem;
    margin-top: 15px;
    color: #333;
}


/* Social Icons */
.social-icons {
    margin: 15px 0;
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
}

.social-icons a {
    color: #fff;
    font-size: 20px;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
}

.social-icons a:hover {
    color: #e74c3c;
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.2);
}

/* Responsive Styles */
@media (max-width: 768px) {
    .contact {
        padding: 30px 10px;
    }

    .contact h2 {
        font-size: 24px;
    }

    .contact p {
        font-size: 14px;
    }

    .whatsapp {
        font-size: 14px;
        padding: 8px 20px;
    }

    .social-icons {
        gap: 8px;
    }

    .social-icons a {
        width: 35px;
        height: 35px;
        font-size: 18px;
    }
}

/* Footer */
.footer {
    text-align: center;
    padding: 15px 8px;
    background: #1a1a1a;
    color: #fff;
    position: relative;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
}

.footer p {
    margin: 8px auto;
    font-size: 14px;
    line-height: 1.5;
    max-width: 500px;
    opacity: 0.9;
    transition: opacity 0.3s ease-in-out;
}

.footer p:hover {
    opacity: 1;
}

.footer .social-icons {
    margin-top: 10px;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.footer {
    animation: fadeInUp 0.6s ease-in-out;
}

.menu-toggle {
    display: none;
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
}

@media screen and (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        background-color: white;
        position: absolute;
        top: 60px;
        right: 20px;
        width: 200px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .nav-links.active {
        display: flex;
    }
}

/* Testimonials Section */
.testimonials {
    position: relative;
    padding: 50px 20px;
    background: linear-gradient(135deg, #f9f9f9, #e0e0e0);
}

.testimonials h3 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
    animation: fadeInDown 1s ease-in-out;
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.quote-icon {
    font-size: 1.5rem;
    color: #ccc;
    animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.testimonials p {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 40px;
    color: #555;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}

.testimonial-item p {
    margin: 15px 0;
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
}

/* Swiper Styles - Optimized */
.swipertest {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 40px;
    position: relative;
    overflow: hidden;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
}

.swiper-slide::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.swiper-pagination {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 10;
}

.swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    margin: 0 6px;
    background: #bbb;
    opacity: 0.6;
    transition: all 0.3s ease;
    border-radius: 50%;
    cursor: pointer;
}

.swiper-pagination-bullet-active {
    background: #007bff;
    opacity: 1;
    transform: scale(1.2);
}

/* Swiper Styles - Optimized */
.swipertest {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 40px;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    overflow: hidden;
}

.swiper-slide:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.swiper-pagination {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 10;
}

.swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    margin: 0 6px;
    background: linear-gradient(135deg, #007bff, #0056b3);
    opacity: 0.6;
    transition: all 0.3s ease;
    border-radius: 50%;
    cursor: pointer;
}

.swiper-pagination-bullet-active {
    background: #007bff;
    opacity: 1;
    transform: scale(1.2);
}

.swiper-button-next,
.swiper-button-prev {
    background-color: rgba(255, 255, 255, 0.8);
    color: #007bff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    background-color: #007bff;
    color: #fff;
    transform: scale(1.1);
}

.swiper-button-next::after,
.swiper-button-prev::after {
    font-size: 1.2rem;
}

.swiper-scrollbar {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.swiper-scrollbar-drag {
    background: #007bff;
    border-radius: 10px;
}

/* Testimonial Item - Optimized */
.testimonial-item {
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
    padding: 40px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 600px;
    margin: 20px auto;
    overflow: hidden;
    position: relative;
    z-index: 2;
}

.testimonial-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Testimonial Content - Optimized */
.testimonial-content {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    text-align: left;
    margin-top: 20px;
}

.testimonial-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #007bff;
    object-fit: cover;
    flex-shrink: 0;
    transition: transform 0.3s ease, border-color 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.testimonial-item:hover .testimonial-img {
    transform: scale(1.1);
    border-color: #0056b3;
}

.testimonials::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('baground.jpg') no-repeat center center/cover;
    opacity: 0.1;
    z-index: -1;
    pointer-events: none;
}

/* Star Ratings - Optimized */
.stars {
    color: #ffcc00;
    margin-top: 10px;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
}

.stars i {
    font-size: 1.2rem;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
}

.stars i:hover {
    transform: scale(1.2);
    color: #ff9900;
}
/* Quote Icons */
.quote-icon {
    font-size: 1.5rem;
    color: #ccc;
}

.quote-icon-left {
    margin-right: 10px;
}

.quote-icon-right {
    margin-left: 10px;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .testimonial-item {
        padding: 25px;
    }

    .testimonial-img {
        width: 60px;
        height: 60px;
    }

    .testimonials h3 {
        font-size: 1.8rem;
    }

    .testimonials p {
        font-size: 1rem;
        padding: 0 10px;
    }

    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
    }

    .swiper-pagination-bullet-active {
        transform: scale(1.1);
    }
}

@media (max-width: 480px) {
    .testimonial-item {
        padding: 20px;
    }

    .testimonial-img {
        width: 50px;
        height: 50px;
    }

    .testimonials h3 {
        font-size: 1.5rem;
    }

    .testimonials p {
        font-size: 0.9rem;
    }

    .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
    }
}

@media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
        display: none; 
    }

    .swiper-slide {
        padding: 10px;
    }
}

@media (max-width: 480px) {
    .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
    }
}

body.dark-mode {
    background-color: #121212;
    color: #e0e0e0;
}

.dark-mode .header {
    background: rgba(18, 18, 18, 0.9);
}

.dark-mode .nav-link {
    color: #e0e0e0;
}

.dark-mode .nav-link:hover {
    color: #007BFF;
}

.form-input {
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-input:focus {
    border-color: #007BFF;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
}

.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007BFF;
    color: white;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.scroll-to-top.visible {
    opacity: 1;
}

.scroll-to-top:hover {
    transform: scale(1.1);
}

.responsive-img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
}

.responsive-img:hover {
    transform: scale(1.05);
}

.loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #007BFF;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    margin: 20px auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
