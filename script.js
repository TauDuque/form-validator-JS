const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  //API
  isValid = form.checkValidity();
  // estilo mensagem erro
  if (!isValid) {
    message.textContent = "Por favor, preencha todos os campos";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // compara as duas senhas
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Confirme se as senhas combinam";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  // estilo acesso permitido
  if (isValid && passwordsMatch) {
    message.textContent = "Registro confirmado!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFormData() {
  const user = {
    name: form.nome.value,
    phone: form.fone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  //validar formulario
  validateForm();
  // enviar dados se registro é válido
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// event listeners
form.addEventListener("submit", processFormData);
