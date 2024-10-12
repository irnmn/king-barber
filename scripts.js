// Отримуємо елементи кнопки мобільного меню, кнопки закриття та самого мобільного меню
const mobileMenuButton = document.querySelector('#mobile-menu-button');
const mobileMenuClose = document.querySelector('#close-mobile-menu');
const mobileMenu = document.querySelector('#mobile-menu');

// Додаємо обробник події на кнопку відкриття мобільного меню
mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.add('opened'); // Додаємо клас 'opened', щоб відкрити меню
});

// Додаємо обробник події на кнопку закриття мобільного меню
mobileMenuClose.addEventListener('click', function() {
    mobileMenu.classList.remove('opened'); // Видаляємо клас 'opened', щоб закрити меню
});

// Додаємо обробник події для кожного посилання в мобільному меню
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        // Закриває мобільне меню, видаляючи клас 'opened'
        document.getElementById('mobile-menu').classList.remove('opened');

        // Опціонально: плавне прокручування до цільового розділу
        const targetId = this.getAttribute('href'); // Отримуємо ID цільового елемента з атрибута 'href'
        const targetElement = document.querySelector(targetId); // Знаходимо цільовий елемент
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Плавне прокручування
            });
        }
    });
});

// Функція для відкриття модального вікна
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block"; // Встановлюємо стиль для показу модального вікна
}

// Функція для закриття модального вікна
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none"; // Вс