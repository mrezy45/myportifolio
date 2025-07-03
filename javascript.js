function toggleMenu() {
    const menu = document.querySelector('.navbar .menu');
    const menuIcon = document.querySelector('.menu-icon');

    // Toggle the 'show' class to display the menu
    menu.classList.toggle('show');

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0; // Check if the element is partially visible
}

function animateSectionsOnScroll() {
    const sections = document.querySelectorAll('.section:not(.slide-in-right)');

    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add('slide-in-right'); // Apply the animation when the section enters the viewport
        }
    });
}

//animations for hero section and navbar
function animateNavbarAndHeroOnLoad() {
    const hero = document.querySelector('.hero');

    if (hero) {
        hero.classList.add('slide-in-right'); // Apply the animation to the hero section
    }
}

// Ensure animations are triggered for the hero and other sections
window.addEventListener('scroll', animateSectionsOnScroll);
window.addEventListener('DOMContentLoaded', () => {
    animateNavbarAndHeroOnLoad(); // Trigger hero animations on DOM load
    animateSectionsOnScroll(); // Trigger section animations on DOM load
});