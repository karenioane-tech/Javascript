// JavaScript Basics - Lesson 1
// Run this file with: node basics.js

console.log("Hello, JavaScript!");

// 1. Variables
// Use const when the value should not change.
const firstName = "Karen";
const country = "Kenya";

// Use let when the value can change later.
let age = 20;
age = 18;

console.log(firstName);
console.log(country);
console.log(age);

// 2. Basic data types
const fullName = "Karen Kim"; // string
const score = 95; // number
const isLearning = true; // boolean
const emptyValue = null; // intentionally empty
let notAssigned; // undefined

console.log(fullName);
console.log(score);
console.log(isLearning);
console.log(emptyValue);
console.log(notAssigned);

// 3. Template literals
// Template literals use backticks and let you place variables inside ${}.
const message = `My name is ${firstName}, I am ${age}, and I live in ${country}.`;
console.log(message);

// Practice:
// 1. Change firstName, country, and age to your own details.
// 2. Create a variable called favoriteFood.
const favoriteFood = "Eggs";
// 3. Print this sentence:
//    My favorite food is YOUR_FOOD.
console.log(`My favorite food is ${favoriteFood}.`);

console.log("---- Lesson 2 ----");

// JavaScript Basics - Lesson 2
// Operators and conditions

// 1. Math operators
const num1 = 10;
const num2 = 3;

console.log(num1 + num2); // addition
console.log(num1 - num2); // subtraction
console.log(num1 * num2); // multiplication
console.log(num1 / num2); // division
console.log(num1 % num2); // remainder

// 2. Comparison operators
console.log(age > 18);
console.log(age >= 18);
console.log(age === 18);
console.log(age !== 18);

// 3. Conditions
if (age >= 18) {
  console.log("You are old enough to create an account.");
} else {
  console.log("You need permission to create an account.");
}

// 4. Combining conditions
const hasEmail = true;
const hasPassword = true;

if (hasEmail && hasPassword) {
  console.log("Login details are complete.");
} else {
  console.log("Email or password is missing.");
}

// Practice:
// 1. Create a variable called temperature.
// 2. If temperature is above 30, print "It is hot."
// 3. Otherwise, print "The weather is okay."

const temperature = 32;
if (temperature > 30) {
    console.log("It is hot");
} else {
    console.log("The weather is okay");
}

console.log("---- Lesson 3 ----");

// JavaScript Basics - Lesson 3
// Functions

// A function is a reusable block of code.
function greet() {
  console.log("Hello from a function!");
}

greet();
greet();

// Functions can receive values. These values are called parameters.
function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}

greetPerson("Karen");
greetPerson("Alex");

// Functions can return values.
function add(a, b) {
  return a + b;
}

const total = add(5, 7);
console.log(total);

// Arrow functions are a modern way to write functions.
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(4, 3));

// Practice:
// 1. Create a function called introduce.
// 2. It should accept name and hobby.
// 3. It should print:
//    My name is NAME and I enjoy HOBBY.
// 4. Call the function with your own name and hobby.

function introduce(name,hobby) {
    console.log(`My name is ${name} and I enjoy ${hobby}.`);
}
introduce("Karen","coding");

console.log("---- Lesson 4 ----");

// JavaScript Basics - Lesson 4
// Arrays

// An array stores a list of values.
const fruits = ["mango", "banana", "orange"];

console.log(fruits);
console.log(fruits[0]); // first item
console.log(fruits[1]); // second item
console.log(fruits.length); // number of items

// You can change an item by using its index.
fruits[1] = "apple";
console.log(fruits);

// You can add an item to the end with push.
fruits.push("pineapple");
console.log(fruits);

// You can remove the last item with pop.
fruits.pop();
console.log(fruits);

// Loop through an array with for...of.
for (const fruit of fruits) {
  console.log(`I like ${fruit}.`);
}

// Arrays can store numbers too.
const scores = [80, 95, 70, 100];

function showScores(scoreList) {
  for (const score of scoreList) {
    console.log(`Score: ${score}`);
  }
}

showScores(scores);

// Practice:
// 1. Create an array called friends with 3 names.
// 2. Print the first friend's name.
// 3. Add one more friend using push.
// 4. Use a for...of loop to print:
//    Hello, FRIEND_NAME!

const friends = ["Lorna", "James",  "Felix"];
console.log(friends[0]);
friends.push("Molyne");
for (const friend of friends) {
    console.log(`Hello, ${friend}!`);
}

console.log("---- Lesson 5 ----");

// JavaScript Basics - Lesson 5
// Objects

// An object stores related information using property names.
const student = {
  name: "Karen",
  age: 18,
  country: "Kenya",
  isLearningJavaScript: true
};

console.log(student);
console.log(student.name);
console.log(student.age);

// You can change a property.
student.age = 19;
console.log(student.age);

// You can add a new property.
student.favoriteFood = "Eggs";
console.log(student.favoriteFood);

// Objects can also contain arrays.
const course = {
  title: "JavaScript Basics",
  lessons: ["variables", "conditions", "functions", "arrays", "objects"],
  isBeginnerFriendly: true
};

console.log(course.title);
console.log(course.lessons[0]);
console.log(course.lessons.length);

// Objects can be used inside functions.
function describeStudent(person) {
  console.log(`${person.name} is ${person.age} years old and lives in ${person.country}.`);
}

describeStudent(student);

// Arrays can contain objects. This is very common in real apps.
const students = [
  { name: "Amina", score: 85 },
  { name: "Brian", score: 72 },
  { name: "Karen", score: 95 }
];

for (const learner of students) {
  console.log(`${learner.name} scored ${learner.score}.`);
}

// Practice:
// 1. Create an object called phone.
// 2. Give it brand, model, storage, and isNew properties.
// 3. Print a sentence like:
//    My phone is a BRAND MODEL with STORAGE storage.
// 4. Create an array called products with 3 objects.
//    Each object should have name and price.
// 5. Loop through products and print:
//    PRODUCT_NAME costs PRICE.

const phone = {
    brand: "Apple",
    model: "iPhone 14 Pro",
    storage: "256GB",
    isNew: true
};
console.log(`My phone is a ${phone.brand} ${phone.model} with ${phone.storage} storage.`);

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Headphones", price: 200 },
    { name: "Smartwatch", price: 300 }
];

for (const product of products) {
    console.log(`${product.name} costs $${product.price}.`);
}