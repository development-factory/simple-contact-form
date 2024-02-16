const form = document.querySelector("#form");
const statusMessage = document.querySelector("#status");
const fromName = document.querySelector("#name");
const message = document.querySelector("#message");
const email = document.querySelector("#email");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (fromName.value && message.value && email.value) {
        sendEmail(fromName.value, email.value, message.value);
        fromName.value = "";
        email.value = "";
        message.value = "";
    }
});

emailjs.init({
    publicKey: "N_sBYD7rFk2lHxaC-",
    blockHeadless: true,
    limitRate: {
        id: "app",
        throttle: 10000,
    },
});

function sendEmail(fromName, email, message) {
    const templateParams = {
        name: fromName,
        email: email,
        message: message,
    };

    emailjs.send("service_b97yl2v", "template_5qn5vug", templateParams).then(
        (response) => {
            console.log("SUCCESS!", response.status, response.text);
            statusMessage.style.display = "block";
        },
        (error) => {
            console.log("FAILED...", error);
        }
    );
}
