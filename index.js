//header.js
// index.js
fetch("header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;

        // Re-initialize any JS in the header AFTER it's loaded
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('show');
            });
        }
    });


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
        });});

