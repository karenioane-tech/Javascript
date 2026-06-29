// JavaScript Basics - Lesson 16
// Events

// Events are actions that happen on a page:
// clicks, typing, hovering, submitting forms, and more.

const eventMessage = document.querySelector("#event-message");
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");
const usernameInput = document.querySelector("#username-input");
const typingOutput = document.querySelector("#typing-output");
const hoverBox = document.querySelector("#hover-box");
const signupForm = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email-input");
const formResult = document.querySelector("#form-result");

// 1. click event
clickButton.addEventListener("click", () => {
  eventMessage.textContent = "The button was clicked.";
});

// 2. input event
usernameInput.addEventListener("input", () => {
  const username = usernameInput.value.trim();

  if (username === "") {
    typingOutput.textContent = "Waiting for input...";
  } else {
    typingOutput.textContent = `You are typing: ${username}`;
  }
});

// 3. mouse events
hoverBox.addEventListener("mouseenter", () => {
  hoverBox.textContent = "Mouse entered!";
  hoverBox.classList.add("active");
});

hoverBox.addEventListener("mouseleave", () => {
  hoverBox.textContent = "Hover here";
  hoverBox.classList.remove("active");
});

// 4. submit event
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (email === "") {
    formResult.textContent = "Please enter an email.";
  } else {
    formResult.textContent = `Signed up with ${email}.`;
  }
});

// 5. reset the page text
resetButton.addEventListener("click", () => {
  eventMessage.textContent = "Interact with the page to see events happen.";
  usernameInput.value = "";
  typingOutput.textContent = "Waiting for input...";
  emailInput.value = "";
  formResult.textContent = "No form submitted yet.";
});

// Practice:
const colorPicker = document.querySelector("#color-picker");
const changeBackgroundColour = document.querySelector("#change-background-color");
const colorResult = document.querySelector("#color-result");

changeBackgroundColour.addEventListener("click", () => {
  document.body.style.backgroundColor = colorPicker.value;
  colorResult.textContent = `Current background colour: ${colorPicker.value}`;
});
// 1. Add another button in the HTML.
// 2. Select it in this JavaScript file.
// 3. When it is clicked, change the page background color.
// 4. Add another input in the HTML.
// 5. As the user types, show how many characters they have typed.
