// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Scroll to Top Button
const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Carousel Navigation
const carousel = document.querySelector('.mobile-carousel');
const carouselContainer = document.querySelector('.mobile-carousel-container');
const carouselCards = document.querySelectorAll('.mobile-vehicle-card');
const carouselDots = document.querySelectorAll('.carousel-dot');

// Set first card as active initially
carouselCards[0].classList.add('active');

// Update active dot based on scroll position
carousel.addEventListener('scroll', () => {
    const scrollPosition = carousel.scrollLeft;
    const cardWidth = carouselCards[0].offsetWidth + 20; // including gap

    const activeIndex = Math.round(scrollPosition / cardWidth);

    carouselDots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Update active card
    carouselCards.forEach((card, index) => {
        if (index === activeIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
});

// Click on dot to scroll to corresponding card
carouselDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        const cardWidth = carouselCards[0].offsetWidth + 20; // including gap

        carousel.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
    });
});

// Click on card to toggle details
carouselCards.forEach(card => {
    card.addEventListener('click', () => {
        if (!card.classList.contains('active')) return;

        const overlay = card.querySelector('.mobile-vehicle-overlay');
        const isVisible = overlay.style.opacity === '1';

        if (isVisible) {
            overlay.style.opacity = '0';
        } else {
            overlay.style.opacity = '1';
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
        return;
    }

    if (currentScroll > lastScroll && !mobileMenu.classList.contains('active')) {
        // Scroll down
        header.style.transform = 'translateY(-160%)';
    } else {
        // Scroll up
        header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});