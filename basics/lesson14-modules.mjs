// JavaScript Basics - Lesson 14
// Modules

console.log("---- Lesson 14 ----");

// Modules let you split code into separate files.
// One file can export values, and another file can import them.

import greet, { appName, add, subtract, formatUser } from "./lesson14-helpers.mjs";
import welcomeStudent, { schoolName, multiply } from "./lesson14-practice-helpers.mjs";

// 1. Named imports
console.log(appName);
console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(formatUser("Karen", "student"));

// 2. Default import
// A file can have one default export.
console.log(greet("Karen"));

// 3. Why modules are useful
// They keep files smaller, easier to read, and easier to reuse.

const cartItems = [
  { name: "Book", price: 500 },
  { name: "Pen", price: 50 },
  { name: "Bag", price: 1200 }
];

function calculateCartTotal(items) {
  let total = 0;

  for (const item of items) {
    total += item.price;
  }

  return total;
}

console.log(`Cart total: ${calculateCartTotal(cartItems)}`);

// Practice:
// 1. Open lesson14-practice-helpers.mjs.
// 2. Export a constant called schoolName.
// 3. Export a function called multiply.
// 4. Export a default function called welcomeStudent.
// 5. Come back to this file and import them below.
// 6. Print schoolName.
// 7. Call multiply with two numbers and print the result.
// 8. Call welcomeStudent with your name and print the result.

console.log(schoolName);
console.log(multiply(6, 7));
console.log(welcomeStudent("Karen"));
