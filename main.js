const form = document.querySelector("form");
const emailInput = form.querySelector("input");
const container = document.querySelector(".container");
const card = document.querySelector(".card");
const dismiss = document.querySelector(".dismiss");

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmail();
});

dismiss.addEventListener("click", resetForm);

function validateEmail() {
    if (emailRegex.test(emailInput.value)) {
        showCard();
    } else {
        alert("Please enter a valid email address.");
    }
}

function showCard() {
    container.classList.add("hide");
    card.classList.remove("hide");
    emailInput.value = "";
}

function resetForm() {
    card.classList.add("hide");
    container.classList.remove("hide");
}
