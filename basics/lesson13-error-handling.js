// JavaScript Basics - Lesson 13
// Error handling

console.log("---- Lesson 13 ----");

// Errors happen when JavaScript cannot complete an action.
// Error handling helps your program respond instead of crashing immediately.

// 1. try...catch
try {
  console.log("Trying to run some code...");
  const result = 10 / 2;
  console.log(result);
} catch (error) {
  console.log("Something went wrong.");
  console.log(error.message);
}

// 2. Catching a real error
try {
  const user = null;
  console.log(user.name);
} catch (error) {
  console.log("Could not read the user's name.");
  console.log(error.message);
}

// 3. Throwing your own error
function checkAge(userAge) {
  if (userAge < 18) {
    throw new Error("User must be 18 or older.");
  }

  return "User is allowed.";
}

try {
  console.log(checkAge(20));
  console.log(checkAge(15));
} catch (error) {
  console.log(error.message);
}

// 4. finally
// finally runs whether there was an error or not.
try {
  console.log("Opening file...");
  throw new Error("File not found.");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finished trying to open file.");
}

// 5. Using error handling in a function
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}

// Practice:
// 1. Create a function called checkPassword.
// 2. It should accept a password.
// 3. If the password length is less than 8, throw an error:
//    "Password must be at least 8 characters."
// 4. Otherwise, return "Password accepted."
// 5. Call checkPassword inside try...catch.
// 6. Print the error message if there is an error.

function checkPassword(password) {
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }

  return "Password accepted.";
}

try {
  console.log(checkPassword("short"));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(checkPassword("longenoughpassword"));
} catch (error) {
  console.log(error.message);
}
