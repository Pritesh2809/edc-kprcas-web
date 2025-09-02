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
        });
});



    document.addEventListener("DOMContentLoaded", function() {

    // --- Team Section Logic ---
    const teamData = {
    '2024': [
{name: 'Bavishnu M', role: 'Team Leader', img: 'https://i.postimg.cc/w3Kf09Td/baavi-anna.jpg'},
{name: 'Aadhavan GJ', role: 'Documentation & HR', img: 'https://i.postimg.cc/c1Kd9T4D/andy.jpg'},
{name: 'Barani Sri S', role: 'Content Creator', img: 'https://i.postimg.cc/nhmCDT2r/bharani-akka.jpg'},
{name: 'Aswin K', role: 'Design Thinking', img: 'https://i.postimg.cc/mDNfyFbR/Asw-in-K.jpg'},
{name: 'Pritesh RS', role: 'Editor', img: 'https://i.postimg.cc/x8twWDJ4/Pritesh-Photo.jpg'},
{name: 'Dharaneesh S', role: 'Social Media', img: 'https://i.postimg.cc/gjz9SkJh/Dharaneesh-SS.jpg'}
    ],
    '2025': [
{name: 'Bavishnu M', role: 'Mentor', img: 'https://i.postimg.cc/w3Kf09Td/baavi-anna.jpg'},
{name: 'Pritesh R S', role: 'Team Leader', img: 'https://i.postimg.cc/x8twWDJ4/Pritesh-Photo.jpg'},
{name: 'Anusha', role: 'Event Coordinator', img: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png'},
{name: 'Tarshan P', role: 'Design & Innovation', img: 'https://i.postimg.cc/1tr1vc3H/20250129_095328.jpg'},
{name: 'Akshaya', role: 'Content Creator', img: 'https://i.postimg.cc/SKLP4QbQ/IMG-9350.jpg'},
{name: 'Mithilesh', role: 'Marketing & Outreach', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/s458/blank-profile-picture-hd-images-photo.JPG'},
{name: 'James', role: 'Technical Support', img: 'https://i.postimg.cc/RVXVS99R/IMG-2923.avif'},
{name: 'Rakshan P', role: 'Social Media & PR', img: 'https://i.postimg.cc/7YRqDFHm/EDC25-Member-Rakshan-purushothaman.jpg'}
    ]
};

    const yearSelect = document.getElementById('year-select');
    const teamContainer = document.getElementById('team-container');

    function createTeamCard(member) {
    const initial = member.name.charAt(0);
    const imageContent = member.img
    ? `<img src="${member.img}" alt="${member.name}" loading="lazy" class="w-full h-full object-cover rounded-xl" />`
    : `<div class="w-full h-full flex items-center justify-center rounded-xl bg-gray-200 text-4xl font-bold text-gray-600">${initial}</div>`;

    return `
          <div class="relative w-[160px] sm:w-64 text-center group mb-16">
            <div class="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto -mb-16 rounded-xl shadow-lg transform group-hover:scale-110 transition duration-300">
              ${imageContent}
            </div>
            <div class="bg-white rounded-2xl shadow-lg pt-20 pb-6 px-4">
              <h3 class="text-sm md:text-lg font-bold text-blue-800">${member.name}</h3>
              <p class="text-xs md:text-sm text-gray-600">${member.role}</p>
            </div>
          </div>
        `;
}

    function renderTeam(year) {
    const members = teamData[year] || [];
    teamContainer.innerHTML = `
          <div class="flex flex-wrap justify-center gap-x-4 gap-y-8 md:gap-x-8 px-2">
            ${members.map(createTeamCard).join('')}
          </div>
        `;
}

    yearSelect.addEventListener('change', (e) => renderTeam(e.target.value));
    renderTeam(yearSelect.value); // Initial render


});
