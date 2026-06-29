// JavaScript Basics - Lesson 19
// Form validation

// Validation checks if user input is usable.
// We can show clear messages before submitting a form.

const accountForm = document.querySelector("#account-form");
const usernameInput = document.querySelector("#username-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const usernameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const result = document.querySelector("#result");

function setInputState(input, isValid) {
  input.classList.remove("valid", "invalid");
  input.classList.add(isValid ? "valid" : "invalid");
}

function validateUsername() {
  const username = usernameInput.value.trim();
  const isValid = username.length >= 3;

  usernameError.textContent = isValid ? "" : "Username must be at least 3 characters.";
  setInputState(usernameInput, isValid);
  return isValid;
}

function validateEmail() {
  const email = emailInput.value.trim();
  const isValid = email.includes("@") && email.includes(".");

  emailError.textContent = isValid ? "" : "Enter a valid email address.";
  setInputState(emailInput, isValid);
  return isValid;
}

function validatePassword() {
  const password = passwordInput.value;
  const isValid = password.length >= 6;

  passwordError.textContent = isValid ? "" : "Password must be at least 6 characters.";
  setInputState(passwordInput, isValid);
  return isValid;
}

usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

accountForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameIsValid = validateUsername();
  const emailIsValid = validateEmail();
  const passwordIsValid = validatePassword();

  if (usernameIsValid && emailIsValid && passwordIsValid) {
    result.textContent = `Account created for ${usernameInput.value.trim()}.`;
    result.classList.add("success");
  } else {
    result.textContent = "Please fix the form errors.";
    result.classList.remove("success");
  }
});

// Practice:
// 1. Add a confirm password input in the HTML.
// 2. Select it in this file.
// 3. Create a validateConfirmPassword function.
// 4. Check that password and confirm password are the same.
// 5. Only show success when every field is valid.

function validateConfirmPassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const isValid = password === confirmPassword;

  confirmPasswordError.textContent = isValid ? "" : "Passwords do not match.";
  setInputState(confirmPasswordInput, isValid);
  return isValid;
}

confirmPasswordInput.addEventListener("input", validateConfirmPassword);

accountForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameIsValid = validateUsername();
  const emailIsValid = validateEmail();
  const passwordIsValid = validatePassword();
  const confirmPasswordIsValid = validateConfirmPassword();

  if (usernameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid) {
    result.textContent = `Account created for ${usernameInput.value.trim()}.`;
    result.classList.add("success");
  } else {
    result.textContent = "Please fix the form errors.";
    result.classList.remove("success");
  }
}); 