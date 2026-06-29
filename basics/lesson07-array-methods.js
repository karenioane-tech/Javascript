// JavaScript Basics - Lesson 7
// Array methods

console.log("---- Lesson 7 ----");

const numbers = [2, 4, 6, 8, 10];

numbers.forEach((number) => {
  console.log(`Number from forEach: ${number}`);
});

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);

const bigNumbers = numbers.filter((number) => {
  return number > 5;
});

console.log(bigNumbers);

const firstBigNumber = numbers.find((number) => {
  return number > 5;
});

console.log(firstBigNumber);

const sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);

console.log(`Sum: ${sum}`);

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

// Practice solution
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

