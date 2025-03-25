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

window.addEventListener('scroll', animateSectionsOnScroll);
window.addEventListener('load', animateSectionsOnScroll); // Trigger on page load