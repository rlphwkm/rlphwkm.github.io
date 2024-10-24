document.addEventListener("DOMContentLoaded", function () {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.25; // Adjust volume if necessary
    backgroundMusic.play().catch(error => {
        console.error("Error playing background music:", error);
    });
});