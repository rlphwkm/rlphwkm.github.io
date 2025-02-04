document.addEventListener("DOMContentLoaded", () => {
    loadTestimonials();
    setupFAQ();
});

function loadTestimonials() {
    fetch("./testimonials.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("testimonial-container");
            container.innerHTML = "";
            
            // Shuffle testimonials
            const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 3);
            
            shuffled.forEach(testimonial => {
                const div = document.createElement("div");
                div.classList.add("testimonial");
                div.innerHTML = `
                    <p>"${testimonial.text}"</p>
                    <h4>- ${testimonial.author}</h4>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => console.error("Error loading testimonials:", error));
}

function setupFAQ() {
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            answer.classList.toggle("active");
            answer.style.maxHeight = answer.classList.contains("active") ? answer.scrollHeight + "px" : "0";
        });
    });
}