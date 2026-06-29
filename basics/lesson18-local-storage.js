// JavaScript Basics - Lesson 18
// Local storage

// localStorage saves text in the browser.
// The data stays even after the page refreshes.

const nameInput = document.querySelector("#name-input");
const themeSelect = document.querySelector("#theme-select");
const saveButton = document.querySelector("#save-button");
const loadButton = document.querySelector("#load-button");
const clearButton = document.querySelector("#clear-button");
const welcomeMessage = document.querySelector("#welcome-message");
const profileCard = document.querySelector("#profile-card");
const profileName = document.querySelector("#profile-name");
const profileTheme = document.querySelector("#profile-theme");
const status = document.querySelector("#status");

function showProfile(name, theme) {
  const displayName = name || "No name saved yet.";

  profileName.textContent = displayName;
  profileTheme.textContent = `Theme: ${theme}`;
  welcomeMessage.textContent = name
    ? `Welcome back, ${name}.`
    : "Save data in the browser and load it later.";

  profileCard.classList.remove("green", "yellow");

  if (theme !== "blue") {
    profileCard.classList.add(theme);
  }
}

// 1. Save values
saveButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const theme = themeSelect.value;

  localStorage.setItem("studentName", name);
  localStorage.setItem("favoriteTheme", theme);

  showProfile(name, theme);
  status.textContent = "Status: Settings saved.";
});

// 2. Load values
loadButton.addEventListener("click", () => {
  const savedName = localStorage.getItem("studentName") || "";
  const savedTheme = localStorage.getItem("favoriteTheme") || "blue";

  nameInput.value = savedName;
  themeSelect.value = savedTheme;
  showProfile(savedName, savedTheme);
  status.textContent = "Status: Settings loaded.";
});

// 3. Clear values
clearButton.addEventListener("click", () => {
  localStorage.removeItem("studentName");
  localStorage.removeItem("favoriteTheme");

  nameInput.value = "";
  themeSelect.value = "blue";
  showProfile("", "blue");
  status.textContent = "Status: Settings cleared.";
});

// 4. Load saved data when the page opens
const savedName = localStorage.getItem("studentName") || "";
const savedTheme = localStorage.getItem("favoriteTheme") || "blue";

nameInput.value = savedName;
themeSelect.value = savedTheme;
showProfile(savedName, savedTheme);

// Practice:
// 1. Add an input for a favorite lesson number.
// 2. Save it using localStorage.setItem().
// 3. Load it using localStorage.getItem().
// 4. Show the saved lesson number on the page.
// 5. Clear it when the clear button is clicked.

localStorage.setItem("favoriteLesson", "16");
localStorage.getItem("favoriteLesson");
saveButton .addEventListener("click", () => {
  const lessonInput = document.querySelector("#lesson-input");
  const favoriteLesson = lessonInput.value.trim();
  localStorage.setItem("favoriteLesson", favoriteLesson);
  status.textContent = "Status: Favorite lesson saved.";
}
clearButton.addEventListener("click", () => {
  localStorage.removeItem("favoriteLesson");
  const lessonInput = document.querySelector("#lesson-input");
  lessonInput.value = "";
  status.textContent = "Status: Favorite lesson cleared.";
});

