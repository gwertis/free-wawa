if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/github.com/gwertis/free-wawa/sw.js')
    .then(reg => console.log("Service Worker Registered", reg))
    .catch(err => console.log("Service Worker Failed", err));
}

// Set countdown time in seconds (15 minutes)
let timeLeft = 15 * 60; 

// Get elements
const countdownElement = document.getElementById('countdown');
const redeemByElement = document.getElementById('redeem-by');

// Set expiration time
const now = new Date();
const expirationTime = new Date(now.getTime() + timeLeft * 1000);

// Format expiration time as "Month date, time"
const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' };
redeemByElement.textContent = `Redeem by ${expirationTime.toLocaleString('en-US', options)}`;

function updateCountdown() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownElement.textContent = `${minutes}:${seconds}`;
    
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateCountdown, 1000);
    } else {
        countdownElement.textContent = "Expired!";
        redeemByElement.textContent = "This code is no longer valid.";
    }
}

updateCountdown();
