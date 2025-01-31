let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');
let is24Hour = localStorage.getItem('timeFormat') === 'true' || true; // Get saved preference

// Initialize button state
const formatButton = document.querySelector('.toggle-switch button');
formatButton.setAttribute('data-format', is24Hour ? '24' : '12');

function updateClock() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    // Apply 12-hour format if needed
    if (!is24Hour) {
        hours = hours % 12 || 12; // Convert to 12-hour format
    }

    hrs.textContent = hours.toString().padStart(2, '0');
    mins.textContent = minutes;
    secs.textContent = seconds;
}

function toggleFormat() {
    is24Hour = !is24Hour;
    // Save preference to localStorage
    localStorage.setItem('timeFormat', is24Hour);
    // Update button appearance
    formatButton.setAttribute('data-format', is24Hour ? '24' : '12');
    formatButton.classList.add('active');
    setTimeout(() => formatButton.classList.remove('active'), 300);
    updateClock();
}

// Initial call to display time immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);