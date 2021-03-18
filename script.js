const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;

function validateForm() {
  //API
  isValid = form.checkValidity();
  // estilo mensagem erro
  message.textContent = "Por favor, preencha todos os campos";
  message.style.color = "red";
  messageContainer.style.borderColor = "red";
}

function processFormData(e) {
  e.preventDefault();
  //validar formulario
  validateForm();
}

// event listeners
form.addEventListener("submit", processFormData);
