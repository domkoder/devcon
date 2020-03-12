const countdown = document.querySelector('.countdown');

// Set Launch Date(ms)
const launchDate = new Date('April 1 2020 12:00').getTime();

// Update every seconds using the setInterval function.
const interval = setInterval(() => {
  // Get the current date and time
  const current = new Date().getTime();
  // Distance from to the launch dat.
  const distance = launchDate - current;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (100 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display result
  countdown.innerHTML = `
    <div>${days} <span>Days</span></div>
    <div>${hours} <span>Hours</span></div>
    <div>${minutes} <span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;

  // If launch date passed
  if (launchDate < 0) {
    // Stop countdown
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
  count;
}, 1000);
