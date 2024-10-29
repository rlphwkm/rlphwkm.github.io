const body = document.body;

// Function to detect and apply preferred color scheme
function detectTheme() {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    body.classList.toggle('dark', darkMode);
    body.classList.toggle('light', !darkMode);
}

// Initial theme detection
detectTheme();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectTheme);

document.addEventListener("click", function() {
    const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.volume = 0.5; // Set volume
    backgroundMusic.play();
}, { once: true });


document.getElementById("expand-button").addEventListener("click", function() {
    const skillsContainer = document.getElementById("skills-container");
    skillsContainer.style.display = "block";
    this.style.display = "none"; // Hide the button
});
