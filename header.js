
    document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');

    let isMenuOpen = false;

    function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('mobile-menu-enter-active');
    mobileMenu.classList.remove('mobile-menu-enter');
    menuOpen.classList.add('hidden');
    menuClose.classList.remove('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'true');

    // Focus management
    const firstLink = mobileMenu.querySelector('a');
    if (firstLink) {
    setTimeout(() => firstLink.focus(), 100);
}
} else {
    mobileMenu.classList.add('mobile-menu-enter');
    mobileMenu.classList.remove('mobile-menu-enter-active');
    menuOpen.classList.remove('hidden');
    menuClose.classList.add('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'false');

    setTimeout(() => {
    mobileMenu.classList.add('hidden');
}, 300);
}
}

    mobileMenuButton.addEventListener('click', toggleMenu);

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
    if (isMenuOpen) {
    toggleMenu();
}
});
});

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
    if (isMenuOpen && !mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
    toggleMenu();
}
});

    // Handle escape key
    document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && isMenuOpen) {
    toggleMenu();
    mobileMenuButton.focus();
}
});

    // Handle window resize
    window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && isMenuOpen) {
    toggleMenu();
}
});
});
