// JavaScript Basics - Lesson 6
// Loops

console.log("---- Lesson 6 ----");

for (let count = 1; count <= 5; count++) {
  console.log(`Count: ${count}`);
}

for (let number = 1; number <= 10; number++) {
  console.log(`Number: ${number}`);
}

for (let number = 1; number <= 10; number++) {
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else {
    console.log(`${number} is odd.`);
  }
}

let lives = 3;

while (lives > 0) {
  console.log(`You have ${lives} lives left.`);
  lives--;
}

console.log("Game over.");

const prices = [100, 250, 75, 300];
let totalPrice = 0;

for (const price of prices) {
  totalPrice += price;
}

console.log(`Total price: ${totalPrice}`);

// Practice solution
for (let i = 1; i <= 20; i++) {
  console.log(i);

  if (i % 5 === 0) {
    console.log("Multiple of 5");
  }
}

const marks = [85, 90, 78, 92];
let totalMarks = 0;

for (const mark of marks) {
  totalMarks += mark;
}

console.log(`Total marks: ${totalMarks}`);

