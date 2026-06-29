// JavaScript Basics - Lesson 3
// Functions

console.log("---- Lesson 3 ----");

function greet() {
  console.log("Hello from a function!");
}

greet();
greet();

function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}

greetPerson("Karen");
greetPerson("Alex");

function add(a, b) {
  return a + b;
}

const total = add(5, 7);
console.log(total);

const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(4, 3));

// Practice solution
function introduce(name, hobby) {
  console.log(`My name is ${name} and I enjoy ${hobby}.`);
}

introduce("Karen", "coding");

