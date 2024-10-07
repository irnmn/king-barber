const mobileMenuButton = document.querySelector('#mobile-menu-button')
const mobileMenuClose = document.querySelector('#close-mobile-menu')
const mobileMenu = document.querySelector('#mobile-menu')

mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.add('opened')
})
mobileMenuClose.addEventListener('click', function() {
    mobileMenu.classList.remove('opened')
})

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        // Close the mobile menu by removing the 'opened' class
        document.getElementById('mobile-menu').classList.remove('opened');

        // Optionally: smooth scroll to the target section (if not already handled)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});