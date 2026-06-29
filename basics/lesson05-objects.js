// JavaScript Basics - Lesson 5
// Objects

console.log("---- Lesson 5 ----");

const student = {
  name: "Karen",
  age: 18,
  country: "Kenya",
  isLearningJavaScript: true
};

console.log(student);
console.log(student.name);
console.log(student.age);

student.age = 19;
console.log(student.age);

student.favoriteFood = "Eggs";
console.log(student.favoriteFood);

const course = {
  title: "JavaScript Basics",
  lessons: ["variables", "conditions", "functions", "arrays", "objects"],
  isBeginnerFriendly: true
};

console.log(course.title);
console.log(course.lessons[0]);
console.log(course.lessons.length);

function describeStudent(person) {
  console.log(`${person.name} is ${person.age} years old and lives in ${person.country}.`);
}

describeStudent(student);

const students = [
  { name: "Amina", score: 85 },
  { name: "Brian", score: 72 },
  { name: "Karen", score: 95 }
];

for (const learner of students) {
  console.log(`${learner.name} scored ${learner.score}.`);
}

// Practice solution
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

