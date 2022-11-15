const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#e-mail");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const sendMessageButton = document.querySelector(".send-message");

// Error messages HTML elements
const invalidName = document.querySelector(".contact-name");
const invalidEmail = document.querySelector(".contact-email");
const invalidSubject = document.querySelector(".contact-subject");
const invalidMessage = document.querySelector(".contact-message");
const successMessage = document.querySelector(".success-message");

// Function to validate
function validateForm () {
    event.preventDefault();

    let submitForm = true;

    if(checkLength(name.value, 6) === true) {
        invalidName.style.display = "none";
    } else {
        invalidName.style.display = "block";
        submitForm = false;
    }

    if(checkValidEmail(email.value) === true) {
        invalidEmail.style.display = "none";
    } else {
        invalidEmail.style.display = "block";
        submitForm = false;
    }

    if(checkLength(subject.value, 16) === true) {
        invalidSubject.style.display = "none";
    } else {
        invalidSubject.style.display = "block";
        submitForm = false;
    }

    if(checkLength(message.value, 26) === true) {
        invalidMessage.style.display = "none";
    } else {
        invalidMessage.style.display = "block";
        submitForm = false;
    }

    if(submitForm) {
        handleSubmitForm();
        sendMessageButton.innerHTML = "Success!"
        form.reset();
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function checkValidEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}

function handleSubmitForm() {
    successMessage.style.display = "block";
}