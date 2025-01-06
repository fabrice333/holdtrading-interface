const glitchText = document.querySelector('.glitch-text');

function addGlitchEffect() {
    glitchText.classList.toggle('glitch');
}

setInterval(addGlitchEffect, 500);
