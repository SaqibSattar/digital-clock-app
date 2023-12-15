function updateClock() {
    const now = new Date();
    const hours = formatTimeUnit(now.getHours());
    const minutes = formatTimeUnit(now.getMinutes());
    const seconds = formatTimeUnit(now.getSeconds());

    displayTime("hours", hours);
    displayTime("minutes", minutes);
    displayTime("seconds", seconds);
}

function formatTimeUnit(unit) {
    return unit < 10 ? "0" + unit : unit;
}

function displayTime(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = value;
    }
}

setInterval(updateClock, 1000);
