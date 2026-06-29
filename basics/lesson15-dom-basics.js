// JavaScript Basics - Lesson 15
// DOM basics

// DOM means Document Object Model.
// It is how JavaScript talks to HTML.

const mainTitle = document.querySelector("#main-title");
const description = document.querySelector("#description");
const changeTitleButton = document.querySelector("#change-title-button");
const addItemButton = document.querySelector("#add-item-button");
const nameInput = document.querySelector("#name-input");
const greeting = document.querySelector("#greeting");
const lessonList = document.querySelector("#lesson-list");
const status = document.querySelector("#status");
const statusButton = document.querySelector("#status-button");

console.log(mainTitle.textContent);

// 1. Change text
description.textContent = "JavaScript can update text, styles, and elements.";

// 2. Change styles by adding a class
mainTitle.classList.add("highlight");

// 3. Respond to a click
changeTitleButton.addEventListener("click", () => {
  mainTitle.textContent = "The title changed!";
});

// 4. Create and add an element
addItemButton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "New DOM item";
  lessonList.append(newItem);
});

// 5. Read input values
nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    greeting.textContent = "Hello!";
  } else {
    greeting.textContent = `Hello, ${name}!`;
  }
});

// Practice:
// 1. Add a new paragraph in the HTML with an id.
// 2. Select it in this JavaScript file.
// 3. Add a new button in the HTML.
// 4. When the button is clicked, change the paragraph text.
// 5. Try changing the paragraph color too.

statusButton.addEventListener("click", () => {
  status.textContent = "Status: Updated with JavaScript!";
  status.style.color = "#2b8a3e";
});
