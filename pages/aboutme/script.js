document.addEventListener("DOMContentLoaded", function () {
    const backgroundMusic = document.getElementById('background-music');
    const launchSound = document.getElementById('launch-sound');

    backgroundMusic.volume = 0.50; // Adjusts background music level
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
                }, 2000); // Wait 2000 ms (2 seconds)
                backgroundMusicPlayed = true; // Set flag to true to avoid replaying
            }).catch(error => {
                console.error("Error playing launch sound:", error);
            });
        }
    });
})