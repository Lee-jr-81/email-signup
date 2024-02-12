"use strict";

// Selecting elements
//
const inputBox = document.getElementById("userInput");
const submitButton = document.getElementById("submitButton");
const confirmButton = document.getElementById("confirmationButton");
const form = document.getElementById("emailSignup");
const emailBox = document.getElementById("userInput");
const errorBox = document.getElementById("errorBox");
const mainForm = document.getElementById("signupForm");
const successBox = document.getElementById("successBox");

//
// Main function
form.addEventListener("submit", function (e) {
  e.preventDefault();

  validateInputs();
});

//
// Validate input function
function validateInputs() {
  const emailValue = inputBox.value.trim();
  if (emailValue === "" || emailValue === null) {
    inputBlank();
  } else if (!isValidEmail(emailValue)) {
    setError();
  } else {
    inputSuccess();
  }
}

//
// Valid email check
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//
// error function
function setError() {
  emailBox.classList.add("bg-red-300");
  emailBox.classList.add("text-red-500");
  emailBox.classList.remove("text-slate-700");
  errorBox.classList.remove("hidden");
}

//
// Blank function
function inputBlank() {
  emailBox.classList.add("bg-red-300");
  emailBox.classList.add("text-red-500");
  emailBox.classList.remove("text-slate-700");
  errorBox.classList.remove("hidden");
  errorBox.innertext = "input field can not be blank";
}

//
// Success function
function inputSuccess() {
  mainForm.classList.remove("grid");
  mainForm.classList.remove("sm:flex");
  mainForm.classList.add("hidden");
  successBox.classList.remove("hidden");
}

confirmButton.addEventListener("click", function () {
  mainForm.classList.remove("hidden");
  mainForm.classList.add("grid");
  mainForm.classList.add("sm:flex");
  successBox.classList.add("hidden");
});
