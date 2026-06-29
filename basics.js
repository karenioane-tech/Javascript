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
    model: "iPhone 15 Pro",
    storage: "512GB",
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

console.log("---- Lesson 6 ----");

// JavaScript Basics - Lesson 6
// Loops

// A loop repeats code without you writing it again and again.

// 1. for loop
// This is useful when you know how many times you want to repeat something.
for (let count = 1; count <= 5; count++) {
  console.log(`Count: ${count}`);
}

// 2. Looping through numbers
for (let number = 1; number <= 10; number++) {
  console.log(`Number: ${number}`);
}

// 3. Use conditions inside loops
for (let number = 1; number <= 10; number++) {
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else {
    console.log(`${number} is odd.`);
  }
}

// 4. while loop
// A while loop keeps running while a condition is true.
let lives = 3;

while (lives > 0) {
  console.log(`You have ${lives} lives left.`);
  lives--;
}

console.log("Game over.");

// 5. Building a total with a loop
const prices = [100, 250, 75, 300];
let totalPrice = 0;

for (const price of prices) {
  totalPrice += price;
}

console.log(`Total price: ${totalPrice}`);

// Practice:
// 1. Create a for loop that prints numbers from 1 to 20.
// 2. Inside the loop, print "Multiple of 5" if the number can be divided by 5.
// 3. Create an array called marks with 4 numbers.
// 4. Use a loop to calculate the total marks.
// 5. Print the total marks.

for (let i =1; i <= 20; i++) {
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

console.log("---- Lesson 7 ----");

// JavaScript Basics - Lesson 7
// Array methods

// Array methods help you work with lists using less code.

const numbers = [2, 4, 6, 8, 10];

// 1. forEach
// forEach runs a function once for every item in an array.
numbers.forEach((number) => {
  console.log(`Number from forEach: ${number}`);
});

// 2. map
// map creates a new array by changing each item.
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);

// 3. filter
// filter creates a new array with only the items that pass a condition.
const bigNumbers = numbers.filter((number) => {
  return number > 5;
});

console.log(bigNumbers);

// 4. find
// find returns the first item that matches a condition.
const firstBigNumber = numbers.find((number) => {
  return number > 5;
});

console.log(firstBigNumber);

// 5. reduce
// reduce can turn an array into one final value, like a total.
const sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);

console.log(`Sum: ${sum}`);

// Array methods are very useful with arrays of objects.
const cart = [
  { name: "Notebook", price: 120 },
  { name: "Pen", price: 30 },
  { name: "Bag", price: 1500 }
];

const expensiveItems = cart.filter((item) => {
  return item.price > 100;
});

console.log(expensiveItems);

const itemNames = cart.map((item) => {
  return item.name;
});

console.log(itemNames);

const cartTotal = cart.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log(`Cart total: ${cartTotal}`);

// Practice:
// 1. Create an array called ages with 5 numbers.
// 2. Use forEach to print each age.
// 3. Use map to create a new array where each age is increased by 1.
// 4. Use filter to create a new array with only ages 18 and above.
// 5. Use reduce to calculate the total of all ages.

const ages = [15, 22, 17, 30, 19];

ages.forEach((age) => {
    console.log(age);
});

const increasedAges = ages.map((age) => {
    return age + 1;
});
console.log(increasedAges);

const adultAges = ages.filter((age) => {
    return age >= 18;
});
console.log(adultAges);

const totalAges = ages.reduce((total, age) => {
    return total + age;
}, 0);
console.log(`Total of all ages: ${totalAges}`);

console.log("---- Lesson 8 ----");

// JavaScript Basics - Lesson 8
// Strings

// A string is text inside quotes, double quotes, or backticks.
const sentence = "JavaScript is fun";

console.log(sentence);
console.log(sentence.length); // number of characters

// 1. Changing case
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// 2. Checking if text includes something
console.log(sentence.includes("fun"));
console.log(sentence.includes("boring"));

// 3. Getting part of a string
console.log(sentence.slice(0, 10));
console.log(sentence.slice(14));

// 4. Replacing text
const newSentence = sentence.replace("fun", "powerful");
console.log(newSentence);

// 5. Removing extra spaces
const messyName = "   Karen   ";
console.log(messyName);
console.log(messyName.trim());

// 6. Splitting a string into an array
const namesText = "Amina,Brian,Karen";
const namesArray = namesText.split(",");
console.log(namesArray);

// 7. Joining an array into a string
const joinedNames = namesArray.join(" - ");
console.log(joinedNames);

// String methods are useful in functions.
function makeUsername(name) {
  return name.trim().toLowerCase().replace(" ", "_");
}

console.log(makeUsername("  Karen Kim  "));

// Practice:
// 1. Create a variable called userEmail with extra spaces and uppercase letters.
// 2. Use trim and toLowerCase to clean it.
// 3. Print the cleaned email.
// 4. Create a variable called messageText.
// 5. Check if messageText includes the word "JavaScript".
// 6. Split this string into an array: "red,green,blue".

const userEmail = "  JOHN@EXAMPLE.COM  ";
const cleanedEmail = userEmail.trim().toLowerCase();
console.log(cleanedEmail);

const messageText = "JavaScript is a powerful programming language.";
console.log(messageText.includes("JavaScript"));

const colorsText = "red,green,blue";
const colorsArray = colorsText.split(",");
console.log(colorsArray);

console.log("---- Lesson 9 ----");

// JavaScript Basics - Lesson 9
// Numbers and Math

const price = 99.75;
const quantity = 3;

console.log(price);
console.log(quantity);
console.log(price * quantity);

// 1. Rounding numbers
console.log(Math.round(4.6)); // nearest whole number
console.log(Math.floor(4.9)); // round down
console.log(Math.ceil(4.1)); // round up

// 2. Minimum and maximum
console.log(Math.min(12, 5, 30, 8));
console.log(Math.max(12, 5, 30, 8));

// 3. Random numbers
// Math.random() gives a number from 0 up to, but not including, 1.
console.log(Math.random());

// Random whole number from 1 to 10.
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Random number: ${randomNumber}`);

// 4. Converting strings to numbers
const numberText = "42";
const convertedNumber = Number(numberText);

console.log(numberText);
console.log(convertedNumber);
console.log(convertedNumber + 8);

// 5. Formatting decimals
const totalWithDecimals = 10 / 3;
console.log(totalWithDecimals);
console.log(totalWithDecimals.toFixed(2));

// Numbers are useful in real calculations.
function calculateTotal(itemPrice, itemQuantity) {
  return itemPrice * itemQuantity;
}

console.log(calculateTotal(250, 4));

function applyDiscount(originalPrice, discountPercent) {
  const discountAmount = originalPrice * (discountPercent / 100);
  return originalPrice - discountAmount;
}

console.log(applyDiscount(1000, 15));

// Practice:
// 1. Create a variable called billTotal with a decimal number.
// 2. Print billTotal rounded to 2 decimal places.
// 3. Create a random whole number from 1 to 6, like a dice roll.
// 4. Create a function called calculateArea.
// 5. It should accept width and height, then return width * height.
// 6. Call calculateArea and print the result.

const billTotal = 123.4567;
console.log(billTotal.toFixed(2));

const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(`Dice roll: ${diceRoll}`);

function calculateArea(width, height) {
    return width * height;
}

const area = calculateArea(5, 10);
console.log(`Area: ${area}`);

console.log("---- Lesson 10 ----");

// JavaScript Basics - Lesson 10
// Dates

// A Date represents a specific moment in time.
const today = new Date();

console.log(today);

// 1. Getting parts of a date
console.log(today.getFullYear());
console.log(today.getMonth()); // months start at 0, so January is 0
console.log(today.getDate()); // day of the month
console.log(today.getDay()); // day of the week, Sunday is 0

// 2. Creating your own date
const birthday = new Date("2006-05-12");
console.log(birthday);

// 3. Formatting dates
console.log(today.toDateString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

// 4. Comparing dates
const deadline = new Date("2026-12-31");

if (today < deadline) {
  console.log("The deadline is still ahead.");
} else {
  console.log("The deadline has passed.");
}

// 5. Calculating days between dates
const startDate = new Date("2026-01-01");
const endDate = new Date("2026-01-10");
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const differenceInMilliseconds = endDate - startDate;
const differenceInDays = differenceInMilliseconds / millisecondsPerDay;

console.log(`Days between dates: ${differenceInDays}`);

// Dates are useful in functions.
function getCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

console.log(getCurrentYear());

function isAdultByBirthYear(birthYear) {
  const currentYear = new Date().getFullYear();
  const ageFromYear = currentYear - birthYear;
  return ageFromYear >= 18;
}

console.log(isAdultByBirthYear(2005));
console.log(isAdultByBirthYear(2012));

// Practice:
// 1. Create a variable called now and store the current date.
// 2. Print the current year from now.
// 3. Print the current month from now.
// 4. Create a date for your next birthday.
// 5. Compare now with your next birthday.
// 6. Print "Birthday is coming" if the birthday is in the future.

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());

const nextBirthday = new Date("2026-12-15");

if (now < nextBirthday) {
    console.log("Birthday is coming");
} else {
    console.log("Birthday has passed");
}

console.log("---- Lesson 11 ----");

// JavaScript Basics - Lesson 11
// Destructuring

// Destructuring is a shortcut for taking values out of arrays and objects.

// 1. Array destructuring
const favoriteColors = ["blue", "green", "purple"];

const [firstColor, secondColor, thirdColor] = favoriteColors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// You can skip items with an empty space.
const [mainColor, , lastColor] = favoriteColors;

console.log(mainColor);
console.log(lastColor);

// 2. Object destructuring
const laptop = {
  brand: "HP",
  model: "EliteBook",
  memory: "16GB",
  storage: "512GB"
};

const { brand, model, memory, storage } = laptop;

console.log(brand);
console.log(model);
console.log(memory);
console.log(storage);

// 3. Renaming while destructuring
const { brand: laptopBrand, model: laptopModel } = laptop;

console.log(laptopBrand);
console.log(laptopModel);

// 4. Default values
const userProfile = {
  username: "karen"
};

const { username, role = "student" } = userProfile;

console.log(username);
console.log(role);

// 5. Destructuring function parameters
function describeLaptop({ brand, model, storage }) {
  console.log(`${brand} ${model} has ${storage} storage.`);
}

describeLaptop(laptop);

// This is very common with arrays of objects.
const orders = [
  { item: "Book", amount: 500 },
  { item: "Pen", amount: 50 },
  { item: "Bag", amount: 1200 }
];

for (const { item, amount } of orders) {
  console.log(`${item}: ${amount}`);
}

// Practice:
// 1. Create an array called cities with 3 city names.
// 2. Use destructuring to get the first and second city.
// 3. Print both cities.
// 4. Create an object called movie with title, year, and rating.
// 5. Use destructuring to get title and rating.
// 6. Print a sentence like:
//    TITLE has a rating of RATING.

const cities = ["Nairobi", "Mombasa", "Kisumu"];
const [firstCity, secondCity] = cities;
console.log(firstCity);
console.log(secondCity);

const movie = {
    title: "Inception",
    year: 2010,
    rating: 8.8
};

const { title, rating } = movie;
console.log(`${title} has a rating of ${rating}.`);

console.log("---- Lesson 12 ----");

// JavaScript Basics - Lesson 12
// Spread and rest

// Spread and rest both use three dots: ...
// Spread expands values. Rest gathers values.

// 1. Spread with arrays
const firstNumbers = [1, 2, 3];
const secondNumbers = [4, 5, 6];
const allNumbers = [...firstNumbers, ...secondNumbers];

console.log(allNumbers);

// You can also add new items while spreading.
const moreNumbers = [0, ...firstNumbers, 10];
console.log(moreNumbers);

// 2. Copying arrays
const originalFruits = ["mango", "apple", "orange"];
const copiedFruits = [...originalFruits];

copiedFruits.push("banana");

console.log(originalFruits);
console.log(copiedFruits);

// 3. Spread with objects
const basicUser = {
  name: "Karen",
  country: "Kenya"
};

const fullUser = {
  ...basicUser,
  age: 18,
  isStudent: true
};

console.log(fullUser);

// You can override object properties with spread.
const updatedUser = {
  ...fullUser,
  age: 19
};

console.log(updatedUser);

// 4. Rest in function parameters
// Rest gathers many arguments into one array.
function addMany(...values) {
  let total = 0;

  for (const value of values) {
    total += value;
  }

  return total;
}

console.log(addMany(1, 2, 3));
console.log(addMany(10, 20, 30, 40));

// 5. Rest with destructuring
const [winner, runnerUp, ...otherPlayers] = ["Amina", "Brian", "Karen", "David", "Faith"];

console.log(winner);
console.log(runnerUp);
console.log(otherPlayers);

const { name: userName, ...otherDetails } = fullUser;

console.log(userName);
console.log(otherDetails);

// Practice:
// 1. Create two arrays called morningTasks and eveningTasks.
// 2. Use spread to combine them into allTasks.
// 3. Print allTasks.
// 4. Create an object called basicProduct with name and price.
// 5. Use spread to create detailedProduct and add category and inStock.
// 6. Create a function called multiplyMany that uses rest parameters.
// 7. It should multiply all numbers passed into it and return the result.

const morningTasks = ["Exercise", "Breakfast", "Check emails"];
const eveningTasks = ["Dinner", "Read a book", "Sleep"];

const allTasks = [...morningTasks, ...eveningTasks];
console.log(allTasks);

const basicProduct = {
    name: "Laptop",
    price: 1200
};

const detailedProduct = {
    ...basicProduct,
    category: "Electronics",
    inStock: true
};

console.log(detailedProduct);

function multiplyMany(...numbers) {
    let product = 1;
    for (const number of numbers) {
        product *= number;
    }
    return product;
}

console.log(multiplyMany(2, 3, 4));
