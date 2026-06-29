// JavaScript Basics - Lesson 4
// Arrays

console.log("---- Lesson 4 ----");

const fruits = ["mango", "banana", "orange"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits.length);

fruits[1] = "apple";
console.log(fruits);

fruits.push("pineapple");
console.log(fruits);

fruits.pop();
console.log(fruits);

for (const fruit of fruits) {
  console.log(`I like ${fruit}.`);
}

const scores = [80, 95, 70, 100];

function showScores(scoreList) {
  for (const score of scoreList) {
    console.log(`Score: ${score}`);
  }
}

showScores(scores);

// Practice solution
const friends = ["Lorna", "James", "Felix"];
console.log(friends[0]);

friends.push("Molyne");

for (const friend of friends) {
  console.log(`Hello, ${friend}!`);
}

