const PUBLIC_KEY = "GibhxrTVhOweq_SpF";
const SERVICE_ID = "service_b88qyd4";
const TEMPLATE_ID = "template_tf2hukw";

emailjs.init({
    publicKey: PUBLIC_KEY
});

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contact-form");
    const sendButton = document.getElementById("send-button");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        sendButton.innerText = "Sending...";
        sendButton.disabled = true;

        const templateParams = {
            name: contactForm.querySelector('[name="name"]').value,
            email: contactForm.querySelector('[name="email"]').value,
            title: contactForm.querySelector('[name="title"]').value,
            message: contactForm.querySelector('[name="message"]').value
        };

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams
        )
        .then(function () {
            alert("Message sent successfully!");

            contactForm.reset();
            sendButton.innerText = "Send Message";
            sendButton.disabled = false;
        })
        .catch(function (error) {
            console.error("EmailJS Error:", error);

            alert(
                "Failed to send the message.\n\n" +
                "Status: " + error.status +
                "\nMessage: " + error.text
            );

            sendButton.innerText = "Send Message";
            sendButton.disabled = false;
        });
    });

});