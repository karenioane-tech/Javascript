// JavaScript Basics - Lesson 8
// Strings

console.log("---- Lesson 8 ----");

const sentence = "JavaScript is fun";

console.log(sentence);
console.log(sentence.length);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.includes("fun"));
console.log(sentence.includes("boring"));
console.log(sentence.slice(0, 10));
console.log(sentence.slice(14));

const newSentence = sentence.replace("fun", "powerful");
console.log(newSentence);

const messyName = "   Karen   ";
console.log(messyName);
console.log(messyName.trim());

const namesText = "Amina,Brian,Karen";
const namesArray = namesText.split(",");
console.log(namesArray);

const joinedNames = namesArray.join(" - ");
console.log(joinedNames);

function makeUsername(name) {
  return name.trim().toLowerCase().replace(" ", "_");
}

console.log(makeUsername("  Karen Kim  "));

// Practice solution
const userEmail = "  JOHN@EXAMPLE.COM  ";
const cleanedEmail = userEmail.trim().toLowerCase();
console.log(cleanedEmail);

const messageText = "JavaScript is a powerful programming language.";
console.log(messageText.includes("JavaScript"));

const colorsText = "red,green,blue";
const colorsArray = colorsText.split(",");
console.log(colorsArray);

