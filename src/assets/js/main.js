document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the necessary elements from the DOM
    const menuButton = document.getElementById('menu-button'); // The hamburger/toggle icon
    const mobileMenu = document.getElementById('mobile-menu');   // The menu list itself

    // 2. Add an event listener to the button
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            // 3. Toggle the 'hidden' class on the mobile menu
            // This is the simplest way to show/hide the menu using Tailwind utilities
            mobileMenu.classList.toggle('hidden');
        });
    }
});