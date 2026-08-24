document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio chargé avec succès !");

    // Optionnel : Agrandir les images au clic dans les pages projets
    const images = document.querySelectorAll('.tech-card img');

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.85)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '1000';

            const enlargedImg = document.createElement('img');
            enlargedImg.src = img.src;
            enlargedImg.style.maxWidth = '90%';
            enlargedImg.style.maxHeight = '90%';
            enlargedImg.style.borderRadius = '8px';

            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', () => {
                overlay.remove();
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.image-slider');

    sliders.forEach(slider => {
        const input = slider.querySelector('.slider-input');

        if (input) {
            // Mise à jour continue au survol / drag
            const updateSlider = () => {
                slider.style.setProperty('--position', `${input.value}%`);
            };

            input.addEventListener('input', updateSlider);
            input.addEventListener('change', updateSlider);

            // Forcer la position initiale au chargement
            updateSlider();
        }
    });
});

// --- GESTION DES CAROUSELS AUTO ---
const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.dot');
    const prevBtn = carousel.querySelector('.carousel-arrow.prev');
    const nextBtn = carousel.querySelector('.carousel-arrow.next');
    const intervalTime = parseInt(carousel.getAttribute('data-interval')) || 3000;

    let currentIndex = 0;
    let timer = null;

    if (slides.length <= 1) return;

    const goToSlide = (index) => {
        slides[currentIndex].classList.remove('active');
        if (dots[currentIndex]) dots[currentIndex].classList.remove('active');

        currentIndex = index;

        slides[currentIndex].classList.add('active');
        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    };

    const nextSlide = () => goToSlide((currentIndex + 1) % slides.length);
    const prevSlide = () => goToSlide((currentIndex - 1 + slides.length) % slides.length);

    const startTimer = () => {
        timer = setInterval(nextSlide, intervalTime);
    };

    const resetTimer = () => {
        clearInterval(timer);
        startTimer();
    };

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });
    }

    startTimer();
});