// Menu 
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



// Skill Bar 
document.addEventListener("DOMContentLoaded", () => {
    // Animate skill bars
    document.querySelectorAll(".skill-bar").forEach(bar => {
        const targetWidth = bar.getAttribute("data-width");

        bar.style.width = "0%";
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 200);
    });

// Animate numbers
    document.querySelectorAll(".skill-count").forEach(counter => {
        let target = parseInt(counter.getAttribute("data-target"));
        let current = 0;
        let speed = 20; // Smaller = faster

        let interval = setInterval(() => {
            if (current < target) {
                current++;
                counter.textContent = current + "%";
            } else {
                clearInterval(interval);
            }
        }, speed);
    });
});