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
    const sections = document.querySelectorAll('.section:not(.slide-in-left):not(.slide-in-right)');
    let toggle = true;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add(toggle ? 'slide-in-left' : 'slide-in-right');
            toggle = !toggle; // Alternate between left and right
        }
    });
}

function animateNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.add('slide-in-left'); // Add the animation class to the navbar
    }
}

// Ensure animations are triggered for all sections on load and scroll
window.addEventListener('scroll', animateSectionsOnScroll);
window.addEventListener('DOMContentLoaded', () => {
    animateNavbar(); // Trigger navbar animation on DOM load
    animateSectionsOnScroll(); // Trigger section animations on DOM load
});

window.addEventListener('load', () => {
    animateNavbar(); // Trigger navbar animation on page load
    animateSectionsOnScroll(); // Trigger section animations on page load
});