// Initialer Live-Counter
let userCount = 1542;

function incrementCounter() {
    const counterElement = document.getElementById('userCount');
    userCount += Math.floor(Math.random() * 5) + 1;
    counterElement.textContent = userCount;
}

// Zeige das Popup nach dem Video
window.onload = function() {
    setTimeout(() => {
        document.getElementById('joinPopup').style.display = 'block';
    }, 3000); // Zeige das Popup nach 3 Sekunden
};

// Button-Interaktion
document.getElementById('joinButton').addEventListener('click', () => {
    alert('Willkommen bei Holtrading! 🎉');
    incrementCounter();
});