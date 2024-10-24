// script.js
document.addEventListener("DOMContentLoaded", function () {
    const backgroundMusic = document.getElementById('background-music');
    const launchSound = document.getElementById('launch-sound');
    const hoverSound = document.getElementById('hover-sound');
    const clickSound = document.getElementById('click-sound');
    const stopHoverSound = new Audio('items/sounds/stop-hover-sound.wav');

    backgroundMusic.volume = 0.25; // Adjusts background music level
    launchSound.volume = 0.50; // adjusts launch sound level

    // Variable to track if the background music has been played
    let backgroundMusicPlayed = false;

    // Add a listener for a user interaction to play the launch sound
    document.body.addEventListener('click', function () {
        // Play launch sound only once on the first click
        if (!backgroundMusicPlayed) {
            launchSound.play().then(() => {
                // Wait for 3 seconds before starting the background music
                setTimeout(() => {
                    backgroundMusic.loop = true; // Ensure it loops
                    backgroundMusic.play(); // Play background music
                }, 4000); // Wait 4000 ms (4 seconds)
                backgroundMusicPlayed = true; // Set flag to true to avoid replaying
            }).catch(error => {
                console.error("Error playing launch sound:", error);
            });
        }
    });

    // Play hover sound when hovering over cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0; // Reset sound to start
            hoverSound.play().catch(error => {
                console.error("Error playing hover sound:", error);
            });
        });

        card.addEventListener('mouseleave', () => {
            stopHoverSound.currentTime = 0; // Reset sound to start
            stopHoverSound.play().catch(error => {
                console.error("Error playing stop hover sound:", error);
            });
        });

        card.addEventListener('click', () => {
            clickSound.currentTime = 0; // Reset sound to start
            clickSound.play().catch(error => {
                console.error("Error playing click sound:", error);
            });
        });
    });
});
