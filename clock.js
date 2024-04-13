
    // Set the date and time for the countdown
    const countdownDate = new Date('2024-12-31T23:59:59').getTime();

    // Update the countdown every second
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown with different colors
        document.getElementById('countdown').innerHTML = `
            <span class="day">${days}d</span> 
            <span class="hour">${hours}h</span> 
            <span class="minute">${minutes}m</span> 
            <span class="second">${seconds}s</span>
        `;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = 'EXPIRED';
        }
    }, 1000);
