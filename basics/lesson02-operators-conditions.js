// JavaScript Basics - Lesson 2
// Operators and conditions

console.log("---- Lesson 2 ----");

const age = 18;
const num1 = 10;
const num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(age > 18);
console.log(age >= 18);
console.log(age === 18);
console.log(age !== 18);

if (age >= 18) {
  console.log("You are old enough to create an account.");
} else {
  console.log("You need permission to create an account.");
}

const hasEmail = true;
const hasPassword = true;

if (hasEmail && hasPassword) {
  console.log("Login details are complete.");
} else {
  console.log("Email or password is missing.");
}

// Practice solution
const temperature = 32;

if (temperature > 30) {
  console.log("It is hot");
} else {
  console.log("The weather is okay");
}

