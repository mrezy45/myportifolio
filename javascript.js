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