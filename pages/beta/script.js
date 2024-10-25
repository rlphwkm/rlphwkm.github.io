const body = document.body;

// Function to detect and apply preferred color scheme
function detectTheme() {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    body.classList.toggle('dark', darkMode);
    body.classList.toggle('light', !darkMode);
    document.getElementById('background-music').play();
}

// Initial theme detection
detectTheme();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectTheme);
