// JavaScript Basics - Lesson 9
// Numbers and Math

console.log("---- Lesson 9 ----");

const price = 99.75;
const quantity = 3;

console.log(price);
console.log(quantity);
console.log(price * quantity);

console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.min(12, 5, 30, 8));
console.log(Math.max(12, 5, 30, 8));
console.log(Math.random());

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Random number: ${randomNumber}`);

const numberText = "42";
const convertedNumber = Number(numberText);

console.log(numberText);
console.log(convertedNumber);
console.log(convertedNumber + 8);

const totalWithDecimals = 10 / 3;
console.log(totalWithDecimals);
console.log(totalWithDecimals.toFixed(2));

function calculateTotal(itemPrice, itemQuantity) {
  return itemPrice * itemQuantity;
}

console.log(calculateTotal(250, 4));

function applyDiscount(originalPrice, discountPercent) {
  const discountAmount = originalPrice * (discountPercent / 100);
  return originalPrice - discountAmount;
}

console.log(applyDiscount(1000, 15));

// Practice solution
const billTotal = 123.4567;
console.log(billTotal.toFixed(2));

const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(`Dice roll: ${diceRoll}`);

function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea(5, 10);
console.log(`Area: ${area}`);

