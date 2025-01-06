// Dynamische Botschaften basierend auf der Tageszeit
const messages = {
    morning: "☀️ Starte deinen Tag mit dem besten Signal!",
    afternoon: "🚀 Lass dein Geld für dich arbeiten!",
    evening: "🌙 Beende deinen Tag mit einem Gewinn!"
};

// Funktion zur Auswahl der Botschaft basierend auf der Uhrzeit
function getDynamicMessage() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return messages.morning;
    } else if (hour < 18) {
        return messages.afternoon;
    } else {
        return messages.evening;
    }
}

// Setze die dynamische Botschaft
document.getElementById('dynamicMessage').innerText = getDynamicMessage();