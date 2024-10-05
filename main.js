const mobileMenuButton = document.querySelector('#mobile-menu-button')
const mobileMenuClose = document.querySelector('#close-mobile-menu')
const mobileMenu = document.querySelector('#mobile-menu')

mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.add('opened')
})
mobileMenuClose.addEventListener('click', function() {
    mobileMenu.classList.remove('opened')
})