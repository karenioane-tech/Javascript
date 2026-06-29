// JavaScript Basics - Lesson 20
// Async and promises

// A Promise represents work that will finish later.
// async and await make promises easier to read.

const loadUserButton = document.querySelector("#load-user-button");
const loadTasksButton = document.querySelector("#load-tasks-button");
const errorButton = document.querySelector("#error-button");
const message = document.querySelector("#message");
const output = document.querySelector("#output");
const taskList = document.querySelector("#task-list");

function fakeApi(data, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("Something went wrong while loading data.");
      } else {
        resolve(data);
      }
    }, 1000);
  });
}

function setLoading(text) {
  output.classList.remove("error");
  output.textContent = text;
  taskList.innerHTML = "";
}

// 1. Use async and await
loadUserButton.addEventListener("click", async () => {
  setLoading("Loading user...");

  const user = await fakeApi({
    name: "Karen",
    role: "JavaScript learner"
  });

  message.textContent = "User loaded.";
  output.textContent = `${user.name} is a ${user.role}.`;
});

// 2. Load an array
loadTasksButton.addEventListener("click", async () => {
  setLoading("Loading tasks...");

  const tasks = await fakeApi([
    "Read about promises",
    "Try async and await",
    "Handle an error"
  ]);

  output.textContent = "Tasks loaded.";

  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskList.append(taskItem);
  });
});

// 3. Handle errors with try and catch
errorButton.addEventListener("click", async () => {
  setLoading("Trying to load data...");

  try {
    await fakeApi(null, true);
  } catch (error) {
    output.classList.add("error");
    output.textContent = error;
    message.textContent = "The error was handled.";
  }
});

// Practice:
// 1. Create a function called loadScore.
// 2. It should return fakeApi(95).
// 3. Add a button in the HTML.
// 4. When clicked, show "Loading score..." first.
// 5. Then show the loaded score on the page.

function loadScore() {
  return fakeApi(95);
}

const loadScoreButton = document.querySelector("#load-score-button");
const scoreOutput = document.querySelector("#score-output");

loadScoreButton.addEventListener("click", async () => {
  scoreOutput.textContent = "Loading score...";

  const score = await loadScore();

  scoreOutput.textContent = `Score loaded: ${score}`;
}); 