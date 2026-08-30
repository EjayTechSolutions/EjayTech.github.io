const gridContainer = document.getElementById('skill');
const slideInterval = 3000;

function rotateCards () {
    const firstCard = document.querySelector('.card');

    gridContainer.appendChild(firstCard);
}

setInterval(rotateCards,slideInterval);
