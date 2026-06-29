// JavaScript Basics - Lesson 12
// Spread and rest

console.log("---- Lesson 12 ----");

const firstNumbers = [1, 2, 3];
const secondNumbers = [4, 5, 6];
const allNumbers = [...firstNumbers, ...secondNumbers];

console.log(allNumbers);

const moreNumbers = [0, ...firstNumbers, 10];
console.log(moreNumbers);

const originalFruits = ["mango", "apple", "orange"];
const copiedFruits = [...originalFruits];

copiedFruits.push("banana");

console.log(originalFruits);
console.log(copiedFruits);

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

const updatedUser = {
  ...fullUser,
  age: 19
};

console.log(updatedUser);

function addMany(...values) {
  let total = 0;

  for (const value of values) {
    total += value;
  }

  return total;
}

console.log(addMany(1, 2, 3));
console.log(addMany(10, 20, 30, 40));

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
