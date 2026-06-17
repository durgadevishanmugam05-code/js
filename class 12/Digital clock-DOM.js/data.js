let is24Hour = true;

// Function to format time
function formatTime(date) {
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    
    if (!is24Hour) {
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = String(hours).padStart(2, '0');
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    
    return `${hours}:${minutes}:${seconds}`;
}

// Function to format date
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function to update clock
function updateClock() {
    let now = new Date();
    document.getElementById('clock').innerHTML = formatTime(now);
    document.getElementById('date').innerHTML = formatDate(now);
}

// Function to toggle 12/24 hour format
function toggleFormat() {
    is24Hour = !is24Hour;
    updateClock();
}

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);