// Initialer Live-Counter
let userCount = 1542;

function incrementCounter() {
    const counterElement = document.getElementById('userCount');
    userCount += Math.floor(Math.random() * 5) + 1;
    counterElement.textContent = userCount;
}

// Counter alle 5 Sekunden erhöhen
setInterval(incrementCounter, 5000);