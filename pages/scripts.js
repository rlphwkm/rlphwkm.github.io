document.addEventListener("DOMContentLoaded", () => {
    console.log("Main JavaScript loaded");

    // Dark mode toggle based on system preference or user selection
    const toggleDarkMode = () => {
        const currentTheme = localStorage.getItem("theme") || "auto";
        if (currentTheme === "dark" || (currentTheme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark-mode");
        } else {
            document.documentElement.classList.remove("dark-mode");
        }
    };
    toggleDarkMode();

    // Event listener for dark mode toggle button
    document.querySelector("#theme-toggle")?.addEventListener("click", () => {
        const isDarkMode = document.documentElement.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = anchor.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Additional global functionalities can be added here
});
