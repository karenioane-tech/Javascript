// JavaScript Basics - Lesson 17
// DOM styles and classes

// JavaScript can change CSS styles directly.
// It can also add, remove, and toggle CSS classes.

const message = document.querySelector("#message");
const highlightButton = document.querySelector("#highlight-button");
const toggleThemeButton = document.querySelector("#toggle-theme-button");
const hideButton = document.querySelector("#hide-button");
const previewBox = document.querySelector("#preview-box");
const sizeInput = document.querySelector("#size-input");
const sizeOutput = document.querySelector("#size-output");
const colorSelect = document.querySelector("#color-select");
const status = document.querySelector("#status");

// 1. Toggle a class
highlightButton.addEventListener("click", () => {
  previewBox.classList.toggle("highlight");
  status.textContent = "Status: Highlight toggled.";
});

// 2. Toggle a class on the body
toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  status.textContent = "Status: Theme changed.";
});

// 3. Show and hide an element
hideButton.addEventListener("click", () => {
  message.classList.toggle("hidden");

  if (message.classList.contains("hidden")) {
    hideButton.textContent = "Show message";
  } else {
    hideButton.textContent = "Hide message";
  }
});

// 4. Change inline styles from an input
sizeInput.addEventListener("input", () => {
  const size = sizeInput.value;

  previewBox.style.width = `${size}px`;
  previewBox.style.height = `${size}px`;
  sizeOutput.textContent = `Current size: ${size}px`;
});

// 5. Change inline styles from a select menu
colorSelect.addEventListener("change", () => {
  previewBox.style.backgroundColor = colorSelect.value;
  status.textContent = "Status: Box color changed.";
});

// Practice:
const makeRoundButton = document.querySelector("#make-round-button");
const resetStylesButton = document.querySelector("#reset-styles-button");
const changeTextColorButton = document.querySelector("#change-text-color-button");

makeRoundButton.addEventListener("click", () => {
  previewBox.style.borderRadius = "50%";
  status.textContent = "Status: Box is round.";
});

resetStylesButton.addEventListener("click", () => {
  previewBox.style.borderRadius = "8px";
  previewBox.style.width = "180px";
  previewBox.style.height = "180px";
  previewBox.style.backgroundColor = "#eaf4ff";
  previewBox.style.color = "#24313f";
  previewBox.classList.remove("highlight");
  sizeInput.value = "180";
  sizeOutput.textContent = "Current size: 180px";
  colorSelect.value = "#eaf4ff";
  status.textContent = "Status: Styles reset.";
});

changeTextColorButton.addEventListener("click", () => {
  previewBox.style.color = "#d9480f";
  status.textContent = "Status: Text color changed.";
});

// 1. Add a new button in the HTML.
// 2. Select it in this JavaScript file.
// 3. When it is clicked, make the preview box round.
// 4. Add another button that resets the box styles.
// 5. Try changing the text color too.
