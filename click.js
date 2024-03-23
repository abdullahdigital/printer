
                              /* Timing */

// Set the opening and closing times for printing services
const openingTimeWeekdays = 17; // 5:00 PM
const closingTimeWeekdays = 21.5; // 9:30 PM
const openingTimeWeekends = 6; // 6:00 AM

// Function to update the timer
function updateTimingTimer() {
    const now = new Date();
    const currentDay = now.getDay();
    let isOpen = false;

    // Check if it's a weekday or weekend
    if (currentDay === 0 || currentDay === 6) {
        // Weekend
        if (now.getHours() >= openingTimeWeekends && now.getHours() < closingTimeWeekdays) {
            isOpen = true;
        }
    } else {
        // Weekday
        if (now.getHours() >= openingTimeWeekdays && now.getHours() < closingTimeWeekdays) {
            isOpen = true;
        }
    }

    // Display message based on shop status
    if (isOpen) {
        const remainingTime = closingTimeWeekdays - now.getHours();
        const minutes = 60 - now.getMinutes();
        const seconds = 60 - now.getSeconds();

        document.getElementById('timingTimer').innerHTML = `Printing services are currently Open. Closing in ${remainingTime} hours, ${minutes} minutes, ${seconds} seconds.`;
        document.getElementById('timingTimer').style.color = 'green';
    } else {
        const nextOpeningTime = currentDay === 0 || currentDay === 6 ? openingTimeWeekends : openingTimeWeekdays;
        const timeUntilNextOpening = nextOpeningTime - now.getHours();
        const minutes = 60 - now.getMinutes();
        const seconds = 60 - now.getSeconds();

        document.getElementById('timingTimer').innerHTML = `Printing services are currently closed. Reopening in ${timeUntilNextOpening} hours, ${minutes} minutes, ${seconds} seconds.`;
        document.getElementById('timingTimer').style.color = 'red';
    }
}

// Update the timer every second
setInterval(updateTimingTimer, 1000);

// Initial call to update the timer immediately
updateTimingTimer();
