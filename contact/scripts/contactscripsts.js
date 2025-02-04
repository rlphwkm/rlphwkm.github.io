document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    
    // Create styled pop-up
    const popup = document.createElement("div");
    popup.id = "successPopup";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px";
    popup.style.background = "#1E1E2E";
    popup.style.color = "#FFFFFF";
    popup.style.borderRadius = "8px";
    popup.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    popup.style.display = "none";
    popup.style.textAlign = "center";
    popup.innerHTML = "<p style='font-size: 18px; margin-bottom: 10px;'>Thank you! Your message has been sent.</p><button id='closePopup' style='padding: 10px 15px; border: none; background: #007BFF; color: white; border-radius: 5px; cursor: pointer;'>Close</button>";
    document.body.appendChild(popup);
    
    document.getElementById("closePopup").addEventListener("click", function() {
        popup.style.display = "none";
    });

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Data validation
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const captchaInput = document.getElementById("captcha").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill in all required fields.");
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        if (phone && !/^\+?[0-9\s-]+$/.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        if (captchaInput !== "7") {
            alert("Incorrect CAPTCHA answer. Please try again.");
            return;
        }

        // Gather form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log("Form Data Submitted:", formObject);
        popup.style.display = "block";
        contactForm.reset();
    });
});
