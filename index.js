//header.js
    document.addEventListener('DOMContentLoaded', () => {
    // Load header
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error("Failed to load header");
            return response.text();
        })
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
        })
        .catch(error => {
            console.error(error);
            // Fallback header is already in place
        });

    // Initialize mentor slider
    let currentGroup = 0;
    const groups = document.querySelectorAll('.slider-group');
    const totalGroups = groups.length;
    let autoRotateInterval;

    // Create dot indicators
    const dotContainer = document.getElementById('dot-indicators');
    groups.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'dot-indicator' + (index === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to mentors group ${index + 1}`);
    dot.onclick = () => showGroup(index);
    dotContainer.appendChild(dot);
});

    function showGroup(index) {
    // Validate index
    if (index < 0) index = totalGroups - 1;
    if (index >= totalGroups) index = 0;

    // Update groups visibility
    groups.forEach((group, i) => {
    group.classList.toggle('active', i === index);
});

    // Update dots
    const dots = document.querySelectorAll('.dot-indicator');
    dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
});

    currentGroup = index;

    // Reset auto-rotate timer
    resetAutoRotate();
}

    function resetAutoRotate() {
    clearInterval(autoRotateInterval);
    autoRotateInterval = setInterval(() => showGroup(currentGroup + 1), 5000);
}

    // Pause on hover
    document.getElementById('mentor-slider').addEventListener('mouseenter', () => {
    clearInterval(autoRotateInterval);
});

    document.getElementById('mentor-slider').addEventListener('mouseleave', resetAutoRotate);

    // Initialize
    showGroup(0);

    // Expose to buttons
    window.changeGroup = (direction) => showGroup(currentGroup + direction);
});

//other header.js


//footer.js
document.addEventListener('DOMContentLoaded', () => {
    // Load header
    fetch('footer.html')
        .then(response => {
            if (!response.ok) throw new Error("Failed to load header");
            return response.text();
        })
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        })
        .catch(error => {
            console.error(error);
            // Fallback header is already in place
        });

    // Initialize mentor slider
    let currentGroup = 0;
    const groups = document.querySelectorAll('.slider-group');
    const totalGroups = groups.length;
    let autoRotateInterval;

    // Create dot indicators
    const dotContainer = document.getElementById('dot-indicators');
    groups.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'dot-indicator' + (index === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to mentors group ${index + 1}`);
        dot.onclick = () => showGroup(index);
        dotContainer.appendChild(dot);
    });

    function showGroup(index) {
        // Validate index
        if (index < 0) index = totalGroups - 1;
        if (index >= totalGroups) index = 0;

        // Update groups visibility
        groups.forEach((group, i) => {
            group.classList.toggle('active', i === index);
        });

        // Update dots
        const dots = document.querySelectorAll('.dot-indicator');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        currentGroup = index;

        // Reset auto-rotate timer
        resetAutoRotate();
    }

    function resetAutoRotate() {
        clearInterval(autoRotateInterval);
        autoRotateInterval = setInterval(() => showGroup(currentGroup + 1), 5000);
    }

    // Pause on hover
    document.getElementById('mentor-slider').addEventListener('mouseenter', () => {
        clearInterval(autoRotateInterval);
    });

    document.getElementById('mentor-slider').addEventListener('mouseleave', resetAutoRotate);

    // Initialize
    showGroup(0);

    // Expose to buttons
    window.changeGroup = (direction) => showGroup(currentGroup + direction);
});








    document.addEventListener('DOMContentLoaded', function () {
        const menuBtn = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuOpenIcon = document.getElementById('menu-open');
        const menuCloseIcon = document.getElementById('menu-close');
        const header = document.querySelector('header');
        let lastScrollY = window.scrollY;
        let ticking = false;

        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            menuOpenIcon.classList.toggle('hidden');
            menuCloseIcon.classList.toggle('hidden');
            menuBtn.setAttribute('aria-expanded', !isHidden);
        });

        // Scroll hide/show
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (currentScrollY > lastScrollY && currentScrollY > 50) {
                        header.classList.add('-translate-y-full');
                    } else {
                        header.classList.remove('-translate-y-full');
                    }
                    lastScrollY = currentScrollY;
                    ticking = false;
                });

                ticking = true;
            }
        });

        // Auto-close menu on mobile when link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuOpenIcon.classList.remove('hidden');
                menuCloseIcon.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    });
