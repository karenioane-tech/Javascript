// JavaScript Basics - Lesson 11
// Destructuring

console.log("---- Lesson 11 ----");

const favoriteColors = ["blue", "green", "purple"];
const [firstColor, secondColor, thirdColor] = favoriteColors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

const [mainColor, , lastColor] = favoriteColors;

console.log(mainColor);
console.log(lastColor);

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

const { brand: laptopBrand, model: laptopModel } = laptop;

console.log(laptopBrand);
console.log(laptopModel);

const userProfile = {
  username: "karen"
};

const { username, role = "student" } = userProfile;

console.log(username);
console.log(role);

function describeLaptop({ brand, model, storage }) {
  console.log(`${brand} ${model} has ${storage} storage.`);
}

describeLaptop(laptop);

const orders = [
  { item: "Book", amount: 500 },
  { item: "Pen", amount: 50 },
  { item: "Bag", amount: 1200 }
];

for (const { item, amount } of orders) {
  console.log(`${item}: ${amount}`);
}

// Practice solution
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

