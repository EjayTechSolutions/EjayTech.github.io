const gridContainer = document.getElementById('skill');
const slideInterval = 3000;

function rotateCards () {
    const firstCard = document.querySelector('.card');

    gridContainer.appendChild(firstCard);
}

setInterval(rotateCards,slideInterval);

 const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu automatically when any link is clicked
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });