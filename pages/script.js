document.addEventListener("DOMContentLoaded", () => {
    const audioElements = {
        background: document.getElementById('background-music'),
        launch: document.getElementById('launch-sound'),
        hover: document.getElementById('hover-sound'),
        click: document.getElementById('click-sound'),
    };

    audioElements.background.volume = 0.50; // Background music level
    audioElements.launch.volume = 0.50; // Launch sound level

    let backgroundMusicPlayed = false;

    // Play sounds on user interaction
    document.body.addEventListener('click', () => {
        if (!backgroundMusicPlayed) {
            audioElements.launch.play().then(() => {
                setTimeout(() => {
                    audioElements.background.loop = true; // Loop background music
                    audioElements.background.play();
                }, 4000); // Wait 4 seconds
                backgroundMusicPlayed = true;
            }).catch(console.error);
        }
    });

    // Play hover and click sounds on cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            audioElements.hover.currentTime = 0; // Reset sound to start
            audioElements.hover.play().catch(console.error);
        });

        card.addEventListener('click', () => {
            audioElements.click.currentTime = 0; // Reset sound to start
            audioElements.click.play().catch(console.error);
        });
    });

    createParticles(); // Create particles on load

    function resetParticle(particle) {
        const edge = Math.floor(Math.random() * 4);
        let startX, startY;

        switch(edge) {
            case 0: startX = Math.random() * window.innerWidth; startY = -20; break;
            case 1: startX = window.innerWidth + 20; startY = Math.random() * window.innerHeight; break;
            case 2: startX = Math.random() * window.innerWidth; startY = window.innerHeight + 20; break;
            case 3: startX = -20; startY = Math.random() * window.innerHeight; break;
        }

        const endX = startX + (Math.random() - 0.5) * window.innerWidth * 2;
        const endY = startY + (Math.random() - 0.5) * window.innerHeight * 2;

        particle.style.setProperty('--start-x', `${startX}px`);
        particle.style.setProperty('--start-y', `${startY}px`);
        particle.style.setProperty('--end-x', `${endX}px`);
        particle.style.setProperty('--end-y', `${endY}px`);
        
        particle.style.setProperty('--float-duration', `${Math.random() * 10 + 10}s`);
        particle.style.animationDelay = `${Math.random() * -20}s`;
    }

    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);

        for (let i = 0; i < 75; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 6 + 4;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            resetParticle(particle);
            particlesContainer.appendChild(particle);
        }

        document.addEventListener('mousemove', (e) => {
            const radius = 100;
            particlesContainer.childNodes.forEach(particle => {
                const rect = particle.getBoundingClientRect();
                const dx = e.clientX - (rect.left + rect.width / 2);
                const dy = e.clientY - (rect.top + rect.height / 2);
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < radius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (radius - distance) / radius;
                    particle.style.transform = `translate(${Math.cos(angle) * force * 10}px, ${Math.sin(angle) * force * 10}px)`;
                }
            });
        });
    }

    // Apply initial theme based on system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.add('light');
    }

    // Listen for changes in color scheme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        document.body.classList.toggle('dark', event.matches);
        document.body.classList.toggle('light', !event.matches);
    });
});
