const starField = document.querySelector('.stars');

        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 3 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 2 + 1}s`;
            starField.appendChild(star);
        }

const buttons = document.querySelectorAll('.button');
const hoverSound = document.getElementById('lightsaber-hover-sound');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    hoverSound.currentTime = 0; // Reset sound to start
    hoverSound.play(); // Play sound
  });
});
